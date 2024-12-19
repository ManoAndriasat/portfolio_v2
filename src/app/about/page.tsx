"use client";
import React from "react";
import { Facebook, LinkedIn, GitHub} from "@mui/icons-material";
import AnimatedCircle from "../components/AnimatedCircle";

const About = () => {
    const technologies = [
        'java', 'spring boot', 'python', 'django', 'react', 'expo react native', 'next.js', 'postgresql', 'bootstrap', 'tailwind'
    ];

    const project = [
        {
            date: "JUN - JUL 2024",
            title: "Dynamic Room Reservation Calendar",
            tech: "djangoRest - react",
            description: "Development of a room reservation management application, allowing the management of absences and vehicle reservations for missions, thus optimizing the organization of resources.",
            link: null
        },
        {
            date: "MAY 2024",
            title: "House Construction Quote Generator",
            tech: "asp.net - html - css",
            description: "A project enabling clients to create customized quotes for building their houses, with complete management of quotes, work progress tracking, and a detailed dashboard for managing revenue.",
            link: "https://github.com/ManoAndriasat/house_construction.git"
        },
        {
            date: "FEB - MAR 2024",
            title: "Internal Supply Chain",
            tech: "asp.net - html - css",
            description: "A system designed to automate and optimize the purchasing process within a company, covering all steps from needs expression to invoicing, including validation from department heads, finance, and management. Group project with 3 members, I contributed 50% of the project.",
            link: "https://github.com/ManoAndriasat/Systeme-Commerciale"
        },
        {
            date: "JAN - MAR 2024",
            title: "CRUD Generator",
            tech: "java - vueJs",
            description: "A CRUD generator for an API using Spring Boot, with a web interface in Vue.js. It automatically generates authentication, registration, navigation, CRUD operations, PDF import, and pagination, all with a good design.",
            link: "https://github.com/judi1968/Generate-crud-Pagination-and-Auth"
        },
        {
            date: "JAN - FEB 2024",
            title: "Android App - Car Sales Management",
            tech: "ionic react",
            description: "A mobile application to manage used car sales and register customer and vehicle information.",
            link: "https://drive.google.com/file/d/1AlMbnATO4C2aezuQ2OzbaDKpsmK8SJGD/view?fbclid=IwY2xjawFjrThleHRuA2FlbQIxMAABHeJEhGilXkSdTxsX6agX3ZrVkxBlWxLfyd6ohzhCPjU1DKWGwTt_kLgNQQ_aem_jM1e_5ZXlAdO0W4WgI1K4w"
        },
        {
            date: "DEC 2023 - FEB 2024",
            title: "Used Car Sales Website",
            tech: "react",
            description: "A website dedicated to selling used cars, with advanced filters to facilitate searching and finding the right car for your needs.",
            link: "https://varotravam.netlify.app/"
        },
        {
            date: "JAN 2024",
            title: "Optimizing Medication for a Disease",
            tech: "asp.net - html - css",
            description: "Optimization of the best medication sets for a given symptom to limit money loss and surplus spending. This project aims to provide an efficient solution for selecting the most appropriate treatments based on specific patient needs while avoiding unnecessary costs.",
            link: "https://github.com/ManoAndriasat/optimisation-meilleur-medicament.git"
        },
        {
            date: "NOV - DEC 2023",
            title: "Human Resources Management",
            tech: "asp.net - html - css",
            description: "A system designed to automate and optimize both the job offer management and employee recruitment process using quizzes. The project also includes payroll management, pay slips, and management of absences and leaves. Group project with 3 members, I contributed 60% of the project.",
            link: "https://github.com/ManoAndriasat/Ressource-Humaine.git"
        },
        {
            date: "DEC 2023",
            title: "Electricity Outage Prediction",
            tech: "asp.net - html - css",
            description: "Prediction of electricity outages based on prior data, sunlight brightness, battery capacity, solar panel power, and the number of students present.",
            link: "https://github.com/ManoAndriasat/Prediction-Coupure-Electricite.git"
        },
        {
            date: "NOV 2023",
            title: "FIFO/LIFO Stock Management",
            tech: "asp.net - html - css",
            description: "FIFO stock management for multiple stores with features such as stock status monitoring with filters, validation of stock exit drafts before actual exit, and handling exceptions in case of false data entries.",
            link: "https://github.com/ManoAndriasat/FIFO-LIFO.git"
        }
    ];
    

    return (
        <>
            <style jsx>{`
            ::-webkit-scrollbar {
                width: 10px;
            }

            ::-webkit-scrollbar-thumb {
                background: black;
                border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: #555;
            }

            .scrollbar {
                scrollbar-width: thin;
                scrollbar-color:#e9dbc2 black;
            }
        `}</style>
            <body className="overflow-auto lg:overflow-hidden sm:overflow-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="h-0 col-span-1 lg:col-span-3 lg:h-screen bg-transparent"></div>
                    <div className="p-4 lg:col-span-3 lg:h-screen z-999">
                        <div className="lg:pt-20 lg:pl-10 sm:pt-5 md:pt-5 relative h-full">
                        
                            <h1 className="text-7xl sm:text-7xl" style={{ fontFamily: "BoilingThin" }}>
                                <a href="/">Hi I&apos;m</a>
                                <br />
                                <a href="/"><span style={{ color: "rgba(239,99,81,255)" }}>Mano</span> Andriasat</a>
                            </h1>
                            <h2 className="mt-3 text-lg sm:text-xl">
                                Full-stack Developer
                            </h2>
                            <h3 className="mt-3 text-sm sm:text-base">
                                ma.andriasat@gmail.com
                    </h3>
                    <AnimatedCircle/>
                            <footer
                                className="mt-20 lg:mt-0 lg:absolute bottom-1 left-0 flex items-center lg:pl-8 lg:p-4 lg:flex-col"
                                aria-label="Réseaux sociaux de Mano Andriasat"
                                role="contentinfo"
                            >
                                <ul className="flex lg:flex-col">
                                    <li className="mr-4 lg:mr-0 lg:mb-4 flex items-center">
                                        <a
                                            href="https://www.facebook.com/mano.andriasat?locale=fr_FR"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Suivez-moi sur Facebook"
                                            title="Facebook"
                                        >
                                            <Facebook className="mr-2" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li className="mr-4 lg:mr-0 lg:mb-4 flex items-center">
                                        <a
                                            href="https://www.linkedin.com/in/manohisoa-andriasatarintsoa-5894a1304/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Suivez-moi sur LinkedIn"
                                            title="LinkedIn"
                                        >
                                            <LinkedIn className="mr-2" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li className="mr-4 lg:mr-0 lg:mb-4 flex items-center">
                                        <a
                                            href="https://github.com/ManoAndriasat"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Suivez-moi sur GitHub"
                                            title="GitHub"
                                        >
                                            <GitHub className="mr-2" aria-hidden="true" />
                                        </a>
                                    </li>
                                </ul>
                            </footer>

                        </div>
                    </div>

                    <div className="p-4 lg:col-span-6 lg:h-screen lg:overflow-y-auto bg-transparent scrollbar">

                        
                        <div className="w-full lg:w-6/12 lg:mt-20">
                            <h2 className="text-sm uppercase tracking-widest lg:sr-only pb-5">About</h2>
                            <p>
                                My full name is Andriasatarintsoa Manohisoa, I am 20 years old and I live in Antananarivo, Madagascar.
                                Since 2021, I have been pursuing my studies at IT University Andoharanofotsy,
                                where I specialize in application development.
                            </p>
                            <br />
                            <p>
                                To excel in these fields, I have worked on numerous projects using various technologies. Each of these projects has allowed me to develop skills in problem solving, strategic thinking, and design. I also enjoy solving problems on LeetCode, which helps me improve my skills in algorithms and logic. Below, you will find some of my recent projects, which showcase my abilities and passion for development.
                            </p>


                            <h2 className="text-sm uppercase tracking-widest lg:sr-only pb-2 pt-20 mt:20">Experience</h2>

                            <div className="grid grid-cols-1 gap-2 lg:mt-20">
                                <div className="grid grid-cols-12 gap-0">
                                    <div className="col-span-4"></div>
                                    <div className="col-span-8">
                                        <h1 className="mb-1 text-2xl">Project Coordination Unit</h1>
                                    </div>
                                </div>

                                <div className="p-2 grid grid-cols-12 gap-0">
                                    <div className="col-span-4 text-sm">
                                        JUN - JUL 2024
                                    </div>
                                    <div className="col-span-8">
                                        <span className="italic text-sm">Internship</span>
                                        <p>
                                            Development of a booking management application for meeting rooms, allowing for the management of absences and vehicle reservations for missions, thus optimizing resource organization.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-2 grid grid-cols-12 gap-0 mb-5">
                                    <div className="col-span-4 text-sm">
                                        JUN - OCT 2024
                                    </div>
                                    <div className="col-span-8">
                                        <span className="italic text-sm">Internship</span>
                                        <p>
                                            Design of a datamart (a specialized data storage system).
                                            Automatic data extraction from a data warehouse (DHIS2) to our datamart via an ETL process.
                                            Development of an online dashboard and data analysis tools for a government program (PARN).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-sm uppercase tracking-widest lg:sr-only pb-2 pt-20 mt:20">Skills</h2>
                            <div className="grid grid-cols-1 gap-2 lg:mt-20">
                                <p>Technologies I&apos;ve used <span className="italic text-sm">recently</span></p>
                                <div className="flex flex-wrap gap-3">
                                    {technologies.map((tech) => (
                                        <span key={tech} className="text-sm rounded px-3 py-0.5" style={{ border: "1px solid black", color: "black" }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h2 className="text-sm uppercase tracking-widest lg:sr-only pb-2 pt-20 mt:20">Education</h2>
                            <div className="lg:mt-20">
                                {[
                                    { degree: "Master's", university: "IT University", period: "2024 - ongoing", description: "BIHAR** (Big Data Intelligence for Human Augmented Reality)" },
                                    { degree: "Bachelor's in Computer Science", university: "IT University", period: "2021 - 2024", description: "Specialized in application development" }
                                ].map(({ degree, university, period, description }) => (
                                    <div key={degree} className="p-2 grid grid-cols-12 gap-0 mb-5">
                                        <div className="lg:col-span-10 col-span-8">
                                            <h1 className="mb-1 text-2xl">{degree}</h1>
                                            <p className="text-sm">{university}</p>
                                            <p>{period}</p>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <h2 className="text-sm uppercase tracking-widest lg:sr-only pb-2 pt-20 mt:20">Recent project</h2>

                            <div className="grid grid-cols-1 gap-2 lg:mt-20">
                                {project.map((proj, index) => (
                                    <div key={index} className="p-2 grid grid-cols-12 gap-0 mb-5">
                                        <div className="col-span-4 text-sm mt-2">
                                            {proj.date}
                                        </div>
                                        <div className="col-span-8">
                                            <h1 className="mb-1 text-2xl">{proj.title} <span className="italic text-sm">{proj.tech}</span></h1>
                                            <p>{proj.description}</p>
                                            {proj.link && (
                                                <a href={proj.link} className="flex items-center" style={{ color: "rgba(239,99,81,255)", marginTop: "10px" }} target="_blank" rel="noopener noreferrer">
                                                    {proj.title.includes('Application android') ? "Télécharger" : "Voir sur GitHub"} <GitHub className="ml-2" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

export default About;
