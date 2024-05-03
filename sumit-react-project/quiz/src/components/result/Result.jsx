import successImg from '../../assets/success.png';
import Question from './Question';
import './result.css';

export default function Result() {
	return (
		<>
			{/* <!-- First Row --> */}
			<div className='container'>
				<div className='summary'>
					<div className='point'>
						{/* <!-- progress bar will be placed here --> */}
						<p className='score'>
							Your score is <br />5 out of 10
						</p>
					</div>

					<div className='badge'>
						<img src={successImg} alt='Success' />
					</div>
				</div>

				<div className='analysis'>
					<h1>Question Analysis</h1>
					<h4>You answerd 5 out of 10 questions correctly</h4>
					<Question question={'How many legs has a cow ?'} />
					<Question question={'How many legs has a cow ?'} />
					<Question question={'How many legs has a cow ?'} />
				</div>
			</div>
		</>
	);
}
