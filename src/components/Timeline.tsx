import React from "react"
import Link from "next/link"
import { InferGetStaticPropsType, GetStaticPropsContext } from "next"
import path from "path"

interface Project {
    name: string;
    json: {
        image: string;
        date: string;
    }
}

const monthIndex = {
    "Jan": 0,
    "Feb": 1,
    "Mar": 2,
    "Apr": 3,
    "May": 4,
    "Jun": 5,
    "Jul": 6,
    "Aug": 7,
    "Sep": 8,
    "Oct": 9,
    "Nov": 10,
    "Dec": 11
}

const Timeline = ({ projects }: { projects: Project[] }) => {    
    projects = projects.sort((a, b) => {
        const [monthA, yearStrA] = a.json.date.split(' ');
        const monthIndexValueA = monthIndex[monthA as keyof typeof monthIndex];
        const yearA = parseInt(yearStrA);

        const [monthB, yearStrB] = b.json.date.split(' ');
        const monthIndexValueB = monthIndex[monthB as keyof typeof monthIndex];
        const yearB = parseInt(yearStrB);

        const dateA = new Date(yearA, monthIndexValueA, 1);
        const dateB = new Date(yearB, monthIndexValueB, 1);

        return dateB.getTime() - dateA.getTime(); // Sort in descending order
    })
    
    console.log(projects)

    return (
        <></>
        // <div className="relative h-screen flex flex-col items-center py-10">
        //     <svg className="absolute w-10 h-full left-1/2 -translate-x-1/2">
        //         <path d="M50 0 Q 80 50, 50 100 T 50 200 T 50 300 T 50 400 T 50 500"
        //             stroke="black" strokeWidth="3" fill="transparent" />
        //     </svg>

        //     <div className="absolute left-1/2 -translate-x-1/2">
        //         {projects.map() => (
        //             <div key={project.id} className="relative flex items-center my-20">
        //                 <div className="w-4 h-4 bg-black rounded-full absolute left-0 -translate-x-1/2"></div>

        //                 <Link href={`/projects/${project.id}`} className="ml-6 flex items-center space-x-3">
        //                     <img src={project.image} alt={project.name} className="w-16 h-16 rounded-lg shadow-md" />
        //                     <span className="text-lg font-semibold">{project.name}</span>
        //                 </Link>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default Timeline;
