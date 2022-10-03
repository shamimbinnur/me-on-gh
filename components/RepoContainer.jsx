import React from 'react'

const RepoContainer = () => {
    const repos = [1,2,3,4,5,6]
  return (
    <div className="p-4 tablet:p-10">
        <div className="flex gap-x-4 py-4">
            <div className="flex items-center gap-2 pr-4 border-r-2">
                <div className="w-3 h-3 rounded-full bg-gray-400 "></div>
                <p className="font-semibold text-lg text-gray-500">Popular</p>
            </div>

            <div className="flex items-center gap-2 pr-4 border-r-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <p className="font-semibold text-lg text-primary ">JavaScript</p>
            </div>

            <div className="flex items-center gap-2 pr-4 border-r-2">
                <div className="w-3 h-3 rounded-full bg-gray-400 "></div>
                <p className="font-semibold text-lg text-gray-500">TypeScript</p>
            </div>
        </div>
        <div className="p-8 bg-bgWhite rounded-xl">
            <div className="grid  grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 grid-flow-row gap-4">
                {/* Repo card */}

                {
                    repos.map( (repo, id ) => (
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