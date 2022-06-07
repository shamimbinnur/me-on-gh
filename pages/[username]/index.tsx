import { NextPage } from 'next'
import { Head } from 'next/document'
import React from 'react'
import { homePageSaticData } from '../../page-content/home-page/homePageSaticData'


interface AppProps{
    homePageStaticData:{
      seo: {
        title: string,
        metaDesc: string,
        url: string,
        image: string,
      }
  
    }
  }

const App: NextPage<AppProps> = ({ homePageStaticData: { seo } }) => {
  return (
    <div>
        <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDesc} />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.metaDesc} />
        <meta property="og:image" content={seo.image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seo.url} />
        <meta property="twitter:title" content={seo.title} />
        <meta property="twitter:description" content={seo.metaDesc} />
        <meta property="twitter:image" content={seo.image} />
      </Head>
    </div>
  )
}

export default App


export async function getStaticProps() {
    return {
      props: {
        homePageStaticData : homePageSaticData
      },
    }
}