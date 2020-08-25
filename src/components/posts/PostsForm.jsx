import React from 'react'
import s from './posts.module.css'
import { connect } from 'react-redux'
import { addPostAC } from '../../Redux/postsReducer'

class PostsForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
		}
	}

	submitHandler = (e) => {
		e.preventDefault()
		const { title } = this.state
		// проверка для пустого inputa
		if (!title.trim()) {
			return
		}
		const newPost = {
			title,
			id: Date.now().toString()
		}
		this.props.addPostAC(newPost)
		this.setState({ title: '' })
	}

	changeInput = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}


	render() {
		return (
			<div className={s.container_form}>
				<form onSubmit={this.submitHandler}>
					<div>
						<input type="text" name='title' value={this.state.title} onChange={this.changeInput} />
					</div>
					<div className={'btn'}>
						<button type='submit'><span>Add</span></button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(null, { addPostAC })(PostsForm)