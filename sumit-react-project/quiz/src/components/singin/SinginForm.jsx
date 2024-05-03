import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Button from '../common/Button';
import Form from '../common/Form';
import InputField from '../common/InputField';

export default function SinginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const { singin, currentUser } = useAuth();

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			console.log(currentUser);
			setError('');
			setLoading(true);
			await singin(email, password);
			navigate('/');
		} catch (err) {
			setLoading(false);
			console.log(err);
			setError(err);
		}
	}

	return (
		<>
			<Form style={{ height: ' 330px' }} onSubmit={handleSubmit}>
				<InputField
					type='email'
					placeholder='Your'
					icon='alternate_email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<InputField
					type='password'
					placeholder='Your password'
					icon='lock'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button disabled={loading} text='Login' />
				{error && <span className='error'>Field to to login</span>}

				<div className='info'>
					Don`t have an account ? <a href='singup'>Signup </a>
					instead.
				</div>
			</Form>
		</>
	);
}
