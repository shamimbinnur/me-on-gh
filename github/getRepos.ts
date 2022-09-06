import axios from "axios";

const getRepos = async (username: string) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
    const unsortedRepos = data;

    data.sort(function(a: { forks: any; stargazers_count: any; }, b: { forks: any; stargazers_count: any; }){return (b.forks + b.stargazers_count) - (a.forks + a.stargazers_count)});
    
    const sortedRepos = data.map( (repo: { stargazers_count: any; forks: any; }) => ({...repo, ...{ score: (repo.stargazers_count+ repo.forks) }}))

    const repoData = { unsortedRepos, sortedRepos}
    
    return repoData;
}

export default getRepos;