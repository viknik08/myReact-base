import React from 'react'
import s from './posts.module.css'

const Post = (props) => {
	return (
		<div className={s.container_post}>
			<div className={s.post_body}>
				<span>{props.title}</span>
			</div>
		</div>
	)
}

export default Post