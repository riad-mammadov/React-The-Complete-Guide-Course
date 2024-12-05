import { forwardRef } from "react"

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
    return (
        <p className="flex flex-col gap-4 my-4">
            <label className="font-mono text-sm font-bold text-stone-700">{label}</label>
            {textarea ? <textarea ref={ref} className="bg-stone-300 rounded-lg h-20 p-2" {...props} />
                :
                <input ref={ref} className="bg-stone-300 rounded-lg p-2" {...props} />}
        </p>
    )
});

export default Input;