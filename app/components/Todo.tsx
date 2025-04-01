'use client';

import { atom, useAtom } from 'jotai';
import { useSession } from 'next-auth/react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export const todosAtom = atom<Todo[]>([]);

export function Todo() {
    const { data: session } = useSession();
    const [todos, setTodos] = useAtom(todosAtom);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    if (!session) return <div>Please sign in to manage todos</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Add new todo"
                    className="border p-2 mr-2"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                            addTodo(e.currentTarget.value.trim());
                            e.currentTarget.value = '';
                        }
                    }}
                />
            </div>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center mb-2 cursor-pointer"
                        onClick={() => toggleTodo(todo.id)}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            readOnly
                            className="mr-2"
                        />
                        <span
                            className={`${
                                todo.completed ? 'line-through text-gray-500' : ''
                            }`}
                        >
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}