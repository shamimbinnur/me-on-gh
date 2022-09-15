import React, { FC } from 'react'
import { BsGithub } from 'react-icons/bs'
import { GiRoundStar, GiStarFormation } from 'react-icons/gi'
import { FiCornerRightUp } from 'react-icons/fi'
import Link from 'next/link'
import { BiGitRepoForked } from 'react-icons/bi'

interface Props {
    popularRepos: {
        full_name: string,
        forks_count: number,
        language: string,
        stargazers_count: number,
        description: string,
        html_url: string,
        score: number,

    }[]
}

const PopularRepo:FC<Props> = ({popularRepos}) => {
    return (
    <div className='max-w-6xl mx-auto px-10 py-10'>
        <div className='flex items-center mb-6 gap-2'>
            <div className='text-primaryOne bg-primaryOne rounded-[8px] text-[1.2rem] bg-opacity-20 p-1'>
                <GiStarFormation />
            </div>
            <h6 className='text-[1.3rem] font-semibold text-gray-700'>Popular Repo</h6>
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4'>
            {
                popularRepos.map(({full_name,forks_count, stargazers_count, html_url, description, score}, index) => (
                    <div key={index+2} className='bg-primaryTwo bg-opacity-10 px-4 py-4 rounded-[10px]'>
                        <Link href={html_url}>
                            <div className='flex cursor-pointer items-start gap-2'>
                                <BsGithub className='w-[20px] h-[20px] mt-1' />
                                <h6 className='text-[1.1rem] font-semibold text-gray-700 break-all'>{full_name}</h6>
                            </div>
                        </Link>
                        <p className='text-gray-700 py-2'>{(description != null ? description : "No description available" )}</p>

                        <div className='flex gap-2'>
                            <div className='flex gap-1 rounded-[20px] px-[8px] py-[2px] bg-red-400 bg-opacity-20  items-center'>
                                <FiCornerRightUp className='text-red-400'/>
                                <p className='text-gray-800 text-[0.8rem] font-semibold'>{score}</p>
                            </div>

                            <div className='flex gap-1 rounded-[20px] px-[8px] py-[2px] bg-green-400 bg-opacity-20  items-center'>
                                <BiGitRepoForked className='text-green-400'/>
                                <p className='text-gray-800 text-[0.8rem] font-semibold'>{forks_count}</p>
                            </div>

                            <div className='flex gap-1 rounded-[20px] px-[8px] py-[2px] bg-blue-400 bg-opacity-20  items-center'>
                                <GiRoundStar className='text-blue-400'/>
                                <p className='text-gray-800 text-[0.8rem] font-semibold'>{stargazers_count}</p>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>

    </div>
    )
}

export default PopularRepo