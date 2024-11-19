// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Julius Bendt | Portfolio';
export const SITE_DESCRIPTION = 'Julius Bendt - Fullstack developer, DevOps enginner and dark mode entusiast';


export const techstacks = {

    "Backend technologies": [
        {
            name: ".NET",
            icon: "dotnet",
            fillColor: "#512BD4"
        },
        {
            name: "Node (TS)",
            icon: "tsnode",
            fillColor: "#3178C6"
        },
        {
            name: "Laravel",
            icon: "laravel",
            fillColor: "#FF2D20"
        },
        {
            name: "Php",
            icon: "php",
            fillColor: "#777BB4"
        },
        {
            name: "C#",
            icon: "csharp",
            fillColor: "#239120"
        },
    ],
    "Frontend technologies": [
        {
            name: "Vue",
            icon: "vuedotjs",
            fillColor: "#4FC08D"
        },
        {
            name: "Tailwind",
            icon: "tailwindcss",
            fillColor: "#06B6D4"
        },
        {
            name: "Vuetify",
            icon: "vuetify",
            fillColor: "#1867C0"
        },
        {
            name: "Astro",
            icon: "astro",
            fillColor: "#FF5D01"
        },
        {
            name: "Flutter",
            icon: "flutter",
            fillColor: "#02569B"
        },
        {
            name: "Dart",
            icon: "dart",
            fillColor: "#0175C2"
        },
    ],
    "Persistent technologies": [
        {
            name: "Redis",
            icon: "redis",
            fillColor: "#DC382D"
        },
        {
            name: "MySQL",
            icon: "mysql",
            fillColor: "#4479A1"
        },
        {
            name: "ElasticSearch",
            icon: "elasticsearch",
            fillColor: "#005571"
        },
    ],
    "Infrastructure as code (IaC)": [
        {
            name: "Terraform",
            icon: "terraform",
            fillColor: "#844FBA"
        }
    ],
    "Game development": [
        {
            name: "Unity",
            icon: "unity",
            fillColor: "#FFFFFF"
        }
    ]
}

export const portfolio = [
    {
        "name": "Wishshare",
        "description": "WishShare is my most refined project, leveraging Tailwind, Vue 3, Node.js, TypeScript, and Socket.IO to create a comprehensive wishlist platform. The application features a Playwright-based scraper supporting several webshops to streamline wish creation.<br><br>This project showcases my ability to build polished, full-stack applications while implementing practical features like web scraping and real-time updates for an enhanced user experience.",
        "href": "https://github.com/Julius-Bendt/Wishshare",
        "image": "stackflock.webp",
        "status": 'in-progress'
    },
    {
        "name": "Vaultify",
        "description": "Vaultify is a personal exploration into cryptography and end-to-end encryption, developed using Node.js, TypeScript, Vue 3, and Socket.IO.<br><br>This ongoing project demonstrates my commitment to understanding complex security concepts through practical implementation, while expanding my technical expertise in real-time communication and modern web technologies.",
        "href": null,
        "image": "vaultify.webp",
        "status": 'in-progress'

    },
    {
        "name": "Tid.jub.dk",
        "description": "I co-developed tid.jub.dk, a time management web application built with Vue 3 and TypeScript. The solution enables individual time tracking and organization across different tasks.<br><br>This self-initiated project demonstrates our ability to identify organizational needs and implement practical solutions using modern frontend technologies.",
        "href": "https://tid.jub.dk",
        "image": "tid.jub.dk.webp",
        "status": "completed"
    },
    {
        "name": "Open source packages for HomeBridge",
        "description": "I've developed several HomeKit integrations through Homebridge, expanding smart home capabilities for users. These projects include integrations for Hyperion (enabling ambient TV lighting control), Sonos sound systems, and configurable dummy switches with webhook functionality.<br><br>All integrations were built using TypeScript and Node.js, leveraging the Homebridge SDK to ensure reliable HomeKit compatibility. These projects demonstrate my ability to create robust, user-focused solutions while contributing to the open-source community.",
        "href": "https://github.com/Julius-Bendt?tab=repositories",
        "image": "homebridge.webp",
        "status": "completed"

    },
    {
        "name": "Stackflock",
        "description": "Stackflock's objective is to establish connections between developers and companies. It achieves this by providing a map-based interface that allows developers to locate companies within their geographical vicinity and filter them based on their technological stack.<br><br>This feature helps both developers and companies to gain insight into the growing technology trends within their locality.<br><br>The project should be considered archived",
        "href": "https://stackflock.jub.dk",
        "image": "stackflock.webp",
        "status": "archived"
    },
    {
        "name": "Power the evolution",
        "description": "Power The Evolution originated as a high school project, which subsequently progressed beyond its initial delivery stage with the continued involvement of myself and a friend.<br><br>The game received acclaim in the form of inclusion in Denmark's championship for game development and earned the \"Youth Against Global Warming\" award in 2018.",
        "href": null,
        "image": "power.webp",
        "status": "completed"
    },
];

export const workExperience = [
    {
        "name": "Solita DK",
        "description": "As a Developer, I specialize in .NET, Node.js, and TypeScript, delivering solutions primarily within the finance and transportation sectors. My expertise includes cloud infrastructure management using Azure and implementing CI/CD through GitHub pipelines.<br><br>I have experience with Infrastructure as Code using Terraform and have successfully integrated AI technologies into enterprise solutions. Working with clients in finance, infrastructure, and logistics has given me strong experience in building robust, scalable systems for complex business needs.",
        "href": "https://www.solita.fi/denmark/",
        "yearRange": "aug. 2023 - now",
    },
    {
        "name": "Homerunner",
        "description": "As a Developer at Homerunner, I worked with Laravel and Flutter to develop innovative solutions. My main focus was backend development, where I built and maintained microservices, implemented database models, and integrated APIs.<br><br>I also contributed to mobile app development using Flutter, creating user interfaces based on design specifications. Additionally, I gained experience with DevOps and Elasticsearch integration, working alongside an experienced team that fostered my technical growth.",
        "href": "https://www.homerunner.com/",
        "yearRange": "jun. 2022 - aug. 2023",
    },
    {
        "name": "Graitor",
        "description": "Graitor is a startup with a mission to foster environmental sustainability globally. The core of Graitor's business model involves incentivizing conscientious user behavior, specifically through the act of \"panting\", or the collection and delivery of empty cans and bottles.<br><br>Users receive points for engaging in this activity, which can be subsequently redeemed for an array of rewards including discounts, unique experiences, and complimentary merchandise",
        "href": "https://graitor.dk",
        "yearRange": "apr. 2019 - may 2022",
    },
    {
        "name": "Freelance developer",
        "description": "As a seasoned freelancer, I have acquired ample experience in diverse areas of software development such as game, app, and website development.<br><br>My client base primarily comprised of small and mid-sized enterprises for whom I provided my services. My experience as a freelancer has endowed me with the necessary skills to tackle complex projects and deliver results within the designated timelines.<br><br><b>please notice: I don't do freelance work anymore</b>",
        "href": null,
        "yearRange": "sep. 2018 - aug. 2020",
    },
    {
        "name": "Game development teacher",
        "description": "Gamelab is a activity for young people in the municipality of Aalborg who are interested in game development. I have been a member of Gamelab since 2015 till 2022.<br><br>In 2018, I was hired to teach high school students about game development, specifically in areas such as programming, design, graphics, sound, and time management.",
        "href": "https://aalborgungdomsskole.dk/gamelab/",
        "yearRange": "sep. 2018 - mar. 2022",
    },
]