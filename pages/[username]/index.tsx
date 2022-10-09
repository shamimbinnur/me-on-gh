import { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { homePageStaticData } from '../../page-content/home-page/homePageStaticData'
import { getProfile } from '../../github/gitHubApi'
import Image from 'next/image'
import { profileData } from "../../page-content/dummyContent/profile.js"
import dpArtwork from "../../public/svg/dpArtwork.svg"
import { HiOutlineOfficeBuilding, HiLocationMarker } from 'react-icons/hi';
import { VscFilePdf } from 'react-icons/vsc';
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
import Greetings from '../../components/Greetings'
import { getMaxUsedLanguage } from '../../utils'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import ProfilePdf from '../../components/ProfilePdf'
import ProfileInfo from '../../components/ProfileInfo'
import RepoContainer from '../../components/RepoContainer'



interface ProfileProps {
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
          repos: []
          popularRepos: []
          languageBasedRepo: any
      }
  }
}

// export interface Props {
//   languageBasedRepo: {
//       Java: Number,
//       javaScript: Number,
//       TypeScript: Number,
//       Css: Number,
//       Go : Number,
//       Kotlin : Number,
//       PHP: Number,
//       cSharp : Number,
//       Swift : Number,
//       R : Number,
//       Ruby : Number,
//       CandCPP: Number,
//       Matlab: Number,
//       Scala: Number,
//   }
// }

const App: NextPage<ProfileProps>= ({profileData}) => {
  const { name, avatar_url, bio, repos,location, languageBasedRepo, blog, followers, orgs, company, popularRepos, html_url } = profileData.profileData;
  const [neetToGreet, setNeetToGreet] = useState(true)


  // if(!profileData.star.hasStarred){
  //   return <StarCheck/>
  // }

  const MUL = getMaxUsedLanguage(languageBasedRepo)
  setTimeout(() => {
    setNeetToGreet(false)
  }, 4000)


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
        <meta property="og:image" content={homePageStaticData.seo.url} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={homePageStaticData.seo.url} />
        <meta property="twitter:title" content={name} />
        <meta property="twitter:description" content={bio} />
        <meta property="twitter:image" content={homePageStaticData.seo.url} />
      </Head>
      <HeaderForProfile/>
      <ProfileInfo profileData={profileData} />
      <RepoContainer repoData={{popularRepos, repos, languageBasedRepo}}/>
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
