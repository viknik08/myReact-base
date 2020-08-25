import axois from 'axios'
import { ADD_POST, FETCH_POST } from "./types"
import { loaderEnAC, loaderDisAC } from './loaderReducer'

const initialState = {
	post: [],
	fetchPost: []
}
export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				post: [action.payload, ...state.post]
			}
		case FETCH_POST:
			return {
				...state,
				fetchPost: action.payload
			}
		default: return state
	}
}

export const addPostAC = (post) => ({ type: ADD_POST, payload: post })
const fetchPostAC = (json) => ({ type: FETCH_POST, payload: json })

export const fetchPost = () => {
	return async dispatch => {
		dispatch(loaderEnAC())
		const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
		const json = await response.json()
		dispatch(fetchPostAC(json))
		dispatch(loaderDisAC())

	}
}