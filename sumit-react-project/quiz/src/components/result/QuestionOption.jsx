import PropTypes from 'prop-types';

import AnswerCss from '../../style/quiz.module.css';

function QuestionOption({ option, answer, isCorrect }) {
	const ans = answer || false;
	const correctAns = isCorrect;

	let msg = '';

	if (ans && correctAns) {
		msg = 'Your answer is correct';
	}

	return (
		<div>
			<label
				className={`${AnswerCss.answer} ${
					answer && isCorrect ? AnswerCss.correct : ''
				} ${!answer && isCorrect ? AnswerCss.wrong : ''}`}
				htmlFor='option4'
			>
				{' '}
				<span>{option}</span>
				<span>{msg}</span>
			</label>
		</div>
	);
}

QuestionOption.propTypes = {
	option: PropTypes.string.isRequired,
	answer: PropTypes.bool.isRequired,
	isCorrect: PropTypes.bool.isRequired,
};

export default QuestionOption;
