import React, { FC, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiGitRepoForked, BiCode } from 'react-icons/bi'
import { FiCode } from 'react-icons/fi'
interface Props {
    repoData: {
        repos: any
        popularRepos: any
        languageBasedRepo: {
            lang: string,
            count: number
          }[]
    }
}

const RepoContainer:FC<Props> = ({repoData}) => {
    const {popularRepos, repos, languageBasedRepo } = repoData
    const [currentRepos, setCurrentRepos] = useState(popularRepos)
    const filteredLBR = languageBasedRepo.filter( item => item.count > 0)
    const [currentNavState, setCurrentNavState] = useState("Popular")

    console.log(repos);
    console.log(languageBasedRepo);
    const filterRepos = (lang: string = "Popular")=> {
        if(lang == "Popular") {
            setCurrentRepos(popularRepos)
            setCurrentNavState("Popular")
        } else{
            setCurrentNavState(lang)
            const filter = repos.filter( (repo: { language: string }) => repo.language == lang)
            setCurrentRepos(filter)
        }
    }
    
    return (
        <div className="p-4 tablet:p-10">
            <div className="flex flex-wrap gap-x-2 gap-y-4 py-4">
                <div onClick={()=> filterRepos()} className={"flex items-center gap-2 pr-4 border-2 rounded-lg py-1 px-2 bg-opacity-90 cursor-pointer "+ (currentNavState == "Popular" ? "bg-primary" : " ")}>
                    <div className={"w-3 h-3 rounded-full bg-white "+ (currentNavState == "Popular" ? "bg-white" : " bg-gray-400 ")}></div>
                    <p className={"font-semibold text-sm  "+ (currentNavState == "Popular" ? "text-white" : " text-gray-500 ")}>Popular</p>
                </div>
                {
                    filteredLBR.map( repo => (
                        <div key={repo.lang} onClick={()=> filterRepos(repo.lang)} className={"flex items-center gap-2 pr-4 border-2 rounded-lg py-1 px-2 bg-opacity-90 cursor-pointer "+ (currentNavState == repo.lang ? "bg-primary" : " ")}>
                            <div className={"w-3 h-3 rounded-full "+ (currentNavState == repo.lang ? "bg-white" : " bg-gray-400 ") }></div>
                            <p className={"font-semibold text-sm  "+ (currentNavState == repo.lang ? "text-white" : " text-gray-500 ")}>{repo.lang}</p>
                        </div>
                    ))
                }
            </div>
            <div className="p-6 bg-bgWhite max-h-[40vh] overflow-y-scroll rounded-xl">
                <div className="grid  grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 grid-flow-row gap-4">
                    {/* Repo card */}

                    {
                        currentRepos.map( (repo: any, id: React.Key | null | undefined ) => (
                            <div key={id} className="border-gray-100 bg-white rounded-md p-3 border-[1px]">
                                <div>
                                    <h1 className="uppercase text-md font-semibold text-secondary">{repo.name}</h1>

                                    <div className="flex flex-wrap mt-2 mb-4 items-center gap-x-4">
                                        {
                                            repo.topics.length > 0 &&
                                            repo.topics.map( (topic: string | null | undefined) => (
                                                <div key={topic} className="flex gap-2 items-center">
                                                    <div className="w-[5px] h-[5px] bg-primary rounded-full"></div>
                                                    <p className="text-xs text-gray-500">{topic}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    
                                    {
                                        repo.description
                                        ? <p className="text-md text-gray-500">{repo.description}</p>
                                        : <p className="text-md text-gray-300">No description is available</p>
                                    }

                                    <div className="flex my-3 items-center flex-wrap gap-x-4">
                                        <div className="flex items-center justify-center text-sm gap-1 text-primary">
                                            <BiCode/>
                                            <p className="text-xs text-gray-500">{repo.language}</p>
                                        </div>
                                        <div className="flex items-center justify-center text-sm gap-1 text-primary">
                                            <BiGitRepoForked/>
                                            <p className="text-xs text-gray-500">{repo.forks_count}</p>
                                        </div>
                                        <div className="flex items-center justify-center text-sm gap-1 text-primary">
                                            <AiFillStar/>
                                            <p className="text-xs text-gray-500">{repo.stargazers_count}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RepoContainer