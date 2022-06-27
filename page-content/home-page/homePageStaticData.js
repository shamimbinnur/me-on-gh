const homePageStaticData = {
    seo:{
        title: "Me on Gh",
        metaDesc: "Generate your github profile in one click!",
        url: "localhost",
        image: ""
    },
    headerNav: [
        {   
            placeholder: "About",
            link: "#"
        },
        {
            placeholder: "Doc",
            link: "#"
        },
        {
            placeholder: "Privacy and Policy",
            link: "#"
        },            
    ]
    ,
    hero:{
        title:{
            firstPart: "Share your GitHub profile",
            secondPart: "as resume!"
        },
        subTitle:{
            firstPart: "Working in a company does not reveal a candidate's history or ability to write high-quality code. However, the developer's GitHub profile can serve as a barometer of his or her good or bad habits.",
        },
        CTA: {
            Generate: {
                placeholder: "Generate now",
                link: "#"
            },
            Contribution: {
                placeholder: "Contribute",
                link: "#"
            }
        },
        image: {
            altText: "Hero Image of MOG",
            image: "#"
        }          
    },
    feaure: [
        {
            title: "title",
            subTitle: "Sub title",
            previewImage: "../../public/svg.pdfIcon.svg"

        },
        {
            title: "title2",
            subTitle: "Sub title2",
            previewImage: "../../public/svg.linkIcon.svg"

        },
        {
            title: "title3",
            subTitle: "Sub title3",
            previewImage: "../../public/svg.osIcon.svg"

        },
    ]
    ,

}

export { homePageStaticData }