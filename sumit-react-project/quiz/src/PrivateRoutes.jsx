import { Navigate } from 'react-router-dom';

import { useAuth } from './AuthContext';
// import SingIn from './pages/Quiz';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
	const { currentUser } = useAuth();
	!currentUser ? <Navigate to='/singin' /> : children;
};

export default PrivateRoute;
