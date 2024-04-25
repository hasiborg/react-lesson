// eslint-disable-next-line react/prop-types
export default function Form({ children, actions, classNames }) {
	return (
		<form className={classNames} action={actions}>
			{children}
		</form>
	);
}
