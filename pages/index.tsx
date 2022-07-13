import type { NextPage } from 'next'
import Head from 'next/head'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import BellowFooter from '../components/BellowFooter'
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
interface hero{
    title:{
      firstPart: string,
      secondPart: string
    },
    subTitle:{
      firstPart: ""
    },
    CTA:{
      Generate: {
        placeholder: string,
        link: string
    },
    Contribution: {
        placeholder: string,
        link: string
    }
    }
}
type footer= [
  {
    placeholder: string
    link: string
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

      <div className='mobile:py-[20px] mobile:px-[20px] tablet:px-[30px] lapto:px-[10px]'>
        <Header navs={homePageStaticData.headerNav as navs || []} />

        <Hero heroData={homePageStaticData.hero as unknown as hero || {}} />

        <Feature features={ homePageStaticData.feature as features || [] }/>

        <Footer footer={ homePageStaticData.footer as footer || [] } />
      </div>
      <BellowFooter/>


    </div>
  )
}

export default Home
