import { useState } from 'react';
import './App.css';

function App() {
	const [length, setLength] = useState(6);
	const [withNum, setWithNum] = useState(false);
	const [withChar, setWithChar] = useState(false);
	// const [pass, setPass] = useState('');

	const handleChange = (e) => {
		setLength((prvLen) => prvLen + e.target.value);
	};

	// const passwordGenerator = useCallback(() => {

	// 	setPass(pass);
	// }, [length, withNum, withChar, setPass]);

	// useEffect(() => {
	// 	let showPass = '';
	// 	let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	// 	if (withNum) return (str += '0123456789');
	// 	if (withChar) return (str += '!@$%^&*()+=?><"`|');

	// 	// for (let i = 0; i < 6; i++) {
	// 	// 	const char = Math.floor(Math.random() * length + 1);
	// 	// 	showPass += str.charAt(char);
	// 	// }

	// 	setPass(showPass);
	// }, [withNum, withChar]);

	return (
		<>
			<div className=' w-full flex justify-center flex-col items-center bg-stone-700 py-5 rounded-md'>
				<div className='w-full flex flex-row justify-center'>
					<input
						type='text'
						// value={pass}
						className=' w-3/4 outline-1 rounded-l-xl px-5 focus:outline-none w-8/12 h-11 text-lg text-black bg-blue-400 '
					/>
					<div className='bg-red-300 outline-none w-16 h-11 rounded-r-xl  cursor-pointer flex items-center justify-center'>
						Copy
					</div>
				</div>
				<div className='py-8 w-full flex flex-row justify-round'>
					<div className=' w-1/3'>
						<input
							min={6}
							max={40}
							onChange={handleChange}
							className=''
							type='range'
							value={length}
						/>
						<label className='text-2xl ml-3'>Length {length}</label>
					</div>

					<div className='flex items-center w-1/3'>
						<input
							checked={withNum}
							type='checkbox'
							className='w-8 h-8'
							onChange={setWithNum((prv) => !prv)}
						/>
						<label className='text-2xl ml-3'>With Number</label>
					</div>

					<div className='flex items-center w-1/3'>
						<input
							checked={withChar}
							type='checkbox'
							className='w-8 h-8'
							onChange={setWithChar((pev) => !pev)}
						/>
						<label className='text-2xl ml-3'>With Character</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
