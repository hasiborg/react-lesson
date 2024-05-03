import illustrations from '../../assets/login.svg';
import classes from '../../style/input.module.css';
import SinginForm from './SinginForm';

export default function Singup() {
	return (
		<>
			<h1>Login account</h1>
			<div className='column'>
				<div className={classes.illustration}>
					<img src={illustrations} alt='login' />
				</div>
				<SinginForm />
			</div>
		</>
	);
}
