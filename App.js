import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyCqp79BKDwR3zBg26K58u1GDl6bhX2b4LE',
			authDomain: 'react-native-firebase-au-b3836.firebaseapp.com',
			databaseURL: 'https://react-native-firebase-au-b3836.firebaseio.com',
			projectId: 'react-native-firebase-au-b3836',
			storageBucket: 'react-native-firebase-au-b3836.appspot.com',
			messagingSenderId: '137894412922'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<View>
				<Header title='Firebase Auth' />
					<LoginForm />
			</View>
		);
	}
}

export default App;
