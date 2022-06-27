import type { NextPage } from 'next'
import Head from 'next/head'
import Feature from '../components/Feature'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { homePageStaticData } from '../page-content/home-page/homePageStaticData'

type navs= [
    {
      placeholder: string
      link: string
    }
]
type features= [
  {
    title: string,
    subTitle: string,
    previewImage: string    
  }      
]


const Home: NextPage = () => {

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

      <div className='py-[20px] px-[10px]'>
        <Header navs={homePageStaticData.headerNav as navs || []} />

        <Hero/>

        <Feature features={ homePageStaticData.feature as features || [] }/>
      </div>


    </div>
  )
}

export default Home
