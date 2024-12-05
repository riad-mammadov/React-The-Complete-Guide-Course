import { useState } from "react"

export default function Sidebar({ createProjectClick, projects, displayClickedProject }) {

    const projectButton = "w-[80%] mb-4 px-2 overflow-hidden border-2 text-ellipsis py-4 md:text-xl border-stone-600 text-lg rounded-md hover:text-stone-300 hover:scale-110 transition duration-300 ease-in-out"

    return (
        <aside className="w-1/3 py-12 md:w-72 bg-stone-900 text-stone-50 text-center rounded-r-xl">
            <h2 className="text-3xl uppercase font-mono pb-10 mb-8">Your Projects</h2>
            <div>
                <button onClick={createProjectClick} className="py-2 font-mono px-4 md:text-base rounded-md hover:bg-stone-800 transition duration-300 ease-in-out">+ Add Project</button>
            </div>
            {projects &&
                <ul className="py-12 text-center">
                    {projects.map((project) => (
                        <li key={project.title}><button onClick={() => displayClickedProject(project)} className={projectButton}>{project.title}</button></li>
                    ))}
                </ul>}


        </aside >

    )
}