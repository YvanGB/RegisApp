import React, {useEffect, useState} from "react";
import { StyleSheet, View, Image,AsyncStorage, ActivityIndicator, Keyboard, Platform, Text, Pressable, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { Ionicons, Foundation } from '@expo/vector-icons';
import Toast from 'react-native-simple-toast'
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";
import { useNavigation } from "@react-navigation/native";
import app from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Connexion = () => {
  const navigation = useNavigation()

  const [user, setUser] = useState({
    email:'',
    password:''
  })

  const [userInfo, setUserInfo] = useState("")

  const [showIndicator, setShowIndicator] = useState(false)

  const auth = getAuth(app);
  const signInUser = (email, password) => {

    if(user.email !== "" && user.password !== ""){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUserInfo(user);
        Toast.show('Connexion réussie', Toast.LONG);
        setShowIndicator(false)
        navigation.navigate('MainPage')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      })
    }else{
      setTimeout(() => {
        Toast.show('Champs vides ou informations incorrectes', Toast.LONG)
        setShowIndicator(false)
      }, 1500);
    }

    
  };

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
                value={user.email}
                onChangeText={(val)=>setUser({...user, email:val})}
                style={styles.textInput}
              />
            </View>
            <View style={styles.fieldRect}>
              <Foundation name="key" size={24} color="#047FEE" />
              <TextInput 
                placeholder="Mot de passe"
                keyboardType='default'
                secureTextEntry
                value={user.password}
                onChangeText={(val)=>setUser({...user, password:val})}
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
        <TouchableOpacity onPress={()=>{
          setShowIndicator(true)
          signInUser(user.email, user.password)
          }} style={styles.button} >
          {
            showIndicator 
            ? <ActivityIndicator animating={showIndicator} color="white" />
            : <Text style={{color:'white'}}>Se connecter</Text>
          }
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
