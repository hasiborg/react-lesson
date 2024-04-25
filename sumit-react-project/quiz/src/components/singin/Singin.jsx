import illustrations from '../../assets/login.svg';
import formClasses from '../../style/form.module.css';
import classes from '../../style/input.module.css';
import Button from '../common/Button';
import Form from '../common/Form';
import InputField from '../common/InputField';

export default function Singup() {
	return (
		<>
			<h1>Login account</h1>
			<div className='column'>
				<div className={classes.illustration}>
					<img src={illustrations} alt='login' />
				</div>
				<Form
					classNames={`${formClasses.form} ${formClasses.login}`}
					action='#'
				>
					<InputField
						type='email'
						placeholder='Your'
						icon='alternate_email'
						className={classes.textInput}
					/>

					<InputField
						type='password'
						placeholder='Your password'
						icon='lock'
						className={classes.textInput}
					/>

					<Button text='Login' />

					<div className='info'>
						Don`t have an account ?{' '}
						<a href='signup.html'>Signup </a>
						instead.
					</div>
				</Form>
			</div>
		</>
	);
}
