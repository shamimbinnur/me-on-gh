/* eslint-disable */
import React, { FC } from 'react'
import MOGlogo from "../public/svg/MOG-logo.png"
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { flushSync } from 'react-dom';
import { GiFlexibleLamp } from 'react-icons/gi';
import { BiBorderRadius } from 'react-icons/bi';
import moment from 'moment'

// Create styles
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    color: "#06283D"
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  leftSide:{
    backgroundColor: "#D8D8D8",
    paddingTop: 28,
    paddingBottom: 15,
    paddingHorizontal: 30,
    width: "40%",
    height: "100vh", 
  },
  rightSide:{
    width: "80%",
    paddingTop: 25,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  repoCard :{
    border: "0.5px solid gray",
    padding: "6px",
    borderRadius: "4px"
  },
  text26Bold:{
    fontSize: "26px",
    font: "700",
    marginTop: 0,
    marginBottom: 5 
  },
  text20Bold:{
    fontSize: "20px",
    font: "700",
    marginTop: 0,
    marginBottom: 5 
  },
  text22SemiBold:{
    fontSize: "22px",
    font: "600",
    marginBottom: 5 
  },
  text18SemiBold:{
    fontSize: "18px",
    font: "600",
    marginBottom: 5 
  },
  text16SemiBold:{
    fontSize: "16px",
    font: "600",
    marginBottom: 5 
  },
  text14SemiBold:{
    fontSize: "14px",
    font: "600",
    marginBottom: 5 
  },
  text16:{
    fontSize: "16px",
    font: "400",
    marginBottom: 5 
  },
  text12:{
    fontSize: "12px",
    font: "400",
    marginBottom: 5 
  },
  text12Bold:{
    fontSize: "12px",
    font: "800",
    marginBottom: 5 
  }
  
});

interface Props {
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
    orgs: {
      login: string
    }[]
    repos: string[]
    popularRepos: []
    languageBasedRepo: any
  }
}

// interface PopularRepos {
//   full_name: string,
//   forks_count: number,
//   language: string,
//   stargazers_count: number,
//   description: string,
//   html_url: string,
//   score: number,
//   topics: string[],
//   name: string,

// }[]

const ProfilePdf:FC <Props> = ({profileData}) => {
  const { name, avatar_url, email, bio, repos,location, languageBasedRepo, blog, followers, orgs, company, created_at, popularRepos, html_url } = profileData
  const filteredLang = languageBasedRepo.filter( (item: { count: number; }) => item.count > 0)
  console.log(profileData)

  return (
    <Document>
    <Page size="A4" style={styles.body}>
		{/* Container */}
      <View style={styles.container}>
		
        {/* Left Side */}
        <View style={styles.leftSide}>
          <Text style={styles.text18SemiBold}>Contact</Text>
          <Text style={styles.text14SemiBold}>{email || ""}</Text>
          <Text style={styles.text14SemiBold}>{location || ""}</Text>
          
          <View style={{marginTop: "30px"}}>
            <Text style={styles.text14SemiBold}>Public repo: {repos.length} in total</Text>

            <View style={{display: "flex", flexDirection: "row", border: "0.5px solid gray", paddingHorizontal: "2px"}} >
              {/* Heading data */}
              <View style={{width: "100%"}}>
                <Text style={styles.text12Bold}>Lang</Text>
              </View>
              
              <View style={{width: "100%"}}>
                <Text style={styles.text12Bold} >Repo</Text>
              </View>
            </View>
              {/* Data */}
            {
              filteredLang &&
              filteredLang.map( (repo: { lang: any; count: any; }) => (
                <View style={{display: "flex", flexDirection: "row", borderBottom: "0.5px solid gray",  paddingHorizontal: "2px"}} >
                  {/* Data */}
                  <View style={{width: "100%"}}>
                    <Text style={styles.text12}>{repo.lang}</Text>
                  </View>
                  
                  <View style={{width: "100%"}}>
                    <Text style={styles.text12} >{repo.count}</Text>
                  </View>
                </View>
                // <Text style={styles.text12}>{`${repo.lang} : ${repo.count}`} </Text>
              ))
            }

          </View>
        </View>
        
    	{/* Right Side */}
        <View style={styles.rightSide}>
          <Text style={styles.text20Bold}>{name || ""}</Text>
          <Text style={styles.text12}>
            {bio || ""}
          </Text>
          
          <View style={{marginTop: "8px"}}>
            <Text style={styles.text12}>On GitHub: Since {moment(created_at).format("Do MMM YY") || ""}</Text>
          	<Text style={styles.text12}>Followers: {followers} </Text>
          </View>
          
          <View style={{marginTop: "8px", marginBottom: "15px"}}>
            {
              company &&
              <Text style={styles.text14SemiBold}>Company: {company || ""} </Text>
            }
            {
              orgs.length > 0  ?( 
          	  <Text style={styles.text14SemiBold} > Organizations:
               {
                orgs.map( og => (
                  (og.login+ ",  ")
                ))
               } 
               </Text>
              ): ""
            }
          </View>
          
          <Text style={styles.text18SemiBold}>Popular Repository</Text>
          
          {/* Repos */}

          {
            popularRepos &&
            popularRepos.map( ({name,forks_count, topics, stargazers_count, language, html_url, description, score}, index) => (
              <View style={{marginTop: "5px", marginBottom: "5px"}}>
                <View style={styles.repoCard}>
                  <Text style={styles.text14SemiBold}>Name: {name || ""} </Text>
                  
                  <View style={{display: "flex", flexDirection: "row", marginTop: "5px", marginBottom: "2px"}}>
                    <Text style={styles.text12}>{description || ""}</Text>
                  </View>
                  
                  <Text style={styles.text12}>{html_url}</Text>
                  
                  <View style={{display: "flex", flexDirection: "row", marginTop: "5px"}}>
                    <Text style={styles.text12}>Stars: {stargazers_count || 0} </Text>
                    <Text style={styles.text12}>Forks: {forks_count || 0}</Text>
                  </View>
                </View>
              </View>
            ))
          }          
        </View>
      </View>
    </Page>
  </Document>
  )
}

export default ProfilePdf