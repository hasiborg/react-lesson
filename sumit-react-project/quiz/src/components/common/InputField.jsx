// eslint-disable-next-line react/prop-types
export default function InputField({ icon, className, ...rest }) {
	return (
		<div className={className}>
			<input {...rest} />
			<span className='material-icons-outlined'> {icon} </span>
		</div>
	);
}
