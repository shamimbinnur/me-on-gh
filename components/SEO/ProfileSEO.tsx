import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
    homePageStaticData :{
        seo: {
            title: string,
            url: string,
        },
    }
    bio: string,
    name: string,
}

const ProfileSEO:FC <Props> = ({homePageStaticData, bio, name}) => {
  return (
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
  )
}

export default ProfileSEO