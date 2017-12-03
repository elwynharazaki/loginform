import React, { Component } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {

	state = {
      login: true,
      email: '',
      loading: false,
      loggedIn: '',
      message: '',
      password: '' };

   authFirebase() {
      const { email, login, password } = this.state;
      this.setState({ loading: true, message: '' });
      
      if (login) {
         firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.setState({
               loading: false,
               loggedIn: true,
               message: 'LOGIN SUCCESS'
            }))
            .catch((error) => this.setState({
               loading: false,
               loggedIn: false,
               message: error.message
            }));
      } else {
         firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => this.setState({
               loading: false,
               loggedIn: true,
               message: 'SIGNUP SUCCESS'
            }))
            .catch((error) => this.setState({
               loading: false,
               loggedIn: false,
               message: error.message
            }));
      }
   }

   buttonPressed() {
      this.setState({ login: !this.state.login });
   }

   renderMessage() {
      if (this.state.message) {
         if (this.state.loggedIn) {
            return (
               <CardSection>
                  <Text>{this.state.message}</Text>
               </CardSection>
            );
         }
         return (
            <CardSection>
               <Text>{this.state.message}</Text>
            </CardSection>
         );
      }
   }

   renderLoading() {
      if (this.state.loading) {
         return (
            <ActivityIndicator
               style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
               size='large'
            />
         );
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
                  underlineColorAndroid='transparent'
                  textChanged={(text) => this.setState({ email: text })}
               />
            </CardSection>

            <CardSection>
               <Input
                  text='password'
                  placeholder='password'
                  underlineColorAndroid='transparent'
                  textChanged={(text) => this.setState({ password: text })}
                  hidden
               />
            </CardSection>

            {this.renderPhone()}
            {this.renderMessage()}
            
            <CardSection>
               {this.renderLoading()}
            </CardSection>

            <CardSection>
               <Button
                  backgroundColor='#A1A1A1'
                  buttonPressed={this.authFirebase.bind(this)}
               >
                  {this.state.login ? 'LOGIN' : 'SIGNUP'}
               </Button>
            </CardSection>

            <CardSection>
               <View style={viewStyle}>
                  <TouchableOpacity onPress={this.buttonPressed.bind(this)}>
							<Text>OR {this.state.login ? 'SIGNUP' : 'LOGIN'}</Text>
                  </TouchableOpacity>
               </View>
            </CardSection>
         </Card>
      );
   }
}

const styles = {
   textStyle: {
      color: '#F4F4F4',
      fontSize: 20,
      padding: 2
   },

   viewStyle: {
      alignItems: 'center',
      flex: 1
   }
};

export default LoginForm;
