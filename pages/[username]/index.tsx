import { NextPage } from 'next'
import { Head } from 'next/document'
import React from 'react'
import { homePageSaticData } from '../../page-content/home-page/homePageSaticData'



const App: NextPage= () => {
  return (
    <div>
        <Head>
        <title>{homePageSaticData.seo.title}</title>
        <meta name="description" content={homePageSaticData.seo.metaDesc} />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={homePageSaticData.seo.url} />
        <meta property="og:title" content={homePageSaticData.seo.title} />
        <meta property="og:description" content={homePageSaticData.seo.metaDesc} />
        <meta property="og:image" content={homePageSaticData.seo.image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={homePageSaticData.seo.url} />
        <meta property="twitter:title" content={homePageSaticData.seo.title} />
        <meta property="twitter:description" content={homePageSaticData.seo.metaDesc} />
        <meta property="twitter:image" content={homePageSaticData.seo.image} />
      </Head>
    </div>
  )
}

export default App
