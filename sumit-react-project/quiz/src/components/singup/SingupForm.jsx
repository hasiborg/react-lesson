import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Form from '../common/Form';
import InputField from '../common/InputField';

import { useAuth } from '../../AuthContext';

export default function SingupForm() {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState(null);
	const [agree, setAgree] = useState(false);
	const [loading, setLoading] = useState(false);

	const { singup, currentUser } = useAuth();

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		if (password !== confirmPassword) {
			return setError('Confirm password is not matched!');
		}

		try {
			console.log(currentUser);
			setError('');
			setLoading(true);
			await singup(email, password, userName);
			navigate('/');
		} catch (err) {
			setLoading(false);
			console.log(err);
			setError(err);
		}
	}

	return (
		<>
			<Form
				style={{
					height: '500px',
				}}
				onSubmit={handleSubmit}
			>
				<InputField
					required={true}
					type='text'
					placeholder='Your Name'
					icon='person'
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<InputField
					required={true}
					type='email'
					placeholder='Enter email'
					icon='alternate_email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<InputField
					required={true}
					type='password'
					placeholder='Enter password'
					icon='lock'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<InputField
					required={true}
					type='password'
					placeholder='Confirm Password'
					icon='lock_clock'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>

				<label>
					<input
						type='checkbox'
						required
						value={agree}
						onChange={() => setAgree((v) => !v)}
					/>
					<span> I agree to the Terms & Conditions</span>
				</label>

				<Button disabled={loading} type='submit' text='Submit now' />
				{error && <span className='error'>Failed to singup!</span>}

				<div className='info'>
					Already have an account? <a href='singin'>Login</a> instead.
				</div>
			</Form>
		</>
	);
}
