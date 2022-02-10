import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View, ViewStyle, Image, ImageURISource } from 'react-native';
import functions from '../../../utils/functions';

interface Props {

    onPress: () => void;
    textStyle: ViewStyle;
    customStyles?: ViewStyle
    title?: string
    backGroundColor?: string,

  }

  function CustomButton({  customStyles, onPress, title, backGroundColor, textStyle }: Props) {

    return <View>
    <TouchableOpacity
        onPress={()=> onPress()}
        style={customStyles}
    >
       <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>

  </View>

  }


  const stylesdefault = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems:'center'
    },
    withIcon: {
      marginLeft: 10
    }
  })



  export default CustomButton;
