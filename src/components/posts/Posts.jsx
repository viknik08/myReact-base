import React from 'react'
import s from './posts.module.css'
import Post from './Post'
import { connect } from 'react-redux'

const Posts = (props) => {

	return !props.post.length
		? <p>No Posts</p>
		: props.post.map(p => <Post title={p.title} key={p.id} />)
}


const mapStateToProps = state => ({
	post: state.posts.post
})
export default connect(mapStateToProps, null)(Posts)