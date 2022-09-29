/* eslint-disable */
import React, { FC } from 'react'
import MOGlogo from "../public/svg/MOG-logo.png"
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { flushSync } from 'react-dom';
import { GiFlexibleLamp } from 'react-icons/gi';

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
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  leftSide:{
    backgroundColor: "#AEBDCA",
    paddingTop: 28,
    paddingBottom: 15,
    paddingHorizontal: 20,
    width: "40%",
    height: "100vh", 
  },
  rightSide:{
    width: "100%",
    paddingTop: 25,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  text26Bold:{
    fontSize: "26px",
    font: "700",
    marginTop: 0,
    marginBottom: 5 
  },
  text22SemiBold:{
    fontSize: "22px",
    font: "600",
    marginBottom: 5 
  },
  text16SemiBold:{
    fontSize: "16px",
    font: "600",
    marginBottom: 5 
  },
  text16:{
    fontSize: "16px",
    font: "400",
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
  console.log(profileData)

  return (
    <Document>
    <Page style={styles.body}>
		{/* Container */}
      <View style={styles.container}>
		
        {/* Left Side */}
        <View style={styles.leftSide}>
          <Text style={styles.text22SemiBold}>Contact</Text>
          <Text style={styles.text16SemiBold}>{email || ""}</Text>
          <Text style={styles.text16SemiBold}>{location || ""}</Text>
          
          <View style={{marginTop: "40px"}}>
            <Text style={styles.text16SemiBold}>Public repo: {repos.length} </Text>

            {
              languageBasedRepo &&
              languageBasedRepo.map( (repo: { lang: any; count: any; }) => (
                <Text style={styles.text16SemiBold}>{`${repo.lang} : ${repo.count}`} </Text>
              ))
            }

            <Text style={styles.text16SemiBold}>Python: 43 </Text>
            <Text style={styles.text16SemiBold}>TypeScript: 34 </Text>
          </View>
        </View>
        
    	{/* Right Side */}
        <View style={styles.rightSide}>
          <Text style={styles.text26Bold}>{name || ""}</Text>
          <Text style={styles.text16}>
            {bio || ""}
          </Text>
          
          <View style={{marginTop: "10px"}}>
            <Text style={styles.text16SemiBold}>On GitHub: Since {created_at || ""}</Text>
          	<Text style={styles.text16SemiBold}>Followers: {followers} </Text>
          </View>
          
          <View style={{marginTop: "10px", marginBottom: "20px"}}>
            {
              company &&
              <Text style={styles.text16SemiBold}>Company: {company || ""} </Text>
            }
            {
              orgs && 
          	  <Text style={styles.text16SemiBold} > Organizations:
               {
                orgs.map( og => (
                  (og.login+ ",  ")
                ))
               } 
               </Text>
            }
          </View>
          
          <Text style={styles.text22SemiBold}>Popular Repository</Text>
          
          {/* Repos */}

          {
            popularRepos &&
            popularRepos.map( ({name,forks_count, topics, stargazers_count, language, html_url, description, score}, index) => (
              <View style={{marginTop: "10px", marginBottom: "10px"}}>
                <Text style={styles.text16SemiBold}>Name: {name || ""} </Text>
                
                <View style={{display: "flex", flexDirection: "row", marginTop: "5px", marginBottom: "2px"}}>
                  <Text style={styles.text16}>{description || ""}</Text>
                </View>
                
                <Text style={styles.text16}>{html_url}</Text>
                
                <View style={{display: "flex", flexDirection: "row", marginTop: "5px"}}>
                  <Text style={styles.text16}>Stars: {stargazers_count || 0} </Text>
                  <Text style={styles.text16}>Forks: {forks_count || 0}</Text>
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