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
      alignSelf: 'center',
      borderRadius: 4,
      backgroundColor: '#F9F9F9',
      width: '100%'
   },

   textStyle: {
      alignSelf: 'center',
      color: '#F9F9F9',
      fontSize: 16,
      fontWeight: '600',
      paddingBottom: 10,
      paddingTop: 10
   }
};

export { Button };
