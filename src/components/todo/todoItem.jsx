import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import s from './todo.module.css'
import Context from '../../context'

const Todoitem = (props) => {
	const { removeTodo } = useContext(Context)

	const done = []
	if (props.todos.completed) {
		done.push('done')
	}

	return (

		<li className={s.todo}>
			<label className={s.lable}>
				<span>
					<input type="checkbox" checked={props.todos.completed} className={s.checkbox} onChange={() => props.onChangeTodo(props.todos.id)} />
					<span className={s.fake}></span>
					<span className={done.join('')} >{props.index + 1} {props.todos.title} </span>
				</span>
			</label>
			<button onClick={removeTodo.bind(null, props.todos.id)} >&times;</button>
		</li>

	)
}
Todoitem.propTypes = {
	todos: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChangeTodo: PropTypes.func.isRequired
}

export default Todoitem