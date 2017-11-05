import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = (props) => {
   const { containerStyle, inputStyle, labelStyle } = styles;
   const { hidden, placeholder, text, textChanged } = props;
   
   return (
      <View style={containerStyle}>
         <Text style={labelStyle}>{text}</Text>
            <TextInput 
               style={inputStyle}
               placeholder={placeholder}
               onChangeText={textChanged}
               secureTextEntry={hidden}
            />
      </View>
   );
};

const styles = {
   containerStyle: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      height: 50
   },

   labelStyle: {
      flex: 1,
      fontSize: 18,
      paddingLeft: 20
   },

   inputStyle: {
      color: '#999999',
      flex: 2,
      fontSize: 18,
      lineHeight: 20,
      paddingRight: 5,
      paddingLeft: 5
   }
};

export { Input };
