import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View, ViewStyle, Image, ImageURISource } from 'react-native';
import functions from '../../../utils/functions';

interface Props {
    icon?: () => JSX.Element
    onPress: () => void;
    textStyle: ViewStyle;
    customStyles?: ViewStyle
    imageSRC?: ImageURISource
    title?: string
    backGroundColor?: string,
    ImageStyle?: ViewStyle

  }

  function Header({ ImageStyle, customStyles, icon, onPress, imageSRC, title, backGroundColor, textStyle }: Props) {

    return <View style={{flexDirection: 'row', backgroundColor: backGroundColor, height: functions.getHeight(7)
  }}>

      <TouchableOpacity
      style={{justifyContent: 'center'}}
      onPress={onPress}>

       <Image
          source={imageSRC}
          style={ImageStyle}
          resizeMode={"contain"}
      />
      </TouchableOpacity>
      <Text style={textStyle}>{title}</Text>
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



  export default Header;
