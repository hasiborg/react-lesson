import classes from '../../style/main.module.css';

// eslint-disable-next-line react/prop-types
export default function Main({ children }) {
	return (
		<main className={classes.main}>
			<div className={classes.container}>{children}</div>
		</main>
	);
}
