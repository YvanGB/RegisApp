import React,{useState} from "react";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from '../components/PageAccueil';
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";
import Page from "../components/Page";
import Metier from "../components/Metier";
import UserProfil from "../components/UserProfil";
import Favoris from "../components/Favoris";
// import MyStory from "../components/MyStory";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, Fontisto, FontAwesome5, Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Stack = createNativeStackNavigator ();

const StackAuth = () => {
    return (
      <Stack.Navigator initialRouteName='Connexion'>
        {/* <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Connexion"
          component={Connexion}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  
    )
  
  }

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const [icon1, setPress1] = useState(true);
    const [icon2, setPress2] = useState(false);
    const [icon3, setPress3] = useState(false);
    return(
        <Tab.Navigator 
            initialRouteName="Metier" 
            screenOptions={({route}) =>({
                tabBarActiveTintColor:"#047FEE",
                tabBarInactiveTintColor:'gray',
                tabBarShowLabel:false,
                tabBarIcon:({color}) =>{
                    if(route.name === "Metier"){
                       return (<Foundation name="home" size={24} color={color} />)   
                    };;
                    if(route.name === "Profil"){
                       return (<FontAwesome5 name="user" size={24} color={color} />)
                    }
                    if(route.name === "Favoris"){
                       return (<Feather name="bookmark" size={24} color={color}/>)
                    }
                },
                header:()=>null,
                tabBarStyle:{
                    borderRadius:20 ,
                    borderWidth:1,
                    borderColor:'white',
                    bottom:4,
                    position:'absolute',
                    left:50,
                    right:50,
                    elevation:0
                },
            })}
        >         
            <Tab.Screen name="Profil" component={UserProfil} />
            <Tab.Screen name="Metier" component={Metier} />
            <Tab.Screen name="Favoris" component={Favoris} />
        </Tab.Navigator>
    )
}
  
const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Accueil"
            >
                <Stack.Screen 
                    name="Accueil" 
                    component={Accueil} 
                    options={{
                        header:()=>{},
                    }}
                />

                <Stack.Screen
                    name="Page"
                    component={Page}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Connexion"
                    component={Connexion}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Inscription"
                    component={Inscription}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="MainPage"
                    component={Tabs}
                    options={{ headerShown: false, }}
                />

                {/* <Stack.Screen 
                    name="MyStory"
                    component={MyStory}
                    options={{headerShow:false}}
                /> */}
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation;