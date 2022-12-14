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
import DropDownPicker from 'react-native-dropdown-picker';
import uuid from "react-native-uuid";
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from "@react-navigation/native";
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";
import { Ionicons, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {collection, addDoc} from "firebase/firestore"
import { db } from "../firebase";

const Inscription = () => {
  // const [prenomDropdownOpen, setPrenomDropdownOpen] = useState(false);
  // const [prenomDropdownValue, setPrenomDropdownValue] = useState(
  //   "Elève 2nde, Elève 1ère, Elève Tle, Parent d'élève, Visiteur"
  // );
  const utilisateurs = collection(db, "utilisateurs")

  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Elève 2nde', value: 'elv2e'},
    {label: 'Elève 1ère', value: 'elv1e'},
    {label: 'Elève Tle', value: 'elvtermo'},
    {label: 'Parent d\'Elève', value: 'parent'},
    {label: 'Visiteur', value: 'visiteur'},
    
  ]);

  const [showIndicator, setShowIndicator] = useState(false)

  const [userInfo, setUserInfo] = useState("")

  const [user, setUser] = useState({
    uid:'',
    prenom:'',
    profil:'',
    email:'',
    profil:value,
    password:'',
    confirm_password:''
  })

  const createUser = async () => {
    await addDoc(utilisateurs, {
        uid:uuid.v4(),
        prenom:user.prenom,
        email:user.email,
        profil:user.profil,
        password:user.password
    })
};


const auth = getAuth();
const createNewUser = (email,password) => {
    if(user.prenom !== "" || user.email !== "" || user.password !== "" || user.confirm_password !== ""){
      if(user.password === user.confirm_password){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const createdUser = userCredential.user;
          setUserInfo(createdUser);
          createUser();
          Toast.show('Inscription réussie. Bienvenue.', Toast.LONG);
          setShowIndicator(false)
          navigation.navigate('MainPage')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        })
      }else{
        setTimeout(() => {
          Toast.show('Les mots de passe ne correspondent pas.', Toast.LONG)
          setShowIndicator(false)
        }, 1500);
      }
      
    }else{
      setTimeout(() => {
        Toast.show('Au moins un champs vide', Toast.LONG)
        setShowIndicator(false)
      }, 1500);
    }
};

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
              <FontAwesome5 name="user-alt" size={22} color="#047FEE" />
              <TextInput 
                placeholder="Prenom"
                keyboardType='default'
                value={user.prenom}
                onChangeText={(val) => setUser({...user, prenom:val})}
                style={styles.textInput}
              />
            </View>
            <View style={[styles.fieldRect,{height:52}]}>
              <FontAwesome5 name="briefcase" size={24} color="#047FEE" />
              <DropDownPicker
                dropDownContainerStyle={{
                  backgroundColor: "#dfdfdf"
                }}
                dropDownDirection='TOP'
                listMode='FLATLIST'
                listItemContainerStyle={{backgroundColor:'white'}}          
                placeholder="Profil"
                style={{marginVertical:'4%', width:250, borderColor:'white'}}
                placeholderStyle={{color:'gray'}}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            <View style={styles.fieldRect}>
              <Ionicons name="mail" size={24} color="#047FEE" />
              <TextInput 
                placeholder="Email"
                keyboardType='email-address'
                value={user.email}
                onChangeText={(val) => setUser({...user, email:val})}
                style={styles.textInput}
              />
            </View>
            <View style={styles.fieldRect}>
              <Foundation name="key" size={24} color="#047FEE" />
              <TextInput 
                placeholder="Mot de passe"
                keyboardType="default"
                value={user.password}
                onChangeText={(val) => setUser({...user, password:val})}
                secureTextEntry
                style={styles.textInput}
              />
            </View>
            <View style={styles.fieldRect}>
              <Foundation name="key" size={24} color="#047FEE" />
              <TextInput 
                placeholder="Confirmer mot de passe"
                keyboardType="default"
                value={user.confirm_password}
                onChangeText={(val) => setUser({...user, confirm_password:val})}
                secureTextEntry
                style={styles.textInput}
              />
            </View>
        </View>
      
      <View style={styles.buttonView}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() =>{
            setShowIndicator(true)
            createNewUser(user.email, user.password)
          }} 
          >
            {
              showIndicator 
              ? <ActivityIndicator animating={showIndicator} color="white" />
              :<Text style={{color:'white'}}>S'inscrire</Text>
            } 
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
    paddingTop:15,
    backgroundColor:'white'
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
    height:52,
    alignItems:'center',
    paddingLeft:'4%',
    marginVertical:'4%',

  },
  profilRect:{
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
    marginTop:'3%',
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
    marginTop:'5%'
  }
})

export default Inscription;
