import React, {useState, useEffect} from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Accueil = ({navigation}) =>{
  useEffect(() =>{
    setTimeout(() => {
      navigation.navigate('Page');
    }, 3000);
  });


  return(
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image 
          style={{
            flex:1,
            width:'100%',
            resizeMode:'center',
          }}
          source={require("../assets/MO5.png")}
        />
      </View>
    
      <View style={styles.textView}>
        <Text style={styles.text}>Apprends plus sur ton futur métier</Text>
        <Text style={styles.text}>maintenant!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DAEDFF'
  },
  imageView:{
    margin:'10%',
    marginTop:'35%',
    padding:'10%',
    width:'85%',
    height:'50%',
  },  
  textView:{
   flex:1,
   flexWrap:'wrap',
   top:'5%'
  },
  text:{
    fontWeight:'700',
    textAlign:'center'
  }
})

export default Accueil;