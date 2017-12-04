import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import firebase from 'firebase';

import config from './secret/firebaseconfig';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(config);
	}

	render() {
		return (
			<View>
            <StatusBar
               barStyle='default'
               backgroundColor='transparent'
               translucent
            />
				<Header />
				<LoginForm />
			</View>
		);
	}
}

export default App;
