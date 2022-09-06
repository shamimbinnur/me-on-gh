import { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { homePageStaticData } from '../../page-content/home-page/homePageStaticData'
import { getProfile } from '../../github/gitHubApi'
import { useRouter } from 'next/router'
import Image from 'next/image'

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
  const { name, avatar_url, bio } = profileData.profileData;
  
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

      <h1>{name}</h1>
      <Image src={avatar_url} alt={name} width={50} height={50} />

    </div>
  )
}

export async function getServerSideProps(context: any) {
  const profileData = await getProfile(context.params.username)

  return {
    props: {
      profileData
    },
  }
}

export default App
