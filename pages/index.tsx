import type { NextPage } from 'next'
import Head from 'next/head'
import { homePageSaticData } from '../page-content/home-page/homePageSaticData'

interface HomePageProps{
  homePageStaticData:{
    seo: {
      title: string,
      metaDesc: string,
      url: string,
      image: string,
    }

  }
}

const Home: NextPage<HomePageProps> = ({ homePageStaticData: { seo } }) => {
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

      <h1 className=' text-center text-4xl ' >Me On Gh is comming soon!</h1>


    </div>
  )
}

export default Home

export async function getStaticProps() {

  return {
    props: {
      homePageStaticData : homePageSaticData
    },
  }
}