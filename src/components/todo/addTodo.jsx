import React, { useState } from 'react'
import PropTypes from 'prop-types'
import s from './todo.module.css'



const AddTodo = (props) => {
	const [value, setValue] = useState('')

	const submintHandler = (e) => {
		e.preventDefault()
		if (value.trim()) {
			props.addTodo(value)
			setValue('')
		}
	}


	return (
		<div className={s.form_cnt}>
			<form onSubmit={submintHandler}>
				<input value={value} onChange={(e) => setValue(e.target.value)} />
				<div className={'btn'}>
					<button type='submit' ><span> add todo</span></button>
				</div>
			</form>
		</div>
	)
}
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
}
export default AddTodo