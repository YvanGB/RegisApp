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
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Image />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Metier = () => {

  let metier = "Médecin"
  const img = require("../assets/med.png")

  const renderItem = ({ item }) => (
    <Item title={item.title} />
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
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:25, marginTop:'10%'}}>
        <Text style={{fontWeight:'700'}}>Liste des métiers</Text>
        <View style={{borderWidth:1, width:150, height:0, borderColor:'#DADADA', backgroundColor:'#DADADA'}} />
        <Ionicons name="md-search-outline" size={24} color="black" />
      </View>
      <View style={{paddingHorizontal:25}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
    paddingVertical:'10%',
    marginVertical:'3%',
    alignItems:'center',
    padding:'5%'
  }
})

export default Metier;
