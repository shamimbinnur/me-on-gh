import React, { FC, useState } from 'react'

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
                            <p className={"font-semibold text-sm  "+ (currentNavState == repo.lang ? "text-white" : " text-gray-500 ")}>Popular</p>
                        </div>
                    ))
                }
            </div>
            <div className="p-8 bg-bgWhite rounded-xl">
                <div className="grid  grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 grid-flow-row gap-4">
                    {/* Repo card */}

                    {
                        currentRepos.map( (repo: any, id: React.Key | null | undefined ) => (
                            <div key={id} className="border-gray-100 bg-white rounded-md p-3 border-[1px]">
                                <div className="flex justify-end">
                                    <div className=" p-2 w-[30px] h-[30px] bg-primary bg-opacity-30 flex items-center justify-center rounded-full">
                                        <p className="text-md font-semibold text-primary" >12</p>
                                    </div>
                                </div>

                                <div>
                                    <h1>Avash CSS</h1>

                                    <div className="flex flex-wrap my-1 items-center gap-x-4">
                                        <div className="flex gap-2 items-center">
                                            <div className="w-[10px] h-[10px] bg-primary rounded-full"></div>
                                            <p className="text-xs text-gray-500">Website</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="w-[10px] h-[10px] bg-primary rounded-full"></div>
                                            <p className="text-xs text-gray-500">Website</p>
                                        </div>
                                    </div>

                                    <p className="text-md text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis non ducimus placeat expedita fugit quae eaque earum, magni consequuntur facilis illum at.</p>

                                    <div className="flex my-2 items-center flex-wrap gap-x-4">
                                        <div className="flex gap-2 items-center">
                                            <div className="w-[14px] h-[14px] bg-primary rounded-sm"></div>
                                            <p className="text-xs text-gray-500">Website</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="w-[14px] h-[14px] bg-primary rounded-sm"></div>
                                            <p className="text-xs text-gray-500">ReactJS</p>
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