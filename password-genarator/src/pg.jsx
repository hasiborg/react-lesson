import { useState, useEffect, useRef } from 'react';

export default function Pg() {
	const [length, setLength] = useState(6);
	const [withNum, setNum] = useState(false);
	const [withChar, setChar] = useState(false);
	const [pass, setPass] = useState('');

	const handleChange = (e) => {
		setLength(e.target.value);
	};
	const passRef = useRef(null);
	useEffect(() => {
		let showPass = '';
		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

		if (withNum) str += '0123456789';
		if (withChar) str += '!@$%^&*()+=?><"`|';

		for (let i = 1; i < length; i++) {
			const char = Math.floor(Math.random() * str.length + 1);

			showPass += str.charAt(char);
		}
		setPass(showPass);
	}, [length, withNum, withChar]);

	const copyFunc = () => {
		passRef.current.select();
		window.navigator.clipboard.writeText(pass);
	};

	return (
		<>
			<div className=' w-full flex justify-center flex-col items-center bg-stone-700 py-5 rounded-md'>
				<div className='w-full flex flex-row justify-center'>
					<input
						type='text'
						value={pass}
						ref={passRef}
						readOnly
						className=' w-3/4 outline-1 rounded-l-xl px-5 focus:outline-none w-8/12 h-11 text-lg text-black bg-blue-400 '
					/>
					<div
						onClick={copyFunc}
						className='bg-red-300 outline-none w-16 h-11 rounded-r-xl  cursor-pointer flex items-center justify-center'
					>
						Copy
					</div>
				</div>
				<div className='py-8 w-full flex flex-row justify-round'>
					<div className=' w-1/3'>
						<input
							min={6}
							max={40}
							step={1}
							className=' cursor-pointer'
							type='range'
							onChange={handleChange}
						/>

						<label className='text-2xl ml-3'>
							Length {length}{' '}
						</label>
					</div>

					<div className='flex items-center w-1/3'>
						<input
							type='checkbox'
							onChange={() => setNum((prv) => !prv)}
							className='w-8 h-8'
							// checked={withNum}
						/>
						<label className='text-2xl ml-3'>With Number</label>
					</div>

					<div className='flex items-center w-1/3'>
						<input
							type='checkbox'
							className='w-8 h-8'
							onChange={() => setChar((prev) => !prev)}
							// checked={withChar}
						/>
						<label className='text-2xl ml-3'>With Character</label>
					</div>
				</div>
			</div>
		</>
	);
}
