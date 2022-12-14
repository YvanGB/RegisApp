import React, { useEffect } from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';
import { Header } from 'react-native-elements';
import Constants from "expo-constants"
import { StatusBar } from 'expo-status-bar';
import { db } from '../firebase';
import { getDocs, getDoc, doc, collection, query, where} from "firebase/firestore";

const Favoris = ()=>{

    const mesFavoris = collection(db, "favoris")

    const favArray = []

    const getFavori = async () =>{
       
        const q = query(mesFavoris, where("metier", "==", "Médecin" ));    
        const favori = await getDocs(q)

        if(favori.size !== 0){
            favori.forEach(doc => {
                favArray.push(doc.data())
            });
        }

    }

    
    useEffect(() => {
        getFavori()
        
    }, [])
    
    return(
        <View style={styles.container}>
            <StatusBar style='dark' />
            <Header 
                centerComponent={() => <Text style={{color:"#047FEE", fontSize:20, fontWeight:'700'}}>Favoris</Text>}
                backgroundColor="white"
            />
            <View style={{marginTop:'5%'}}>
                <Text style={{fontSize:15, textAlign:'center', fontWeight:'600'}}>Consultez vos métiers enregistrés à tout moment</Text>
            </View>
                <View style={styles.item}>
                    <View style={{backgroundColor:'#fff', width:'40%', height:70, borderRadius:10, justifyContent:'center', alignItems:'center' }}>
                    <Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/med.png?alt=media&token=2dbcd6db-e8c5-4f68-b9ba-b579162797d6"}} style={{width:35, height: 70}} />
                    </View>
                    <View style={{position:'relative', left:'20%', flexShrink:1}}>
                    <Text style={{alignSelf:'center', fontSize:15, fontWeight:'700'}}>Médecin</Text>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor:'white'
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
export default Favoris;