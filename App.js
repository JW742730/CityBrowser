import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const artPicture = require("./assets/art.png");
const milePicture = require("./assets/mile.png");
const pierPicture = require("./assets/pier.png");
const waterPicture = require("./assets/water.png");
const willisPicture = require("./assets/willis.png");

function ArtPage() {
  return(
    <View style={styles.container}>
      
      <Image source={artPicture} style={styles.placePictures} />
        
    </View>
  )
}

function MilePage() {
  return(
    <View style={styles.container}>
      
      <Image source={milePicture} style={styles.placePictures} />
        
    </View>
  )
}

function PierPage() {
  return(
    <View style={styles.container}>
      
      <Image source={pierPicture} style={styles.placePictures} />
        
    </View>
  )
}

function WaterPage() {
  return(
    <View style={styles.container}>
      
      <Image source={waterPicture} style={styles.placePictures} />
        
    </View>
  )
}

function WillisPage() {
  return(
    <View style={styles.container}>
      
      <Image source={willisPicture} style={styles.placePictures} />
        
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Art Institute of Chicago'
        screenOptions={{
          headerTintColor: "#000000",
        }}
      >
        <Drawer.Screen
          name="Art Institute of Chicago"
          component={ArtPage} 
        />
        <Drawer.Screen
          name="Magnificent Mile"
          component={MilePage} 
        />
        <Drawer.Screen
          name="Navy Pier"
          component={PierPage} 
        />
        <Drawer.Screen
          name="Water Tower"
          component={WaterPage} 
        />
        <Drawer.Screen
          name="Willis Tower"
          component={WillisPage} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placePictures: {
    height: 480,
    width: 320,
    
  }
});
