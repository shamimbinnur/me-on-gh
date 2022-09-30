import axios from "axios";
import { count } from "console";
import { type } from "os";

const getRepos = async (username: string) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
    const unsortedRepos = data;
    
    const languageBasedRepo = getLanguaseBasedRepo(data);

    data.sort(function(a: { forks: any; stargazers_count: any; }, b: { forks: any; stargazers_count: any; }){return (b.forks + b.stargazers_count) - (a.forks + a.stargazers_count)});
    
    const sortedRepos = data.map( (repo: { stargazers_count: any; forks: any; }) => ({...repo, ...{ score: (repo.stargazers_count+ repo.forks) }}))

    const repoData = { unsortedRepos, sortedRepos, languageBasedRepo}
    
    return repoData;
}


export default getRepos;

const getLanguaseBasedRepo = (repo: []) => {
    let java = 0;
    let python = 0;
    let javaScript = 0;
    let typeScript = 0;
    let css = 0;
    let html = 0;
    let go = 0;
    let kotlin = 0;
    let php = 0;
    let cSharp = 0;
    let swift = 0;
    let r = 0;
    let ruby = 0;
    let cAndCPP = 0;
    let matlab = 0;
    let scala = 0;

    repo.forEach((repo: { language: string; }) => {
        if (repo.language == null) return;
        else if (repo.language.toLowerCase() === "java") java += 1;
        else if (repo.language.toLowerCase() === "python") python += 1;
        else if (repo.language.toLowerCase() === "javascript") javaScript += 1;
        else if (repo.language.toLowerCase() === "typescript") typeScript += 1;
        else if (repo.language.toLowerCase() === "css") html += 1;
        else if (repo.language.toLowerCase() === "css") css += 1;
        else if (repo.language.toLowerCase() === "go") go += 1;
        else if (repo.language.toLowerCase() === "kotlin") kotlin += 1;
        else if (repo.language.toLowerCase() === "php") php += 1;
        else if (repo.language.toLowerCase() === "c#") cSharp += 1;
        else if (repo.language.toLowerCase() === "swift") swift += 1;
        else if (repo.language.toLowerCase() === "r") r += 1;
        else if (repo.language.toLowerCase() === "ruby") ruby += 1;
        else if (repo.language.toLowerCase() === "c") cAndCPP += 1;
        else if (repo.language.toLowerCase() === "matlab") matlab += 1;
        else if (repo.language.toLowerCase() === "scala") scala += 1;
    });

    const lbr = [
        {
            lang: "Java",
            count: java,
        },
        {
            lang: "Python",
            count: python,
        },
        {
            lang: "JavaScript",
            count: javaScript,
        },
        {
            lang: "TypeScript",
            count: typeScript,
        },
        {
            lang: "HTML",
            count: html,

        },
        {
            lang: "Css",
            count: css,

        },
        {
            lang: "Go",
            count: go,
        },
        {
            lang: "Kotlin",
            count: kotlin,
        },
        {
            lang: "PHP",
            count: php,
        },
        {
            lang: "cSharp",
            count: cSharp,
        },
        {
            lang: "Swift",
            count: swift,
        },
        {
            lang: "R",
            count: r,
        },
        {
            lang: "Ruby",
            count: ruby,
        },
        {
            lang: "C/CPP",
            count: cAndCPP,
        },
        {
            lang: "Matlab",
            count: matlab,

        },
        {
            lang: "Scala",
            count: scala,
        }
    ]
    return lbr;
}