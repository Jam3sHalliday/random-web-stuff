'use client'

import { effect, signal } from "@preact/signals-react";
import TodoList from "./components/list";
import TodoForm from "./components/form";

export const todos = signal(['wake up', 'drink water'])

effect(() => console.log(todos.value))

export default function Page() {

    return (
        <div className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3>Preact&apos;s Signal Demo</h3>

            <TodoForm todos={todos} />

            <div className="mt-10">
                <TodoList todos={todos.value || []} />
            </div>
        </div>
    )
}
