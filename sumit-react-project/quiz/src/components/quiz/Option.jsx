const uuid = function generateUUID() {
	return 'xxx-xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

// eslint-disable-next-line react/prop-types
export default function Option({ style, optionValue }) {
	return (
		<>
			<label className={style} htmlFor={uuid()}>
				<input type='checkbox' id={uuid()} />
				{optionValue}
			</label>
		</>
	);
}
