import image from '../assets/no-projects.png';

export default function NoProject({ createProjectClick }) {
    return (<div className="mt-48 text-center w-2/3 flex-auto">
        <img className="h-24 m-auto mb-4" src={image} alt="No Project" />
        <h2 className='text-xl font-bold mb-4 font-mono text-stone-800'>No Project Selected</h2>
        <p className='text-stone-700 mb-4'>Please select a project or Create a new one</p>
        <p><button onClick={createProjectClick} className='rounded-md text-neutral-950 font-mono uppercase bg-stone-400 p-2 hover:bg-stone-500 transition duration-300 ease-in-out'>Create New Project</button></p>
    </div>)
}