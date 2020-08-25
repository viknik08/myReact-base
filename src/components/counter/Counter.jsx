import React, { useState } from 'react'
import s from './counter.module.css'

const Counter = () => {
	const [count, setCount] = useState(0)

	const asyncCount = () => {
		setTimeout(() => {
			setCount(count + 1)
		}, 500)
	}





	return (
		<div className={s.counter_cnt}>
			<div className={s.count}>
				<h2>count: {count}</h2>
			</div>
			<div className={s.btn}>
				<div className={'btn'}>
					<button onClick={() => setCount(count + 1)}  ><span>Добавить</span> </button>
				</div>
				<div className={'btn'}>
					<button onClick={() => setCount(count - 1)}  ><span>Убрать</span> </button>
				</div>
				<div className={'btn'}>
					<button onClick={() => asyncCount()}   ><span>Async</span> </button>
				</div>
				<div className={'btn'}>
					<button onClick={() => setCount(0)} ><span>Обнулить</span> </button>
				</div>
			</div>

		</div>
	)
}

export default Counter