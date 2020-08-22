import React, { useState, useEffect } from 'react';
import s from './todo.module.css';
import Todo from './todo';
import Context from '../../context'
import AddTodo from './addTodo';
import Loader from '../loader/loader'
import Modal from './Modal/Modal';

const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(response => response.json())
			.then(todos => {
				setTimeout(() => {
					setTodos(todos)
					setLoading(false)
				}, 2000)
			})
	}, [])

	const onChangeTodo = (id) => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})
		)
	}
	const removeTodo = (id) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}
	const addTodo = (title) => {
		setTodos(todos.concat([{
			title,
			id: Date.now(),
			completed: false
		}]))
	}



	return (
		<Context.Provider value={{ removeTodo }}>
			<div className={s.container} >
				<h1>React todo list</h1>
				<Modal todos={todos} />
				<AddTodo addTodo={addTodo} />
				{loading && <Loader />}
				{todos.length ? <Todo todos={todos} onChangeTodo={onChangeTodo} /> : loading ? null : <p>No todo</p>}

			</div>
		</Context.Provider>
	)
}

export default TodoList;
