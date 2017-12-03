import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
   const { textStyle, headerStyle } = styles;

   return (
      <View style={headerStyle}>
         <Text style={textStyle}>{props.title}</Text>
      </View>
   );
};

const styles = {
   headerStyle: {
      alignItems: 'center',
      backgroundColor: '#444444',
      elevation: 2,
      shadowColor: '#083861',
      shadowOpacity: 0.9
   },

   textStyle: {
      color: '#F9F9F9',
      fontSize: 25,
      padding: 5
   }
};

export { Header };
