import Input from "./Input.jsx"
import { useRef } from "react"

export default function NewProject({ onCancel, handleSave }) {
    const titleInput = useRef();
    const descInput = useRef();
    const dateInput = useRef();

    function handleSaveClick() {
        const title = titleInput.current.value;
        const description = descInput.current.value;
        const dueDate = dateInput.current.value;

        handleSave(title, description, dueDate);
    }

    return (
        <div className="w-[35rem] mt-20 mx-auto">
            <menu className="flex items-center justify-end gap-4 mb-4">
                <button onClick={onCancel} className="rounded-md text-stone-800 hover:text-stone-600 transition duration-300 ease-in-out">Cancel</button>
                <button onClick={handleSaveClick} className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-400 transition duration-300 ease-in-out">Save</button>
            </menu>
            <div>
                <Input ref={titleInput} label="Title" />
                <Input ref={descInput} label="Description" textarea />
                <Input ref={dateInput} label="Due Date" />
            </div>
        </div>
    )
}