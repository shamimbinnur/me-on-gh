import { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { homePageStaticData } from '../../page-content/home-page/homePageStaticData'
import { getProfile } from '../../github/GitHubApi'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'




const App: NextPage= () => {
  const {query, isReady} = useRouter()
  const [username, setUsername] = useState("")
  const { isLoading, error, data } = useQuery(['profileData', username] , ()=> getProfile(username),{
    staleTime: Infinity
  });
  

  
  

  useEffect(() => {
    if (!isReady) return
    setUsername(query.username as string)
    
    
  }, [isReady])
  

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

      {
        JSON.stringify(data)
      }
    </div>
  )
}

export default App
