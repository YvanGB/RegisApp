import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {Foundation} from '@expo/vector-icons'
import Storylist from "./storylist/storylist";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants"

const Metier = () => {
  return (
    <View style={styles.container}>
      <Storylist />
      <View style={{width:'100%', justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:'10%'}}>
        <Image 
          source={require('../assets/weekjob.png')}
          style={{width:'95%', height:215, borderRadius:20}}
        />
        <Text style={styles.texteMetier}>Médecin</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingTop: Constants.statusBarHeight
  },
  texteMetier:{
    position:'relative',
    left:'0%',
    bottom:'35%',
    color:'#fff',
    fontWeight:'700',
    fontSize:35
  }
})

export default Metier;
