import classes from '../../style/form.module.css';
// eslint-disable-next-line react/prop-types
export default function Form({ children, ...restProp }) {
	return (
		<form className={classes.form} {...restProp}>
			{children}
		</form>
	);
}
