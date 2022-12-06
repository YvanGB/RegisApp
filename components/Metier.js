import * as React from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import {Foundation} from '@expo/vector-icons'
import Storylist from "./storylist/storylist";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants"
import { Ionicons } from '@expo/vector-icons';


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
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a5528ba',
    title: 'Développeur informatique',
    img: require('../assets/dev.png')
  },
  {
    id: '3ac68afc-c605-25d3-a4f8-fbd91aa97f63',
    title: 'Juge',
    img: require('../assets/lawyer.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557f559d72',
    title: 'Architecte',
    img: require('../assets/architect.png')
  },
];

const Item = ({ title, img }) => (
  <View style={styles.item}>
    <View style={{backgroundColor:'#fff', width:'40%', height:70, borderRadius:10, justifyContent:'center', alignItems:'center' }}>
      <Image source={img} style={{width:80, height: 70}} />
    </View>
    <View style={{position:'relative', left:'20%', flexShrink:1}}>
      <Text style={{alignSelf:'center', fontSize:15, fontWeight:'700'}}>{title}</Text>
    </View>
  </View>
);

const Metier = () => {

  let metier = "Médecin"
  const img = require("../assets/med.png")

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} />
  );

  return (
    <View style={styles.container}>
      <Storylist />
      <View style={{justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:'10%'}}>
        <View style={{backgroundColor:'#047FEE', width:330, height:155, borderRadius:20, alignItems:'center'}}>
          {
            metier == "Médecin" ? 
          <View style={{justifyContent:'center', flexDirection:'row'}}>
            <Image source={img} style={{width:70, height:150, zIndex:2, position:'relative', top:-25}} />
            <View style={{justifyContent:'center', position:'relative', left:'15%'}}>
              <Text style={{color:'white',fontSize:20, marginBottom:'10%'}}>Métier de la semaine: </Text>
              <Text style={styles.texteMetier}>{metier}</Text>
            </View>
          </View>
          :
          null
          }
        </View>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:15, marginTop:'10%'}}>
        <Text style={{fontWeight:'700'}}>Liste des métiers</Text>
        <View style={{borderWidth:1, width:150, height:0, borderColor:'#DADADA', backgroundColor:'#DADADA'}} />
        <Ionicons name="md-search-outline" size={24} color="black" />
      </View>
      <View style={{paddingHorizontal:15, marginTop:'2%', height:325,}}>
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

const styles = StyleSheet.create({
  container:{
    paddingTop: Constants.statusBarHeight
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

export default Metier;