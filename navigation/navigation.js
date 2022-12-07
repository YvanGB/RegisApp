import * as React from "react";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from '../components/PageAccueil';
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";
import Page from "../components/Page";
import Metier from "../components/Metier";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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
                    name="Metier"
                    component={Metier}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation;