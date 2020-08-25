import { LOADER_ENABLE, LOADER_DISABLE } from "./types"

const initialState = {
	loading: false,
}
export const loaderReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADER_ENABLE:
			return {
				...state,
				loading: true
			}
		case LOADER_DISABLE:
			return {
				...state,
				loading: false
			}
		default: return state
	}
}

export const loaderEnAC = () => ({ type: LOADER_ENABLE })
export const loaderDisAC = () => ({ type: LOADER_DISABLE })