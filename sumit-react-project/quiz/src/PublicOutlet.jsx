import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from './AuthContext';
// import SingIn from './pages/Quiz';

// eslint-disable-next-line react/prop-types
const PrivateOutlet = () => {
	const { currentUser } = useAuth();

	return !currentUser ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateOutlet;
