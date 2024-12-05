import Input from "./Input"
import { useRef, useState } from "react"
export default function ProjectDisplay({ title, description, dueDate, handleDelete }) {
    const [createTask, setCreateTask] = useState([]);

    const addTask = useRef();

    function handleAddTask() {
        const taskValue = addTask.current.value
        if (taskValue.trim()) {
            setCreateTask(prevTasks =>
                [...prevTasks, taskValue]
            );
            addTask.current.value = '';
        }

    }

    function handleRemoveTask(removeTask) {
        setCreateTask(prevTasks => prevTasks.filter(task => task !== removeTask))
    }

    return (

        <div className="w-full md:w-3/4 mt-14">
            <div className="flex justify-between">
                <h1 className="text-3xl font-mono">{title}</h1>
                <button onClick={() => handleDelete(title, description, dueDate)} className="ml-auto mr-5 text-lg text-stone-800 font-bold border-2 bg-stone-300 border-stone-300 rounded-md w-20 hover:text-stone-600 hover:bg-stone-400 transition duration-300 ease-in-out">Delete</button>
            </div>

            <p className="mt-3 text-stone-500">{dueDate}</p>
            <p className="mt-5 font-mono border-b-2 border-stone-400 w-[86%]">{description}</p>

            <h1 className="text-3xl text-stone-800 font-bold mt-8">Tasks</h1>

            <div className="flex flex-row gap-12 items-center w-[40%]">
                <div className="flex-1">
                    <Input ref={addTask} textarea />
                </div>
                <button onClick={handleAddTask} className=" text-stone-800 font-mono bg-stone-300 border-stone-300 rounded-md w-24 h-8  hover:text-stone-600 hover:bg-stone-400 transition duration-300 ease-in-out">Add Task</button>
            </div>

            <div className="flex flex-row justify-between mt-6">
                <ul className="bg-stone-200 p-4 rounded-lg shadow-sm mt-6 w-[50%]">
                    <li className="text-center font-mono border-b-2 border-stone-500"><p>To-Do List</p></li>
                    {createTask.map((task, index) => (
                        <li key={index} className="flex flex-row justify-between mt-6 items-center">
                            <span className="p-2 my-2 font-semibold">{task}</span>
                            <button onClick={() => handleRemoveTask(task)} className="border-2 border-stone-300 rounded-md font-serif hover:text-stone-600 transition duration-300 ease-in-out w-24 h-12">
                                Complete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>


        </div>


    )
}