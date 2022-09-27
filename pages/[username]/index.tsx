import { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { homePageStaticData } from '../../page-content/home-page/homePageStaticData'
import { getProfile } from '../../github/gitHubApi'
import Image from 'next/image'
import { profileData } from "../../page-content/dummyContent/profile.js"
import dpArtwork from "../../public/svg/dpArtwork.svg"
import { HiOutlineOfficeBuilding, HiLocationMarker } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi';
import { GiFamilyHouse } from 'react-icons/gi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GoArrowSmallDown } from 'react-icons/go';
import HeaderForProfile from '../../components/HeaderForProfile'
import PopularRepo from '../../components/PopularRepo'
import AllRepos from '../../components/AllRepos'
import Link from 'next/link'
import LBR from '../../components/LBR'
import { redirect } from 'next/dist/server/api-utils'
import StarCheck from '../../components/StarCheck'



interface ProfileProps {
  profileData : {
      star:{
        hasStarred: boolean
      },
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
          orgs: {
            login: string
          }[]
          repos: string[]
          popularRepos: string[]
          languageBasedRepo: any
      }
  }
}

interface Props {
  languageBasedRepo: {
      Java: Number,
      javaScript: Number,
      TypeScript: Number,
      Css: Number,
      Go : Number,
      Kotlin : Number,
      PHP: Number,
      cSharp : Number,
      Swift : Number,
      R : Number,
      Ruby : Number,
      CandCPP: Number,
      Matlab: Number,
      Scala: Number,
  }
}

const App: NextPage<ProfileProps>= ({profileData}) => {
  const { name, avatar_url, bio, repos,location, languageBasedRepo, blog, followers, orgs, company, popularRepos, html_url } = profileData.profileData;
  console.log(profileData.star.hasStarred);

  // if(!profileData.star.hasStarred){
  //   return <StarCheck/>
  // }

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

      <div className="mobile:py-[20px] tablet:min-h-screen mobile:px-[20px] tablet:px-[30px] lapto:px-[10px] mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          <div className="relative flex-1 flex justify-center p-10 items-center">
            <div className='absolute'>
              <Image src={dpArtwork} alt={name} width={400} height={400} />      
            </div>
            <div className='rounded-full overflow-hidden p-1 bg-gradient-to-r from-gray-200 to-gray-100 items-center flex'>
              <Image className='rounded-full' src={avatar_url} alt={name} width={256} height={256} />      

            </div>
          </div>
          <div className="flex-1">
            <Link href={html_url as string}>
              <h1 className="text-gray-700 cursor-pointer transition ease-in-out duration-500 hover:text-primaryOne font-bold text-[2.5rem]">{name}</h1>
            </Link>
            <p className="text-gray-700 font-semibold text-[1rem] my-[10px] max-w-[300px]">{bio}</p>
            <div>
              {
                company &&
                <div className='flex items-center gap-2 group'>
                  <div className='bg-primaryTwo p-[4px] group-hover:bg-opacity-20 group-hover:bg-primaryOne rounded-full bg-opacity-20 flex items-center justify-center'>
                    <HiOutlineOfficeBuilding className='text-primaryTwo group-hover:text-primaryOne transition ease-in-out duration-300 text-[1rem]' />
                  </div>
                  <p className="text-gray-600 font-semibold text-[1.1rem]">{company}</p>
                </div>
              }
              {
                location &&
                <div className='flex items-center group gap-2'>
                  <div className='bg-primaryTwo p-[4px] group-hover:bg-opacity-20 group-hover:bg-primaryOne transition ease-in-out duration-500 rounded-full bg-opacity-20 flex items-center justify-center'>
                    <HiLocationMarker className='text-primaryTwo group-hover:text-primaryOne transition ease-in-out duration-300 text-[1rem]' />
                  </div>
                  <p className="text-gray-600 font-semibold text-[1.1rem]">{location}</p>
                </div>
              }
              {
                blog &&
                <div className='flex items-center gap-2 group'>
                  <div className='bg-primaryTwo p-[4px] group-hover:bg-opacity-20 rounded-full bg-opacity-20 group-hover:bg-primaryOne transition ease-in-out duration-500 flex items-center justify-center'>
                    <BiWorld className='text-primaryTwo group-hover:text-primaryOne transition ease-in-out duration-300 text-[1rem]' />
                  </div>
                  <Link rel="noreferrer" target="_blank" href={"https://"+blog} >
                    <p className="text-gray-600 font-semibold cursor-pointer text-[1.1rem]">{blog}</p>
                  </Link>
                </div>
              }

              {
                orgs.length > 0 ? (
                <div className='flex items-center group gap-2'>
                  <div className='bg-primaryTwo p-[4px] group-hover:bg-opacity-20 rounded-full bg-opacity-20 group-hover:bg-primaryOne transition ease-in-out duration-500 flex items-center justify-center'>
                    <GiFamilyHouse className='text-primaryTwo group-hover:text-primaryOne transition ease-in-out duration-300 text-[1rem]' />
                  </div>
                  <div className='flex items-center gap-2'>
                    {
                      orgs.map(og => (
                        <div key={og.login}>
                          <p className="text-gray-600 font-semibold text-[1.1rem]">{og.login}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
                ): ""
              }
              {
                followers &&
                <div className='flex items-center group gap-2'>
                  <div className='bg-primaryTwo p-[4px] group-hover:bg-opacity-20 rounded-full bg-opacity-20 group-hover:bg-primaryOne transition ease-in-out duration-500  flex items-center justify-center'>
                    <BsFillPeopleFill className='text-primaryTwo group-hover:text-primaryOne transition ease-in-out duration-300 text-[1rem]' />
                  </div>
                  <p className="text-gray-600 font-semibold text-[1.1rem]">{followers} followers</p>
                </div>
              }
            </div>
          </div>

          <div className='flex justify-self-center my-20'>
            <GoArrowSmallDown className='text-[2.5rem] text-gray-300 opacity-60'/>
          </div>
        </div>
      </div>
      <LBR languageBasedRepo={languageBasedRepo} />  
      <PopularRepo popularRepos={popularRepos as unknown as [] || []}/>
      <AllRepos allRepos={repos as unknown as [] || []}/>
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
