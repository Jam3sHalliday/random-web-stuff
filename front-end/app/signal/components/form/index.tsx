import { Signal } from "@preact/signals-react"

export default function TodoForm({ todos }: { todos: Signal<string[]> }) {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        todos.value = [e.target.todo.value, ...todos.value]
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-4">
            <div className="">
                <input name="todo" type="text" className="w-full h-full px-4 py-2 " />
            </div>

            <button type="submit" className="border border-white px-4 rounded-xl text-sm">add</button>
        </form>
    )
}