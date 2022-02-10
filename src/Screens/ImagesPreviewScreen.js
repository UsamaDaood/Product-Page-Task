import React, { useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,

} from 'react-native';
import ImageView from "react-native-image-viewing";

export default function ImagesPreviewScreen({ navigation, route }) {

    const images = route.params.productsImages;
    const images_index = route.params.images_index;

    const [visible, setIsVisible] = useState(true);

     /**
     * go Back
     *
     */
      const finish = () => {
        setIsVisible(false);
        console.log("okay preview ", images);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
         <ImageView
           images={images}
           imageIndex={images_index}
           visible={visible}
           onRequestClose={() => finish() }
   />
        </View>
       );





}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },



});