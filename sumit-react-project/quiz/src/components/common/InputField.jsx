import classes from './input.module.css';

// eslint-disable-next-line react/prop-types
export default function InputField({ icon, ...rest }) {
	return (
		<div className={classes.textInput}>
			<input {...rest} />
			<span className='material-icons-outlined'> {icon} </span>
		</div>
	);
}
