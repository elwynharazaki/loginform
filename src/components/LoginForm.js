import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {

	state = { login: true, email: '', password: '' };

   touchablePressed() {
      this.setState({ login: !this.state.login });
   }

   authFirebase() {
      const { email, login, password } = this.state;
      
      if (login) {
         firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.setState('SUCCESS'))
            .catch((error) => this.setState('FAILED', error));
      } else {
         firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => this.setState('SIGNUP SUCCESS'))
            .catch((error) => this.setState('SIGNUP FAILED', error));
      }
   }

   renderPhone() {
      if (!this.state.login) {
         return (
            <CardSection>
               <Input text='Phone' placeholder='0812345678' />
            </CardSection>
         );
      }
   }

   render() {
      const { textStyle, viewStyle } = styles;

      return (
         <Card>
            <CardSection>
               <Input
                  text='email'
                  placeholder='name@email.com'
                  textChanged={(text) => this.setState({ email: text })}
                  secured
               />
            </CardSection>

            <CardSection>
               <Input
                  text='password'
                  placeholder='password'
                  textChanged={(text) => this.setState({ password: text })}
                  secured
               />
            </CardSection>
				
				{this.renderPhone()}

            <CardSection>
               <Button
                  backgroundColor='#A1A1A1'
                  buttonPressed={this.authFirebase.bind(this)}
					>
                  {this.state.login ? 'Login' : 'Signup'}
               </Button>
            </CardSection>

            <CardSection>
               <View style={viewStyle}>
                  <TouchableOpacity onPress={this.touchablePressed.bind(this)}>
							<Text>Or, {this.state.login ? 'Signup' : 'Login'}</Text>
                  </TouchableOpacity>
               </View>
            </CardSection>
         </Card>
      );
   }
}

const styles = {
   viewStyle: {
      alignItems: 'center',
      flex: 1
   },

   textStyle: {
      color: '#F4F4F4',
      fontSize: 20,
      padding: 2
   }
};

export default LoginForm;
