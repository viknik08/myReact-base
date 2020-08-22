import React from 'react'
import s from './modal.module.css'

class Modal extends React.Component {
	state = {
		isOpen: false
	}
	render() {
		return (
			<React.Fragment>
				<div className={'btn'}>
					<button onClick={() => this.setState({ isOpen: true })}><span>open modal</span></button>
				</div>
				{this.state.isOpen && <div className={s.modal}>
					<div className={s.modal_body}>
						<h2>Hi i am modal</h2>
						{this.props.todos.map(todo => <p>{!todo.completed ? todo.title : null}</p>)}
						<div className={'btn'}>
							<button onClick={() => this.setState({ isOpen: false })}><span> close modal</span></button>
						</div>
					</div>
				</div>}
			</React.Fragment>
		)
	}
}

export default Modal