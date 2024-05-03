import illustrations from '../../assets/signup.svg';
import classes from '../../style/input.module.css';
import SingupForm from './SingupForm';

export default function Singup() {
	return (
		<>
			<h1>Create an account</h1>
			<div className='column'>
				<div className={classes.illustration}>
					<img src={illustrations} alt='Singup' />
				</div>
				<SingupForm />
			</div>
		</>
	);
}
