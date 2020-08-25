import React, { useState } from 'react'
import s from './posts.module.css'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../Redux/postsReducer'
import Loader from '../loader/loader'

const PostsFetch = (props) => {
	const dispatch = useDispatch()
	const post = useSelector(state => state.posts.fetchPost)
	const loading = useSelector(state => state.loader.loading)

	if (loading) {
		return <Loader />
	}
	return !post.length
		? <div className={`${s.fetch_btn} ${'btn'}`}> <button onClick={() => dispatch(fetchPost())} ><span>Fetch Post</span></button> </div>
		: post.map(p => <Post title={p.title} key={p.id} />)

}

export default PostsFetch