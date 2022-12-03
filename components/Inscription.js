import React, {useState, useEffect} from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  View,
  Text,
  Image,
} from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";
import { Ionicons, Foundation } from '@expo/vector-icons';

const Inscription = () => {
  // const [prenomDropdownOpen, setPrenomDropdownOpen] = useState(false);
  // const [prenomDropdownValue, setPrenomDropdownValue] = useState(
  //   "Elève 2nde, Elève 1ère, Elève Tle, Parent d'élève, Visiteur"
  // );
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container}>
      <View>
        <Text style = {{color:'#047FEE', fontSize:22, fontWeight:'700'}}>Créez un compte,</Text>
        <Text style={{fontWeight:'500'}}>Inscrivez-vous pour commencer!</Text>
      </View>
      <View style={{alignSelf:'center', marginTop:'5%'}}>
        <Image source={require('../assets/login.png')} style={{width:150, height:150}} />
      </View>
      
        <View style={styles.form}>
            <View style={styles.fieldRect}>
              <Ionicons name="mail" size={24} color="#047FEE" />
              <TextInput 
                placeholder="Prenom"
                keyboardType='email-address'
                style={styles.textInput}
              />
            </View>
            <View style={styles.fieldRect}>
              <Foundation name="key" size={24} color="#047FEE" />
              <TextInput 
                placeholder="Profil"
                keyboardType="default"
                style={styles.textInput}
              />
            </View>
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
            <View style={styles.fieldRect}>
              <Foundation name="key" size={24} color="#047FEE" />
              <TextInput 
                placeholder="Mot de passe"
                keyboardType="default"
                style={styles.textInput}
              />
            </View>
        </View>
      
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Metier")} >
          <Text style={{color:'white'}}>S'inscrire</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', alignSelf:'center', marginTop:'5%'}}>
        <Text>Vous avez un compte? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
          <Text style={{color:'#047FEE', fontWeight:'500'}}>Se connecter</Text>
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
    paddingTop:15
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
    marginVertical:'4%',

  },
  form:{
    marginTop:'8%',
    marginHorizontal:'5%'
  },
  button:{
    backgroundColor:'#047FEE',
    borderRadius:10,
    paddingHorizontal:'37%',
    paddingVertical:'3%'
  },
  buttonView:{
    alignSelf:'center',
    marginTop:'7%'
  }
})

export default Inscription;
