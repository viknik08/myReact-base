import React from 'react'
import s from './todo.module.css'
import PropTypes from 'prop-types'
import Todoitem from './todoItem'

const Todo = (props) => {
	return (
		<div className={s.container_todo}>
			<ul>
				{props.todos.map((todo, index) => {
					return <Todoitem todos={todo} key={todo.id} index={index} onChangeTodo={props.onChangeTodo} />
				})}
			</ul>
		</div>
	)
}
Todo.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChangeTodo: PropTypes.func.isRequired
}

export default Todo