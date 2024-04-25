import PropTypes from 'prop-types';
import QuizCss from '../../style/quiz.module.css';
import QuestionCss from './question.module.css';

import QuestionOption from './QuestionOption';

function Question({ question }) {
	return (
		<div>
			<div className={QuestionCss.question}>
				<div className={QuestionCss.qtitle}>
					<span className='material-icons-outlined'>
						help_outline
					</span>
					{question}
				</div>
				<div className={QuizCss.answers}>
					<QuestionOption
						option={'Option 1'}
						answer={true}
						isCorrect={false}
					/>

					<QuestionOption
						option={'Option 1'}
						answer={true}
						isCorrect={true}
					/>
					<QuestionOption
						option={'Option 1'}
						answer={false}
						isCorrect={true}
					/>
					<QuestionOption
						option={'Option 1'}
						answer={true}
						isCorrect={false}
					/>
					<QuestionOption
						option={'Option 1'}
						answer={true}
						isCorrect={false}
					/>
					<QuestionOption
						option={'Option 1'}
						answer={true}
						isCorrect={false}
					/>

					<QuestionOption
						option={'Option 1'}
						answer={true}
						isCorrect={false}
					/>
				</div>
			</div>
		</div>
	);
}

Question.propTypes = {
	question: PropTypes.string.isRequired,
};

export default Question;
