import banner from '../../assets/3.jpg';
import classes from '../../style/video.module.css';

export default function video() {
	return (
		<>
			<a href='quiz.html'>
				<div className={classes.video}>
					<img src={banner} alt='' />
					<p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
					<div className={classes.qmeta}>
						<p>10 Questions</p>
						<p>Score : Not taken yet</p>
					</div>
				</div>
			</a>
		</>
	);
}
