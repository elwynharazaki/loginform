import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBiifMrfoNsg6-kmoFjTwYaGca4gizGcmQ',
			authDomain: 'loginform-d65c7.firebaseapp.com',
			databaseURL: 'https://loginform-d65c7.firebaseio.com',
			projectId: 'loginform-d65c7',
			storageBucket: 'loginform-d65c7.appspot.com',
			messagingSenderId: '828500322165'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<View>
				<Header />
					<LoginForm />
			</View>
		);
	}
}

export default App;
