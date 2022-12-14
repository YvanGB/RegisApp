import React, {useEffect, ef, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput, ScrollView, Animated, Modal, ActivityIndicator } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Feather, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-paper';
import Constants from "expo-constants";
import { getAuth, signOut } from "firebase/auth";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UserProfil = (props) =>{

    const auth = getAuth();
    const signout = () => signOut(auth).then(() => {
  // Sign-out successful.
    }).catch((error) => {
  // An error happened.
    });

    const CustomRightComponent = ()=>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('ModifProfil')}>
                <Text style={{color:"#047FEE", position:'absolute',bottom:0,right:0, fontSize:17}}>Modifier</Text>
            </TouchableOpacity>
        )
    }

    const CustomCenterComponent = () =>{
      return(
        <Text style={{position:'absolute',bottom:0, color:'#047FEE', fontSize:22, fontWeight:'700'}}>Profil</Text>
      )
    }

    const [email, setEmail] = useState("regis@gmail.com")
    const [eleve, setElve] = useState("élève")

    return(
        <View style={{flex:1,paddingTop: Constants.statusBarHeight, backgroundColor:'white'}}>
            <Header 
                centerComponent={() => <CustomCenterComponent />}
                rightComponent={()=> <CustomRightComponent /> }
                containerStyle={{
                    backgroundColor:'white',
                    borderBottomWidth:1,
                    borderBottomColor:'rgba(0,0,0,0.2)',
                    height:50
                }}
            />

                <View style={{flex:2,backgroundColor:'#047FEE', marginTop:'30%', borderRadius:20, alignItems:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center', alignSelf:'center', height:120, width:120, borderRadius:60, backgroundColor:'#C4C4C4', top:'-10%'}}>
                    </View>
                    <View style={{height:'10%', width:'85%', flexDirection:'row', backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center', marginBottom:'15%'}}>
                    <Ionicons name="mail" size={24} color="black" />
                        <Text style={{marginLeft:'2%', fontSize:16}}>{email}</Text>
                    </View>
                    <View style={{height:'10%', width:'85%', flexDirection:'row', backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                        <Entypo name="briefcase" size={24} color="black" />
                        <Text style={{marginLeft:'2%', fontSize:16}}>{eleve}</Text>
                    </View>                   
                    <View style={{marginTop:'10%',}}>
                        <TouchableOpacity onPress={()=>signout()} style={{flexDirection:'row', borderRadius:10, borderColor:'black', borderWidth:1, paddingVertical:'3%', paddingHorizontal:'15%'}}>
                            <Text style={{fontSize:15}}>Déconnexion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

const ModifProfil = (props)=>{

    const CustomLeftComponent = ()=>{
        return(
            <TouchableOpacity 
            onPress={()=>props.navigation.goBack()}
            style={{
                flexDirection:'row'
            }}>
                <Text style={{color:'#047FEE', fontSize:15}}>Annuler</Text>
            </TouchableOpacity>
        )
    }

    const CustomCenterComponent = ()=>{
        return(
                <Text style={{fontSize:15, fontWeight:'bold',}}>Modifier mon profil</Text>
        )
    }

    const CustomRightComponent = ()=>{
        return(

            <TouchableOpacity 
            onPress={()=>{
                setTimeout(() => {
                    props.navigation.goBack()
                }, 1500);
            }}
            >
                <Text style={[{fontSize:15}]}>Terminé</Text>
            </TouchableOpacity>
        )
    }

    

    return(
        <View style={{
            paddingTop: Constants.statusBarHeight,
            height:'100%',
            width:'100%',
            alignItems:'center',
            backgroundColor:'white'
        }}>
            <Header 
                leftComponent={()=>(<CustomLeftComponent />)}
                centerComponent={()=>(<CustomCenterComponent />)}
                rightComponent={()=>(<CustomRightComponent />)}
                containerStyle={{
                    backgroundColor:'white',
                    borderBottomWidth:1,
                    borderBottomColor:'rgba(0,0,0,0.2)'
                }}
            />
            <ScrollView>
                <View style={{
                    backgroundColor:'#EDECEC',
                    height:70,
                    width:320,
                    borderRadius:15,
                    marginTop:50,
                    paddingHorizontal:20
                }}>
                    <Text style={{fontSize:13,opacity:0.5, marginVertical:5, textAlignVertical:'top'}}>Prénoms</Text>
                    <TextInput />
                </View>

                <View style={{
                    backgroundColor:'#EDECEC',
                    height:70,
                    width:320,
                    borderRadius:15,
                    marginTop:30,
                    paddingHorizontal:20
                }}>
                    <Text style={{fontSize:13,opacity:0.5, marginVertical:5, textAlignVertical:'top'}}>Email</Text>
                    <TextInput />
                </View>


            </ScrollView>
        </View>
    )
}

const Stack = createNativeStackNavigator()
const ProfilStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="UserProfil"
                component={UserProfil}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ModifProfil"
                component={ModifProfil}
                options={{headerShown: false}}
            />
     
        </Stack.Navigator>
    )
}


export default ProfilStack;