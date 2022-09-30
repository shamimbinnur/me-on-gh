const homePageStaticData = {
    seo:{
        title: "Me on GitHub | MOG",
        metaDesc: " Me on GH(MOG) allows you to Share and Export your GitHub profile like a resume!",
        url: "localhost",
        image: "/mog-meta.png"
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
            firstPart: "Share and Export your GitHub profile",
            secondPart: "like a resume!"
        },
        subTitle:{
            firstPart: "Working in a company does not reveal a candidate's history or ability to write high-quality code. However, the developer's GitHub profile can serve as a barometer of his or her good or bad habits.",
        },
        CTA: {
            Generate: {
                placeholder: "Generate & Export",
                link: "#"
            },
            Contribution: {
                placeholder: "Make MOG better",
                link: "#"
            }
        },
        image: {
            altText: "Hero Image of MOGH",
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
            subTitle: "Your profile link is ready already, just copy and share wherever you want!",
            previewImage: "/svg/linkIcon.svg"

        },
        {
            title: "Open Source",
            subTitle: "Me on GitHub (MOG) is open source, you can inspect the source code and help make it better by contributing!",
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