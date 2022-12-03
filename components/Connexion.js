import React, {useEffect} from "react";
import { StyleSheet, View, Image, Keyboard, Platform, Text, Pressable, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { Ionicons, Foundation } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";
import { useNavigation } from "@react-navigation/native";

const Connexion = () => {
  const navigation = useNavigation()

useEffect( () =>{
  console.log(navigation);
},[])
  return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container}>
      <View>
        <Text style = {{color:'#047FEE', fontSize:22, fontWeight:'700'}}>Bienvenue,</Text>
        <Text style={{fontWeight:'500'}}>Connectez-vous pour continuer!</Text>
      </View>
      <View style={{alignSelf:'center', marginTop:'10%'}}>
        <Image source={require('../assets/login.png')} style={{width:200, height:200}} />
      </View>
      
        <View style={styles.form}>
            <View style={styles.fieldRect}>
              <Ionicons name="mail" size={24} color="#047FEE" />
              <TextInput 
                placeholder="Email"
                keyboardType='email-address'
                style={styles.textInput}
              />
            </View>
            <View style={styles.fieldRect}>
              <Foundation name="key" size={24} color="#047FEE" />
              <TextInput 
                placeholder="Mot de passe"
                keyboardType="default"
                style={styles.textInput}
              />
            </View>
        </View>
      
      <View style={{alignSelf:'flex-end', marginRight:'5%'}}>
        <TouchableOpacity>
          <Text style={{fontWeight:'400'}}>Mot de passe oublié?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} >
          <Text style={{color:'white'}}>Se connecter</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', alignSelf:'center', marginTop:'15%'}}>
        <Text>Pas encore de compte? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
          <Text style={{color:'#047FEE', fontWeight:'500'}}>S'inscrire</Text>
        </TouchableOpacity>
      </View>

    </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:15,
    paddingTop:20
  },
  textInput:{
    width:'80%',
    height:'100%',
    paddingLeft:'3%',
  },
  fieldRect:{
    borderWidth:1,
    borderColor:"#161616",
    borderRadius:10,
    flexDirection:'row',
    height:40,
    alignItems:'center',
    paddingLeft:'4%',
    marginVertical:'3%',

  },
  form:{
    marginTop:'15%',
    marginHorizontal:'5%'
  },
  button:{
    backgroundColor:'#047FEE',
    borderRadius:10,
    paddingHorizontal:'33%',
    paddingVertical:'3%'
  },
  buttonView:{
    alignSelf:'center',
    marginTop:'15%'
  }
})
export default Connexion;
