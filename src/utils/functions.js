import {
  Platform,
  PixelRatio,
  Dimensions,
  StatusBar,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import DeviceInfo from 'react-native-device-info';
export default {

isIphoneX() {
  return (
      Platform.OS === 'ios' && DeviceInfo.hasNotch()
  );
},


getHeight(h){
    const elemHeight = parseFloat(h);
    return PixelRatio.roundToNearestPixel(height * elemHeight / 100);
  },

getWidth(w){
  const elemWidth = parseFloat(w);
  return PixelRatio.roundToNearestPixel(width * elemWidth / 100);
},

  getFontSize(font){
    const deviceHeight = this.isIphoneX()
    ? height * 0.9
    : Platform.OS === 'android' ? height - StatusBar.currentHeight : height;
    const deviceHeightPercent = font * deviceHeight / 100;
    return Math.round(deviceHeightPercent);
  },

  


};
