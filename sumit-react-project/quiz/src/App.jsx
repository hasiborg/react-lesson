import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
// import PrivateRoute from './PrivateRoutes';
import PrivateOutlet from './PrivateOutlet';
import PublicOutlet from './PublicOutlet';

import Nav from './components/nav/Nav';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Singin from './pages/Singin';
import Singup from './pages/Singup';

import './index.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Nav />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/*' element={<PublicOutlet />}>
							<Route path='singup' element={<Singup />} />
							<Route path='singin' element={<Singin />} />
						</Route>
						<Route path='/*' element={<PrivateOutlet />}>
							<Route path='quiz' element={<Quiz />} />
							<Route path='result' element={<Result />} />
						</Route>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
