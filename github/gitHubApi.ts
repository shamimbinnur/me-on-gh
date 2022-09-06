import axios from "axios";
import getOrganizations from "./getOrganizations";
import getRepos from "./getRepos";


const getProfile = async (username: string) => {
    if(username == undefined || username == "") return

    // const starringData = await axios.get(`https://api.github.com/repos/open-sauced/landing-page/stargazers`)
    // const hasStarred:boolean = starringData.data.some((user: { login: string; }) => user.login == username)
    // console.log("Starred ?", hasStarred)

    // if(!hasStarred){
    //     const profileData = {
    //         hasStarred: false,
    //         profileData:{}
    //     }
    //     return profileData
    // }
        
    const { data } = await axios.get(`https://api.github.com/users/${username}`)

    const orgs = await getOrganizations(username);
 
    const { unsortedRepos, sortedRepos,  } = await getRepos(username);
    
    const profileData = {
        hasStarred: true,
        profileData:{
            name: data.name,
            avatar_url: data.avatar_url,
            bio: data.bio,
            public_repos: data.public_repos,
            followers: data.followers,
            location: data.location,
            followers_url: data.followers_url,
            starred_url: data.starred_url,
            html_url: data.html_url,
            created_at: data.created_at,
            updated_at: data.updated_at,
            email: data.email,
            blog: data.blog,
            company: data.company,
            orgs: orgs,
            repos: unsortedRepos,
            popularRepos: sortedRepos.slice(0,4),
        }
    }

    return profileData;
}


export { getProfile }