import React from 'react'
import s from './posts.module.css'
import PostsForm from './PostsForm'
import Posts from './Posts'
import PostsFetch from './PostsFetch'

const PostsList = () => {
	return (
		<div className={s.container_list}>
			<div className={s.row}>
				<div className={s.col}>
					<PostsForm />
				</div>
			</div>
			<div className={s.row}>
				<div className={s.col}>
					<h2>Синхронные посты</h2>
					<Posts />
				</div>
				<div className={s.col}>
					<h2>Асинхронные посты</h2>
					<PostsFetch posts={[]} />
				</div>
			</div>
		</div>
	)
}

export default PostsList