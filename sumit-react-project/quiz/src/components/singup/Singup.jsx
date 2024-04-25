import illustrations from '../../assets/signup.svg';
import formClasses from '../../style/form.module.css';
import classes from '../../style/input.module.css';
import Button from '../common/Button';
import Form from '../common/Form';
import InputField from '../common/InputField';

export default function Singup() {
	return (
		<>
			<h1>Create an account</h1>
			<div className='column'>
				<div className={classes.illustration}>
					<img src={illustrations} alt='Signup' />
				</div>
				<Form
					classNames={`${formClasses.form} ${formClasses.singup}`}
					action='#'
				>
					<InputField
						type='text'
						placeholder='Your Name'
						icon='person'
						className={classes.textInput}
					/>
					<InputField
						type='email'
						placeholder='Enter email'
						icon='alternate_email'
						className={classes.textInput}
					/>

					<InputField
						type='password'
						placeholder='Enter password'
						icon='lock'
						className={classes.textInput}
					/>

					<InputField
						type='password'
						placeholder='Confirm Password'
						icon='lock_clock'
						className={classes.textInput}
					/>

					<label>
						<input type='checkbox' />{' '}
						<span>I agree to the Terms & Conditions</span>{' '}
					</label>

					<Button text='Submit now' />

					<div className='info'>
						Already have an account? <a href='login.html'>Login</a>{' '}
						instead.
					</div>
				</Form>
			</div>
		</>
	);
}
