import React from "react";
import Link from "next/link";

const projects = [
    { id: "project-1", name: "First Project", image: "/nextjs.svg" },
    { id: "project-2", name: "Second Project", image: "/nextjs.svg" },
    { id: "project-3", name: "Third Project", image: "/nextjs.svg" },
];

const Timeline = () => {
    return (
        <div className="relative h-screen flex flex-col items-center py-10">
            {/* SVG Wavy Line */}
            <svg className="absolute w-10 h-full left-1/2 -translate-x-1/2">
                <path d="M50 0 Q 80 50, 50 100 T 50 200 T 50 300 T 50 400 T 50 500"
                    stroke="black" strokeWidth="3" fill="transparent" />
            </svg>

            {/* Project Dashes */}
            <div className="absolute left-1/2 -translate-x-1/2">
                {projects.map((project, index) => (
                    <div key={project.id} className="relative flex items-center my-20">
                        {/* Dash */}
                        <div className="w-4 h-4 bg-black rounded-full absolute left-0 -translate-x-1/2"></div>

                        {/* Project Link */}
                        <Link href={`/projects/${project.id}`} className="ml-6 flex items-center space-x-3">
                            <img src={project.image} alt={project.name} className="w-16 h-16 rounded-lg shadow-md" />
                            <span className="text-lg font-semibold">{project.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
