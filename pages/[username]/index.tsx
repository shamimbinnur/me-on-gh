import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { homePageStaticData } from '../../page-content/home-page/homePageStaticData'
import { getProfile } from '../../github/gitHubApi'
import Image from 'next/image'
import { profileData } from "../../page-content/dummyContent/profile.js"
import dpArtwork from "../../public/svg/dpArtwork.svg"
import { HiOutlineOfficeBuilding, HiLocationMarker } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi';
import { GiFamilyHouse } from 'react-icons/gi';
import { BsFillPeopleFill } from 'react-icons/bs';
import HeaderForProfile from '../../components/HeaderForProfile'
import PopularRepo from '../../components/PopularRepo'

interface ProfileProps {
  profileData : {
      hasStarred: boolean,
      profileData:{
          name: string
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
          orgs: string
          repos: string[]
          popularRepos: string[]
      }
  }
}


const App: NextPage<ProfileProps>= ({profileData}) => {
  const { name, avatar_url, bio, email,location, blog, followers, orgs, company, popularRepos } = profileData.profileData;
  console.log(profileData);
  
  return (
    <div>
      <Head>
        <title>{homePageStaticData.seo.title}</title>
        <meta name="description" content={bio} />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={homePageStaticData.seo.url} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={bio} />
        <meta property="og:image" content={avatar_url} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={homePageStaticData.seo.url} />
        <meta property="twitter:title" content={name} />
        <meta property="twitter:description" content={bio} />
        <meta property="twitter:image" content={avatar_url} />
      </Head>

      <HeaderForProfile/>

      <div className="mobile:py-[20px] mobile:px-[20px] tablet:px-[30px] lapto:px-[10px] mx-auto max-w-6xl">
        <div className="flex">
          <div className="relative flex-1 flex justify-center p-10 items-center">
            <div className='absolute'>
              <Image src={dpArtwork} alt={name} width={400} height={400} />      
            </div>
            <div className='rounded-full overflow-hidden p-1 bg-gradient-to-r from-gray-200 to-gray-100 items-center flex'>
              <Image className='rounded-full' src={avatar_url} alt={name} width={256} height={256} />      

            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-gray-700 font-bold text-[2.5rem]">{name}</h1>
            <p className="text-gray-700 font-semibold text-[1rem] my-[10px] max-w-[300px]">{bio}</p>
            <div>
              {
                company &&
                <div className='flex items-center gap-2'>
                  <div className='bg-primaryTwo p-[4px] rounded-full bg-opacity-20 flex items-center justify-center'>
                    <HiOutlineOfficeBuilding className='text-primaryTwo text-[1rem]' />
                  </div>
                  <p className="text-gray-600 font-semibold text-[1.1rem]">{"Meta inc"}</p>
                </div>
              }
              {
                location &&
                <div className='flex items-center gap-2'>
                  <div className='bg-primaryTwo p-[4px] rounded-full bg-opacity-20 flex items-center justify-center'>
                    <HiLocationMarker className='text-primaryTwo text-[1rem]' />
                  </div>
                  <p className="text-gray-600 font-semibold text-[1.1rem]">{location}</p>
                </div>
              }
              {
                blog &&
                <div className='flex items-center gap-2'>
                  <div className='bg-primaryTwo p-[4px] rounded-full bg-opacity-20 flex items-center justify-center'>
                    <BiWorld className='text-primaryTwo text-[1rem]' />
                  </div>
                  <p className="text-gray-600 font-semibold text-[1.1rem]">{blog}</p>
                </div>
              }

              {
                orgs &&
                <div className='flex items-center gap-2'>
                  <div className='bg-primaryTwo p-[4px] rounded-full bg-opacity-20 flex items-center justify-center'>
                    <GiFamilyHouse className='text-primaryTwo text-[1rem]' />
                  </div>
                  <p className="text-gray-600 font-semibold text-[1.1rem]">{"OpenSauced"}</p>
                </div>
              }
              {
                followers &&
                <div className='flex items-center gap-2'>
                  <div className='bg-primaryTwo p-[4px] rounded-full bg-opacity-20 flex items-center justify-center'>
                    <BsFillPeopleFill className='text-primaryTwo text-[1rem]' />
                  </div>
                  <p className="text-gray-600 font-semibold text-[1.1rem]">{followers} followers</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      
      <PopularRepo popularRepos={popularRepos as unknown as [] || []}/>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  // const profileData = await getProfile(context.params.username)

  return {
    props: {
      profileData
    },
  }
}

export default App
