/* @flow */

import React, { useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ToastAndroid,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

import functions from '../utils/functions';
import Header from '../components/elements/custom-components/Header'
import CustomButton from '../components/elements/custom-components/CustomButton';
import { SliderBox } from "react-native-image-slider-box";
import Tooltip from 'react-native-walkthrough-tooltip';


 const loremIpsum = "Lorem Ipsem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been in";

 const loremIpsumFull = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.";


export default function MyComponent({ navigation }) {
  const [toolTipVisible, settoolTipVisible] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [searchKey, setSearchKey] = useState('Tee');
  const [seeMoreText, setSeeMoreText] = useState('See More')

  const [images, setImages] = useState([
    require('../../assets/images/ic_shirt_1.jpeg'),
    require('../../assets/images/image_2.jpeg'),
    require('../../assets/images/image_3.webp'),
    require('../../assets/images/ic_image_user.jpeg'),
    require('../../assets/images/other.jpeg'),
  ])
  const ImageClick = () =>{
    notifyMsg("Back Button Press ");
  }

  const onChangeText = (text) => {
    notifyMsg("Back Button ");
  }

  /**
   * Pressing on See more
   */
  const onPressSeeMore = () => {

    seeMore ? setSeeMoreText("See More.") : setSeeMoreText("Less.")
    seeMore ? setSeeMore(false) : setSeeMore(true);

  }

  const notifyMsg = (Msg) => {
    ToastAndroid.show(Msg, ToastAndroid.SHORT);
  }

  /**
   * OnClicking of Carousal Images
   */

  const carousalImagePressed = (index) => {
    //Alert.alert("Info", "You click on Image Index " + index + ". Thanks");
    navigation.navigate("ImagesPreviewScreen", {productsImages : images, images_index: index});

  }

  /**
   * Posts Ads Fucntions
   */
  const postAds = () => {
    Alert.alert("Info","Coming Soon Feature.");
  }

  const renderImageText = (title, ImageSRC, isBold) => {
    return  <View style={{flexDirection: 'row',}}>
    <Text style={{fontSize: 15, fontWeight: isBold ? 'bold' : 'normal'}}> {title} </Text>
    <Image
    style={{width: 15, height: 15, padding: 5, alignSelf: 'center', marginLeft: 5}}
    resizeMode={'contain'}
    source={ImageSRC}
   />

    </View>
  }

    return (

      <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff' }}
      >
      <ScrollView
      style={{flex: 1, backgroundColor: '#fff' }}
      >
      <View style={{flexDirection: 'column',}}>


          {/*Top Header Custom*/}
        <Header
            title={"Breakout"}
            imageSRC={require('../../assets/images/Vector.png')}
            backGroundColor={'#416EB2'}
            textStyle={styles.textStyle}
            ImageStyle={styles.ImageStyle}
            onPress={()=> ImageClick()}
        />


        <View style={{marginLeft: 20, marginRight: 20, flexDirection: 'column'}}>
          <Text style={styles.textHeading}> Target </Text>
          {/* Custom Input Texts */}

        <View style={{flexDirection: 'column',}}>

        <View
          style={[styles.input, {flexDirection: 'row', justifyContent: 'space-between', height : 55}]}
          >
          <Text style={{fontSize: 15, fontWeight: 'bold'}}> Specific Items </Text>
          <Image
            style={{width: 15, height: 15, padding: 5, alignSelf: 'center'}}
            resizeMode={'contain'}
            source={require('../../assets/images/Vector_1.png')}
          />
          </View>
            <Text style={{color: '#416EB2' ,position: 'absolute', marginLeft: 25, backgroundColor: '#fff'}}> Target Type </Text>
        </View>


          {/* Second View */}

         <View style={{flexDirection: 'column', marginTop: 10}}>

        <View
          style={[styles.input, {flexDirection: 'row', justifyContent: 'space-between'}]}
          >

          <TextInput
            placeholder={"Search Product"}
            style={{ height: 40, width: '100%', fontSize: 15 }}
            value={searchKey}
            onChangeText={text => setSearchKey(text)}
          />

          </View>
            <Text style={{fontSize: 15 ,color: '#416EB2' ,position: 'absolute', marginLeft: 25, backgroundColor: '#fff'}}> Search Product </Text>
        </View>

        {/* Third VIew Row */}

      <View style={{flexDirection: 'column', marginTop: 10}}>

        <View
          style={[{flexDirection: 'row',  borderColor: '#416EB2', justifyContent: 'space-between',
          borderRadius: 5,
          padding: 10,
          borderWidth: 1
        }]}
        >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 35, height: 45, borderRadius: 15 , padding: 5,borderWidth: 1 ,alignSelf: 'flex-end'}}
            resizeMode={'contain'}
            source={require('../../assets/images/ic_image_user.jpeg')}
          />
            <Text style={{fontSize: 18, marginLeft: 15, color: '#000', fontWeight: 'bold'}}>
               Super Soft Tee
               </Text>
          </View>


            <Image
            style={{width: 25, height: 25,marginRight: 10 ,padding: 5,alignSelf: 'center'}}
            resizeMode={'contain'}
            source={require('../../assets/images/del.png')}
          />

        </View>
      </View>


        {/* Preview Row */}

        <View style={{flexDirection: 'column', marginTop: 10}}>
         <View style={{flexDirection: 'row', marginBottom: 10}}>
         <Text style={{fontSize: 23, color: '#000', fontWeight: 'bold'}}>
               Preview
          </Text>

<Tooltip
  isVisible={toolTipVisible}
  content={<Text>Here is the Preview of the product.</Text>}
  placement="top"
  onClose={() => settoolTipVisible(false)}
>
  <TouchableOpacity
    onPress={()=> settoolTipVisible(true)}
    style={{marginTop: 5}}
    >
    <Image
            style={{width: 25, height: 25,marginRight: 10, marginLeft: 10 ,padding: 5,alignSelf: 'center'}}
            resizeMode={'contain'}
            source={require('../../assets/images/Union.png')}
          />
  </TouchableOpacity>
</Tooltip>
         </View>

          {/*Second row*/}
          <View style={{borderWidth: 1, borderColor: '#416EB2'}}>

            <View style={{flexDirection: 'row'}}>

             <Image
              style={{width: 35, height: 35, borderRadius: 30 ,marginRight: 10, marginLeft: 10 ,padding: 5,alignSelf: 'center'}}
              resizeMode={'contain'}
              source={require('../../assets/images/ic_breakout.png')}
             />
              <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
               Breakout
              </Text>
              <Text style={{fontSize: 12, color: '#000'}}>
                  Preview
              </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>

            <Text style={{fontSize: 15,color: '#000', width: '80%', marginLeft: 15}}>
             {seeMore ? loremIpsumFull : loremIpsum + " ..."}

             <TouchableOpacity onPress={()=> onPressSeeMore()} style={{alignSelf: 'center', alignContent: 'center', paddingBottom: -10}}>
               <Text style={{color: '#8cdbbe',alignSelf: 'center',}}> {seeMoreText} </Text>
             </TouchableOpacity>
             </Text>

              <Image
              style={{width: 20, height: 20, padding: 5, marginRight: 10}}
              resizeMode={'contain'}
              source={require('../../assets/images/Vector_edit.png')}
             />
            </View>

            {/*Image Preview */}

          <View style={styles.container}>

        <SliderBox
          images={images}
          sliderBoxHeight={350}
          onCurrentImagePressed={index => carousalImagePressed(index)}
          dotColor="#416EB2"
          inactiveDotColor="#E9E9F0"
          paginationBoxVerticalPadding={20}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)"
          }}
          ImageComponentStyle={{ width: '89%', marginRight: 40 , borderWidth: 8, marginTop: 5}}
          imageLoadingColor="#2196F3"
        />

        <View style={{flexDirection: 'row',marginTop: 10, width: '100%' ,justifyContent: 'space-between', position: 'absolute'}}>
             <Image
              style={{width: 40, height: 40, padding: 5, marginLeft: 10}}
              resizeMode={'contain'}
              source={require('../../assets/images/Group_1045.png')}
             />

            <Image
              style={{width: 40, height: 40, padding: 5, marginRight: 10}}
              resizeMode={'contain'}
              source={require('../../assets/images/Group_1046.png')}
             />

              </View>

            </View>

            <View style={{flexDirection: 'row' , backgroundColor: '#E9E9F0', justifyContent: 'space-between'}}>

            <View style={{flexDirection: 'column',marginTop: 20  ,marginLeft: 10, marginBottom: 10}}>
              <Text> BREAKOUT.DUKAN.PK  </Text>

              {renderImageText("Headline", require('../../assets/images/Vector_edit.png'), true)}

              {renderImageText("Get up to 50% discount", require('../../assets/images/Vector_edit.png'), false)}


            </View>

            <View style={{marginTop: 20 ,flexDirection: 'column', marginRight: 10, justifyContent: 'center', marginBottom: 10}}>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 5, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}}>
                <View style={{flexDirection: 'row'}}>
                <Text>SHOP NOW</Text>
                <Image
              style={{width: 10, height: 10, padding: 5, alignSelf: 'center', marginLeft: 6}}
              resizeMode={'contain'}
              source={require('../../assets/images/Vector_1.png')}
             />

                </View>
              </TouchableOpacity>
            </View>


            </View>
          </View>

          {/*End of Main row*/}





        </View>

        <View style={{marginTop: 20}}>

  </View>

        <CustomButton
          customStyles={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          title={'Post Ad'}
          onPress={()=> postAds()}
              />
        </View>

      </View>
      </ScrollView>
      </SafeAreaView>

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10 ,
    backgroundColor: '#7DCAAE'
  },

  buttonTextStyle:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  textStyle:{
    color: '#fff',
    alignSelf: 'center' ,
    fontSize: 15,
  },
  image: {
    width: '100%',
    height: '80%',
    flex: 1
  },
  textHeading : {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000'
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderColor: '#416EB2',
    borderRadius: 5
  },
  ImageStyle:{
    width: 20,
    height: 20,
    marginRight: 20,
    marginLeft: 15,

  },
  button: {
    marginBottom: 20,
    backgroundColor: '#FBD638',
    width: functions.getWidth(50),
    height: functions.getWidth(15),
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: functions.getWidth(10)
  },
  picker: {
    height: 0,
    opacity: 0,
  },
  textViewStyle:{
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'flex-start',
    margin: 10,
    borderRadius: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  }


});
