import React from 'react'
import s from './navi.module.css'
import { NavLink } from 'react-router-dom'


const Navi = () => {
	return (
		<div className={s.navi_cnt}>
			<div className={s.navi_item}>
				<NavLink to='/todo' activeClassName={s.navi_active}>TodoList</NavLink>
			</div>
			<div className={s.navi_item}>
				<NavLink to='/counter' activeClassName={s.navi_active}>CounterList</NavLink>
			</div>
			<div className={s.navi_item}>
				<NavLink to='/posts' activeClassName={s.navi_active}>PostsList</NavLink>
			</div>
		</div>
	)
}

export default Navi