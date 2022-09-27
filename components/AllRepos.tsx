import React, { FC } from 'react'
import { BsGithub } from 'react-icons/bs'
import { GiRoundStar, GiStarFormation } from 'react-icons/gi'
import { FiCornerRightUp } from 'react-icons/fi'
import Link from 'next/link'
import { BiGitRepoForked } from 'react-icons/bi'
import { BsFileEarmarkCodeFill } from 'react-icons/bs'

interface Props {
    allRepos: {
        full_name: string,
        forks_count: number,
        language: string,
        stargazers_count: number,
        description: string,
        html_url: string,
        score: number,
        topics: string[],
        name: string

    }[]
}

const dotColors = ["bg-red-400","bg-green-400","bg-blue-400","bg-orange-400","bg-cyan-400"]

const AllRepos:FC<Props> = ({allRepos}) => {

    return (
    <div className='max-w-6xl mx-auto px-5 tablet:px-10 py-10'>
        <div className='flex items-center mb-6 gap-2'>
            <div className='text-primaryOne bg-primaryOne rounded-full text-[1rem] bg-opacity-20 p-2'>
                <GiStarFormation />
            </div>
            <h6 className='text-[1.3rem] font-semibold text-gray-700'>{`Public Repo (${allRepos.length})`}</h6>
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4'>
            {
                allRepos.map(({name,forks_count, topics, stargazers_count, language, html_url, description, score}, index) => (
                    <div key={index+2} className='bg-primaryTwo bg-opacity-10 hover:bg-opacity-[.14] transition duration-200 ease-in-out px-5 py-5 rounded-[10px] flex flex-col justify-between'>
                        <div>
                            <Link href={html_url}>
                                <div className='flex cursor-pointer items-start gap-2'>
                                    <BsGithub className='w-[20px] h-[20px] mt-1' />
                                    <h6 className='text-[1.1rem] font-semibold text-gray-700 break-all uppercase'>{name}</h6>
                                </div>
                            </Link>
                            
                            {/* topics */}
                            <div className='flex gap-x-2 pt-2 justify-start  break-words flex-wrap '>
                                {
                                    topics.map( (topic) => (
                                        <div key={topic+1} className='flex items-center gap-2'>
                                            <div className={'w-2 h-2 rounded-full '+dotColors[Math.ceil(Math.random() * 4)] }></div>
                                            <p className='text-gray-500 text-[14px] font-semibold'>{topic}</p>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>

                        <p className='text-gray-700 py-5'>{(description != null ? description : "No description available" )}</p>

                        <div className='flex gap-2'>
                            <div className='flex gap-1 rounded-[20px] px-[8px] py-[2px] bg-green-400 bg-opacity-20  items-center'>
                                <BiGitRepoForked className='text-green-400'/>
                                <p className='text-gray-700 text-[0.8rem] font-semibold'>{forks_count}</p>
                            </div>

                            <div className='flex gap-1 rounded-[20px] px-[8px] py-[2px] bg-blue-400 bg-opacity-20  items-center'>
                                <GiRoundStar className='text-blue-400'/>
                                <p className='text-gray-700 text-[0.8rem] font-semibold'>{stargazers_count}</p>
                            </div>
                            
                            <div className='flex gap-1 rounded-[20px] px-[8px] py-[2px] bg-orange-400 bg-opacity-20  items-center'>
                                <BsFileEarmarkCodeFill className='text-orange-400'/>
                                <p className='text-gray-700 text-[0.8rem] font-semibold'>{language || ""}</p>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>

    </div>
    )
}

export default AllRepos;