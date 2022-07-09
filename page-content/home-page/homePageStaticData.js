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
    feature: [
        {
            title: "One Click PDF Genarating",
            subTitle: "Turning the github profile into a pdf file is super easy at MOG! Just one click away!",
            previewImage: "/svg/pdfIcon.svg"

        },
        {
            title: "Shareable Profile link",
            subTitle: "Your profile link is already pre-generated, just copy and share whatever you want!",
            previewImage: "/svg/linkIcon.svg"

        },
        {
            title: "Open Saurce",
            subTitle: "Me on GitHub (MOG) is open saurce, you can inspect the source code and contribute on it to make it better!",
            previewImage: "/svg/osIcon.svg"

        }
    ],
    footer: [
        {   
            placeholder: "Blog",
            link: "#"
        },
        {
            placeholder: "About us",
            link: "#"
        },
        {
            placeholder: "Contact us",
            link: "#"
        },    
        {
            placeholder: "Privacy & Policy",
            link: "#"
        },    
        {
            placeholder: "Terms and Conditions",
            link: "#"
        },    
    ]


}

export { homePageStaticData }