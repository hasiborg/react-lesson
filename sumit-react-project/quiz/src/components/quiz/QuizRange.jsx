import PropTypes from 'prop-types';
import classes from '../../style/quiz.module.css';

const QuizRange = ({ percentage }) => {
	return (
		<div className={classes.progressBar}>
			<div className={classes.backButton}>
				<span className='material-icons-outlined'> arrow_back </span>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip}>{percentage}% complete!</div>
				<div className={classes.rangeBody}>
					<div className={classes.progress}></div>
				</div>
			</div>
			<a href='result'>
				<button className={classes.next}>
					{/* <span>Next Question</span> */}
					<span className='material-icons-outlined'>
						arrow_forward
					</span>
				</button>
			</a>
		</div>
	);
};

QuizRange.propTypes = {
	percentage: PropTypes.number.isRequired,
};

export default QuizRange;
