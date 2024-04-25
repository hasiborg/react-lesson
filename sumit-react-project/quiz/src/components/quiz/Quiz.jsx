import classes from '../../style/quiz.module.css';
import QuizRange from './QuizRange';

import Option from './Option';

export default function Quiz() {
	return (
		<div>
			<h1>Pick three of your favorite Star Wars Films</h1>
			<h4>Question can have multiple answers</h4>
			<div className={classes.answers}>
				{/* <!-- Option 1 --> */}
				<Option
					style={`${classes.answer} ${classes.correct}`}
					optionValue='a new hope 1'
				/>
				<Option
					style={`${classes.answer}`}
					optionValue='a new hope 2'
				/>
				<Option
					style={`${classes.answer} ${classes.wrong}`}
					optionValue='a new hope 3'
				/>
				<Option
					style={`${classes.answer}`}
					optionValue='a new hope 1'
				/>
				<Option
					style={`${classes.answer}`}
					optionValue='a new hope 1'
				/>

				<Option style={classes.answer} optionValue='a new hope 1' />
			</div>
			<QuizRange percentage={25} />
		</div>

		// <div classNameName='miniPlayer floatingBtn'>
		// 	<span className='material-icons-outlined open'>
		// 		{' '}
		// 		play_circle_filled{' '}
		// 	</span>
		// 	<span className='material-icons-outlined close'> close </span>
		// 	<img src='./images/3.jpg' alt='' />
		// 	<p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
		// </div>
	);
}
