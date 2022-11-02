import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { homePageStaticData } from '../page-content/home-page/homePageStaticData'
import CTA from '../components/CTA'
import ArrowDown from '../components/ArrowDown'
import HomeSEO from '../components/SEO/HomeSEO'
import Background_Home from '../components/Background_Home'

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
    <>
      <HomeSEO homePageStaticData={homePageStaticData}/>

      <Background_Home>
        <div className='mobile:px-[5px] tablet:px-[30px] mx-auto max-w-7xl lapto:px-[10px] min-h-screen'>
          <Header navs={homePageStaticData.headerNav as navs || []} />
          <Hero heroData={homePageStaticData.hero as unknown as hero || {}} />
          <ArrowDown/>
          <CTA/>
        </div>
      </Background_Home>
    </>
  )
}

export default Home
