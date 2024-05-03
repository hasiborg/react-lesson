import lwsLogo from '../../assets/logo-bg.png';
import classes from '../../style/nav.module.css';
import Account from './Account';

export default function Nav() {
	return (
		<div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<a href='/' className={classes.brand}>
							<img src={lwsLogo} alt='Learn with Sumit Logo' />
							<h3>Learn with Sumit</h3>
						</a>
					</li>
				</ul>
				<Account />
			</nav>
		</div>
	);
}
