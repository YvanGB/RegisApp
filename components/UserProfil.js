import React, {useEffect, ef, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput, ScrollView, Animated, Modal, ActivityIndicator } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Feather, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-paper';
;

const UserProfil = (props) =>{

    const CustomRightComponent = ()=>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('ModifProfil')}>
                <Text style={{color:"#047FEE", fontSize:17}}>Modifier</Text>
            </TouchableOpacity>
        )
    }

    const CustomCenterComponent = () =>{
      return(
        <Text style={{color:'#047FEE', fontSize:22, fontWeight:'700'}}>Profil</Text>
      )
    }

    return(
        <View style={{height:'100%', width:'100%', backgroundColor:'white'}}>
            <Header 
                centerComponent={() => <CustomCenterComponent />}
                rightComponent={()=> <CustomRightComponent /> }
                containerStyle={{
                    backgroundColor:'white',
                    borderBottomWidth:1,
                    borderBottomColor:'rgba(0,0,0,0.2)',
                    paddingVertical:15
                }}
            />

                <View style={{height:'75%',backgroundColor:'#047FEE', marginTop:'30%', borderRadius:20, alignItems:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center', alignSelf:'center', height:120, width:120, borderRadius:60, backgroundColor:'#C4C4C4', top:'-10%'}}>
                    </View>
                    <View>
                        <Text style={{alignSelf:'center', color:'white', fontSize:18}}></Text>
                    </View>
                    <View style={{height:'10%', width:'85%', flexDirection:'row', backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center', marginBottom:'15%'}}>
                        <Text style={{marginLeft:'2%'}}></Text>
                    </View>
                    <View style={{height:'10%', width:'85%', flexDirection:'row', backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{marginLeft:'2%'}}></Text>
                    </View>                   
                    <View style={{marginTop:'10%',}}>
                        <TouchableOpacity style={{flexDirection:'row', borderRadius:10, borderColor:'black', borderWidth:1, paddingVertical:'3%', paddingHorizontal:'15%'}}>
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
            flex:1,
            width: WIDTH,
            height: HEIGHT,
            alignItems:'center',
            paddingVertical:30,
            backgroundColor:'white'
        }}>
            <Header 
                leftComponent={()=>(<CustomLeftComponent />)}
                centerComponent={()=>(<CustomCenterComponent />)}
                rightComponent={()=>(<CustomRightComponent />)}
                containerStyle={{
                    backgroundColor:'white',
                    top:-20,
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
                    <Text style={{fontSize:13,opacity:0.5, marginVertical:5, textAlignVertical:'top'}}></Text>
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
                    <Text style={{fontSize:13,opacity:0.5, marginVertical:5, textAlignVertical:'top'}}>Pr</Text>
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
                    <Text style={{fontSize:13,opacity:0.5, marginVertical:5, textAlignVertical:'top'}}>Téléphone</Text>
                    <TextInput value={tel} onChangeText={(val) => setTel(val)} keyboardType='phone-pad' />
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