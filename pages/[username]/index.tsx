import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { homePageStaticData } from '../../page-content/home-page/homePageStaticData'



const App: NextPage= () => {
  return (
    <div>
      <Head>
        <title>{homePageStaticData.seo.title}</title>
        <meta name="description" content={homePageStaticData.seo.metaDesc} />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={homePageStaticData.seo.url} />
        <meta property="og:title" content={homePageStaticData.seo.title} />
        <meta property="og:description" content={homePageStaticData.seo.metaDesc} />
        <meta property="og:image" content={homePageStaticData.seo.image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={homePageStaticData.seo.url} />
        <meta property="twitter:title" content={homePageStaticData.seo.title} />
        <meta property="twitter:description" content={homePageStaticData.seo.metaDesc} />
        <meta property="twitter:image" content={homePageStaticData.seo.image} />
      </Head>

    </div>
  )
}

export default App
