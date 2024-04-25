import Classes from '../../style/button.module.css';
export default function Button({ text }) {
	return (
		<button className={Classes.button}>
			<span>{text}</span>
		</button>
	);
}
