import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';

import app from './firebase';

const AuthContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
	return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState('');

	const auth = getAuth(app);

	useEffect(() => {
		return onAuthStateChanged(auth, (user) => {
			setCurrentUser(user), setLoading(false);
		});
	}, []);

	//singup function
	async function singup(email, password, username) {
		await createUserWithEmailAndPassword(auth, email, password);
		//update profile
		await updateProfile(auth.currentUser, {
			displayName: username,
		});
		setCurrentUser(auth.currentUser);
	}

	//singin functions
	function singin(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	//logout function
	function logout() {
		signOut(auth);
	}

	const value = {
		currentUser,
		singup,
		singin,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
