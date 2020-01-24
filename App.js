import React from 'react';
import {View,Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity} from 'react-native'
import ViewPager from '@react-native-community/viewpager';

import {createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer'


import styles from './src/styles/style'

import detailScreen from './src/screens/detail'

const stackOption = (props) => {
  return {
    headerStyle : {
      backgroundColor: 'blue'
    },
    headerTitle : (
      <View style={styles.header}>
        <Text style={styles.title}>Title App</Text>
      </View>
    ),
    headerRight : (
      <TouchableOpacity style={styles.headerRightWrap} onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image style={styles.menuIcon} source={{uri:'https://img.icons8.com/metro/26/ffffff/menu.png'}}/>
      </TouchableOpacity>
    )
  }
}

function App(props) {
  return (
    <View style={styles.wrapper}>

      <View>
        <ViewPager showPageIndicator={true} style={styles.viewBanner} initialPage={0}>
          <View key="1">
            <Image style={styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
          </View>
          <View key="2">
            <Image style={styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
          </View>
          <View key="3">
            <Image style={styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
          </View>
        </ViewPager>
      </View>

      <ScrollView>

        <View style={[styles.container,styles.shadow]}>
          <Text style={styles.titleSection}>Package</Text>
          <ScrollView horizontal={true}>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={styles.boxPaket}>
              <TouchableOpacity onPress={()=>props.navigation.navigate("DetailPaket")}>
                <Text style={styles.textPaket}>Website</Text>
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={styles.boxPaket}>
              <Text style={styles.textPaket}>Website</Text>
            </ImageBackground>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={styles.boxPaket}>
              <Text style={styles.textPaket}>Website</Text>
            </ImageBackground>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={styles.boxPaket}>
              <Text style={styles.textPaket}>Website</Text>
            </ImageBackground>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={styles.boxPaket}>
              <Text style={styles.textPaket}>Website</Text>
            </ImageBackground>
          </ScrollView>
        </View>

        <View style={[styles.container, styles.shadow]}>
          <Text style={styles.titleSection}>Popular</Text>
          <ScrollView horizontal={true}>
            <View style={styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={styles.imgMateri}/>
              <Text style={styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={styles.wrapHarga}>
                <Text style={styles.hargaCoret}>Rp 100.000</Text>
                <Text style={styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={styles.imgMateri}/>
              <Text style={styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={styles.wrapHarga}>
                <Text style={styles.hargaCoret}>Rp 100.000</Text>
                <Text style={styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={styles.imgMateri}/>
              <Text style={styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={styles.wrapHarga}>
                <Text style={styles.hargaCoret}>Rp 100.000</Text>
                <Text style={styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={[styles.container, styles.shadow]}>
          <Text style={styles.titleSection}>New</Text>
          <ScrollView horizontal={true}>
          <View style={styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={styles.imgMateri}/>
              <Text style={styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={styles.wrapHarga}>
                <Text style={styles.hargaCoret}>Rp 100.000</Text>
                <Text style={styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={styles.imgMateri}/>
              <Text style={styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={styles.wrapHarga}>
                <Text style={styles.hargaCoret}>Rp 100.000</Text>
                <Text style={styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={styles.imgMateri}/>
              <Text style={styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={styles.wrapHarga}>
                <Text style={styles.hargaCoret}>Rp 100.000</Text>
                <Text style={styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>@copyright 2019</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const drawerNavigator = createDrawerNavigator({
  Home : {
    screen : createBottomTabNavigator({
      Home : {screen: App},
      DetailPaket : {screen: detailScreen}
    })
  },
  Paket : {
    screen:detailScreen
  }
})

const AppNavigator = createStackNavigator({
  Home : {
    screen : drawerNavigator,
    navigationOptions :stackOption
  },
  DetailPaket: {
    screen : detailScreen
  }
})


export default createAppContainer(AppNavigator);