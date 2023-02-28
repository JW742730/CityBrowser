import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link, NavigationContainer, StackActions } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Button from "./Button";
import * as WebBrowser from 'expo-web-browser';

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
      <Button info onPress={() => {{WebBrowser.openBrowserAsync("https://www.artic.edu/")}}}>
        More Information
      </Button>
        
    </View>
  )
}

function MilePage() {
  return(
    <View style={styles.container}>
      
      <Image source={milePicture} style={styles.placePictures} />
      <Button info onPress={() => {{WebBrowser.openBrowserAsync("https://www.themagnificentmile.com/")}}}>
        More Information
      </Button>  
    </View>
  )
}

function PierPage() {
  return(
    <View style={styles.container}>
      
      <Image source={pierPicture} style={styles.placePictures} />
      <Button info onPress={() => {{WebBrowser.openBrowserAsync("https://navypier.org/")}}}>
        More Information
      </Button>  
    </View>
  )
}

function WaterPage() {
  return(
    <View style={styles.container}>
      
      <Image source={waterPicture} style={styles.placePictures} />
      <Button info onPress={() => {{WebBrowser.openBrowserAsync("https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html")}}}>
        More Information
      </Button>  
    </View>
  )
}

function WillisPage() {
  return(
    <View style={styles.container}>
      
      <Image source={willisPicture} style={styles.placePictures} />
      <Button info onPress={() => {{WebBrowser.openBrowserAsync("https://www.willistower.com/")}}}>
        More Information
      </Button>  
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
    height: 360,
    width: 240,
    
  },
  Button: {
    marginTop: 20,
  }
});
