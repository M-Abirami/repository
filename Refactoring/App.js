
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, Dimensions, ImageBackground } from 'react-native';
import AppText from './app/color/components/AppText';
import color from './app/color/config'


export default function App() {

   
  return (
    <SafeAreaView style={styles.container}>
      <AppText>welcome</AppText>
      {/* <AppText str='welcome'></AppText>  */}
  </SafeAreaView>
    );
  }
    
   
//styles for components
const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:color.primary,
   alignItems:'center',
   justifyContent:'flex-start',
   padding: Platform.OS==='android'?100:0
 } 
});
