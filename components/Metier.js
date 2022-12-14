import React, {useEffect, useState} from "react";
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import {Foundation} from '@expo/vector-icons'
import Storylist from "./storylist/storylist";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants"
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Video, AVPlaybackStatus } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { Header } from 'react-native-elements';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Développeur informatique',
    img: require('../assets/dev.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Juge',
    img: require('../assets/lawyer.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Architecte',
    img: require('../assets/architect.png')
  },
  {
    id: '5869440f-3da1-571f-bd96-142371e29d72',
    title: 'Architecte',
    img: require('../assets/architect.png')
  },
  
];

const Item = ({ title, img }) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <View style={{backgroundColor:'#fff', width:'40%', height:70, borderRadius:10, justifyContent:'center', alignItems:'center' }}>
        <Image source={img} style={{width:80, height: 70}} />
      </View>
      <View style={{position:'relative', left:'20%', flexShrink:1}}>
        <Text style={{alignSelf:'center', fontSize:15, fontWeight:'700'}}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Metier = () => {

  const navigation = useNavigation()

  let metier = "Médecin"
  const img = "https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/med.png?alt=media&token=2dbcd6db-e8c5-4f68-b9ba-b579162797d6"

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} />
  );

  return (
    <View style={styles.container}>
      <Image style={{width:170, height:120, alignSelf:'center', top:'-2.%'}} source={require("../assets/MO5.png")} />
      <Storylist />
      <View style={{justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:'8%'}}>
        <View style={{backgroundColor:'#047FEE', width:330, height:155, borderRadius:20, alignItems:'center'}}>
          {
            metier == "Médecin" ? 
            <TouchableOpacity onPress={()=> navigation.navigate("FicheMetier", {story: Storylist})}>
                <View style={{justifyContent:'center', flexDirection:'row'}}>
                  <Image source={{uri:img}} style={{width:70, height:150, zIndex:2, position:'relative', top:-25}} />
                  <View style={{justifyContent:'center', position:'relative', left:'15%'}}>
                    <Text style={{color:'white',fontSize:20, marginBottom:'10%'}}>Métier de la semaine: </Text>
                    <Text style={styles.texteMetier}>{metier}</Text>
                  </View>
                </View>
              </TouchableOpacity>
          :
          null
          }
        </View>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:15, marginTop:'3%'}}>
        <Text style={{fontWeight:'700'}}>Liste des métiers</Text>
        <View style={{borderWidth:1, width:150, height:0, borderColor:'#DADADA', backgroundColor:'#DADADA'}} />
        <TouchableOpacity>
          <Ionicons name="md-search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal:15, marginTop:'0%', height:330,}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const FicheMetier = ({route}) =>{
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const navigation = useNavigation();
  const [favoris, setFavoris] = useState(false)
  const lesFavoris = collection(db, "favoris")
  const img = "https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/med.png?alt=media&token=2dbcd6db-e8c5-4f68-b9ba-b579162797d6"

  useEffect(() =>{
    console.log(route.params)
  },[])

  const Story = route.params.story;

  const addToFavorite = async () => {
    await addDoc(lesFavoris, {
        image: img,
        metier:"Médecin",
    })
  }
  return(
    <View style={styles.ficheContainer}>
      <StatusBar style='dark' />
      <Header 
        leftComponent={() =><TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="leftcircle" size={24} color="#047FEE" /></TouchableOpacity>}
        centerComponent={() => <Text style={{fontSize:23, color:'#047FEE', textAlign:'center', fontWeight:'700'}}>Médécine Générale</Text>}
        backgroundColor='white'
        containerStyle={{height:70, top:-15, paddingLeft:15}}
      />
      <View style={{marginTop:'12%'}}>
        <Story />
      </View>
      <View style={{flexDirection:'row', alignItems:'center', alignSelf:'center'}}>
        <Text style={{color:'#0A3251', fontSize:22}}>Vidéo complète </Text>
        <Text style={{color:'#0A3251', fontSize:12 }}>(disponible en fin de semaine)</Text>
      </View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/videorecap.MP4?alt=media&token=547f0923-5610-4f07-9cb3-ccd625cb7793',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={{backgroundColor:"#7EEDF4", borderRadius:5, marginHorizontal:'5%', paddingVertical:'2%',marginTop:'2%', flexDirection:'row', justifyContent:'space-around', alignItems:'center' }}>
        <Text style={{color:'black'}}>
          {
            favoris 
              ? "Favoris"
              : "Ajouter au favoris"
          }
        </Text>
        
        <TouchableOpacity onPress={()=>{
          setFavoris(true)
          addToFavorite()
        }}>
          <Feather name="bookmark" size={24} color="#047FEE"/>
        </TouchableOpacity>
      </View>
      <ScrollView style={{paddingHorizontal:'3%', height:'35%'}}>
      <View>
        <View style={styles.texteView}>
          <Text style={styles.texteColor}>Université: </Text>
          <Text style={styles.notColorText}>Université d'Abomey-Calavi (UAC)</Text>
        </View>
        <View style={styles.texteView}>
          <Text style={styles.texteColor}>Ecole: </Text>
          <Text style={styles.notColorText}>Faculté des sciences de la santé</Text>
        </View>
        <View style={styles.texteView}>
          <Text style={styles.texteColor}>Mode d'entrée: </Text>
          <Text style={styles.notColorText}>Classement</Text>
        </View>
        <View style={styles.texteView}>
          <Text style={styles.texteColor}>Formation: </Text>
          <Text style={styles.notColorText}>7ans Doctorat</Text>
        </View>
        <View style={styles.texteView}>
          <Text style={styles.texteColor}>Débouchés: </Text>
          <Text style={styles.notColorText}>Médecin généraliste; possibilités de spécialisations dans un domaine spécifique en science de la santé</Text>
        </View>
        <View style={styles.texteView}>
          <Text style={styles.texteColor}>Baccalauréat recommandé: </Text>
          <Text style={styles.notColorText}>C,D</Text>
        </View>
        <View style={styles.texteView}>
          <Text style={styles.texteColor}>Matières: </Text>
          <Text style={styles.notColorText}>Maths, PCT, SVT</Text>
        </View>
        <View style={styles.texteView}>
          <Text style={styles.texteColor}>Bourse: </Text>
          <Text style={styles.notColorText}>Oui</Text>
        </View>
        </View>

        <View style={{alignSelf:'center'}}>
          <View style={{width:330, borderRadius:10, backgroundColor:"#E6E6E6", padding:15,}}>
            <Text style={{color:"#0B2E5E", fontSize:22, flexShrink:1, textAlign:'center', fontWeight:'700'}}>Calcul de la moyenne pour le classement</Text>
            <Text style={{fontSize:18, flexShrink:1, marginVertical:'10%', textAlign:'center', letterSpacing:0.5}}>M = (m1*x+m2*y+m3*z) /(x+y+z) avec M = Moyenne et m = matière x,y,z = coefficient de la matière dans la série</Text>
            <Text style={{fontSize:18, flexShrink:1, marginVertical:'10%', textAlign:'center', letterSpacing:1}}>Exemple 1 : Médecine Bac D; M =SVT*5+Math*4+ SPCT*4/ 13 </Text>
            <Text style={{fontSize:18, flexShrink:1, marginVertical:'10%', textAlign:'center', letterSpacing:1}}>Exemple 2 : Médecine Bac C; M =SVT*2+Math*6+ SPCT*5/ 13</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const Stack = createNativeStackNavigator();

const MetierStack = () =>{
  return(
    <Stack.Navigator initialRouteName="Metier" screenOptions={{header:()=>null}}>
      <Stack.Screen name="Metier" component={Metier} />
      <Stack.Screen name="FicheMetier" component={FicheMetier} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'white'
  },
  ficheContainer:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'white'
  },
  texteColor:{
    color:'#0B2E5E',
    fontSize:20,
    fontWeight:'700',
  },
  texteView:{
    alignItems:'center',
    flexDirection:'row',
    marginVertical:'3%',
    
  },
  notColorText:{
    fontSize:16,
    fontWeight:'500',
    marginTop:3,
    flexShrink:1,
  },
  video:{
    width:'90%',
    height:'25%',
    marginTop:'1%',
    alignSelf:'center',
    borderRadius:10
  },  
  texteMetier:{
    color:'#fff',
    fontWeight:'700',
    fontSize:35,
    textAlign:'center'
  },
  item:{
    flexDirection:'row',
    backgroundColor:"#DADADA",
    paddingVertical:'3%',
    marginVertical:'3%',
    alignItems:'center',
    padding:'3%',
    borderRadius:10,
  }
})

export default MetierStack;