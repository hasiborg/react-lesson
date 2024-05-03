import Classes from '../../style/button.module.css';
// eslint-disable-next-line react/prop-types
export default function Button({ text,...btnPro }) {
	return (
		<button {...btnPro} className={Classes.button}>
			<span>{text}</span>
		</button>
	);
}
