import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
   const { buttonStyle, textStyle } = styles;

   return (
      <TouchableOpacity style={{ ...buttonStyle, backgroundColor: props.backgroundColor || '#444444' }}
         onPress={props.buttonPressed}>
         <Text style={textStyle}>{props.children}</Text>
      </TouchableOpacity>
   );
};

const styles = {
   buttonStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
      borderRadius: 4,
      color: '#F9F9F9',
      flex: 1,
      fontSize: 15,
      padding: 2
   },

   textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingBottom: 10,
      paddingTop: 10
   }
};

export { Button };
