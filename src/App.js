import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import TodoList from './components/todo/TodoList';
import Navi from './components/Navi/Navi';
import Counter from './components/counter/Counter';
import Posts from './components/posts/Posts';


const App = () => {
	return (
		<div className={'wraper'}>
			<Navi />
			<div className={'wraper-content'}>
				<Route path='/todo' render={() => <TodoList />} />
				<Route path='/counter' render={() => <Counter />} />
				<Route path='/posts' render={() => <Posts />} />
			</div>
		</div>
	)
}
export default App;
