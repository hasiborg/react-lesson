import { useAuth } from '../../AuthContext';
import classes from '../../style/account.module.css';

export default function Account() {
	const { currentUser, logout } = useAuth();

	return (
		<div className={classes.account}>
			<span className='material-icons-outlined' title='Account'>
				account_circle
			</span>
			<span>{currentUser?.displayName}</span>
			{currentUser ? (
				<>
					<span
						onClick={logout}
						className='material-icons-outlined'
						title='Logout'
					>
						logout
					</span>
				</>
			) : (
				<>
					<a href='singup'>Singup</a>
					<a href='singin'>Singin</a>
				</>
			)}
		</div>
	);
}
