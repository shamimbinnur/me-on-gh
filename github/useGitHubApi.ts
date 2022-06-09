import axios from "axios";


const getProfile = async (username: string) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}`)
    console.log("getProfile has been called")
    console.log(data)

    const profileData = {
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio,
        public_repos: data.public_repos,
        followers: data.followers,
        location: data.location,
        followers_url: data.followers_url,
        starred_url: data.starred_url,
        html_url: data.html_url

    }

    return profileData;
}

export { getProfile }