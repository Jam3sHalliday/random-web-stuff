export default function TodoList({ todos }: { todos: string[] }) {
    console.log('TodoList render')
    return (
        <ul className="list-disc">
            {todos.map((t: string) => (
                <li key={t}>{t}</li>
            ))}
        </ul>
    )
}