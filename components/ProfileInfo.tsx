import React, { FC } from 'react'

interface Props {
  profileData : {
      star:{
        hasStarred: boolean
      },
      profileData:{
          name: string
          login: string,
          avatar_url: string
          bio: string
          public_repos: string
          followers: number
          location: string
          followers_url: string
          starred_url: string
          html_url: string
          created_at: string
          updated_at: string
          email: string
          blog: string
          company: string
          orgs: {
            login: string
          }[]
          repos: string[]
          popularRepos: string[]
          languageBasedRepo: LRBProps[]
      }
  }
}

export interface LRBProps {
  lang: string,
  count: number
}

const ProfileInfo:FC <Props> = ({profileData}) => {
  const { name, avatar_url, bio, repos,location, languageBasedRepo, blog, followers, orgs, company, popularRepos, html_url } = profileData.profileData;
  const filteredLBR = languageBasedRepo.filter( item => item.count > 0)

  return (
    <div className='p-4 tablet:p-10'>
        {/* Profile Info cotainer */}
        <div className="bg-bgWhite py-5 px-5 tablet:px-5 rounded-xl">
          <div className="flex flex-col flex-wrap tablet:flex-row gap-6">
            {/* Left portion */}
            <div className="bg-white min-w-0 tablet:min-w-[400px] rounded-xl border-[1px] flex-1 p-5 border-gray-100">
              <div className="flex justify-end">
                <p className="font-bold text-sm text-primary" >PDF</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col tablet:flex-row justify-center gap-x-4 items-center">
                  <div className="justify-center  flex flex-1 items-center">
                    <div className='w-[150px] h-[150px] rounded-full p-2 bg-gradient-to-r from-primary to-secondary'>
                        <div className="bg-white w-full h-full rounded-full overflow-hidden ">
                          <img src={avatar_url} alt={name} />
                        </div>
                    </div>
                  </div>

                  <div className="border-l-gray-100 flex-1 flex-col py-4 justify-center  border-l-2 px-4 my-8 ">
                    <div className="flex flex-col items-start py-2">
                      <h1 className='text-secondary font-semibold text-3xl'>{name || ""}</h1>
                      {
                        company  && 
                        <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <p>{company || ""}</p>
                        </div>
                      }
                      {
                        location  && 
                        <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <p>{location || ""}</p>
                        </div>
                      }
                      {
                        blog  && 
                        <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <p>{blog || ""}</p>
                        </div>
                      }
                      {
                        orgs.length > 0  &&
                        <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <p>{orgs.map(org => (`${org.login} `))}</p>
                        </div>
                      }
                      {
                        followers  && 
                        <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <p>{followers || 0}</p>
                        </div>
                      }
                    </div>
                    
                    {
                      bio  && 
                      <div className="text-gray-400 font-medium text-sm">
                        <p>{bio || ""}</p>
                      </div>
                    }
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>

            {/* Right portion */}
            <div className="bg-white min-w-0 tablet:min-w-[400px] flex flex-col tablet:flex-row justify-center gap-x-4 gap-y-5 items-center rounded-xl border-[1px] flex-1 p-5 border-gray-100">
                <div className="flex flex-1 justify-center">
                  <div className="bg-cyan-500 w-[160px] h-[160px] p-2 rounded-full ">
                      <div className="bg-white w-full h-full rounded-full "></div>
                  </div>
                </div>

                <div className="border-l-2 flex-1  border-l-gray-200 py-4 px-4 ">
                  <div>
                    <p className="text-gray-500 font-semibold mb-1  ">Total public repo</p>
                    <div className="w-full p-1 text-center max-w-[200px] bg-cyan-400 rounded-lg bg-opacity-30 ">
                      <p className="text-cyan-600 font-semibold text-lg " >{repos.length || 0}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start py-2">
                    {
                      filteredLBR.map( ({ lang, count }) => (
                        <div key={lang} className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <p>{`${lang} (${count})`}</p>
                        </div>

                      ))
                    }
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProfileInfo