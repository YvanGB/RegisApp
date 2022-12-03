import { ScrollView, Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const stories = [
    {
        id:'1',
        uri: require('../../assets/car.jpg'),
        jour: 'Lundi'
    },
    {
        id:'2',
        uri: require('../../assets/img2.jpg'),
        jour: 'Mardi'
    },
    {
        id:'3',
        uri: require('../../assets/img3.jpg'),
        jour: 'Mercredi'
    },
    {
        id:'4',
        uri: require('../../assets/img4.jpg'),
        jour: 'Jeudi'
    },
    {
        id:'5',
        uri: require('../../assets/img5.jpg'),
        jour: 'Vendredi'
    },
    
]

const Storylist = ()=> {
  return (
    <View style={styles.container}    
    >
        <View style={styles.storyContainer}>
                {
                    stories.map((story, index) =>{
                        return(
                            <TouchableOpacity>
                                <View style={styles.circleContainer} >
                                    <ProfileHead key={story.id} uri={story.uri} />
                                    <Text>{story.jour}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
        </View>
    </View>
  )
};

const ProfileHead = ({uri}) =>{
    return(
        <View style={styles.storyProfile}>
            <Image 
                source={uri}
                style={styles.storyImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:'10%',
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:'2%'
    },
    circleContainer:{
        alignItems:'center',
        
    },
    storyContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        
    },
    storyProfile:{
        width:65,
        height:65,
        borderRadius: 65 / 2,
        borderWidth: 2,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    storyImage:{
        width:'95%',
        height:'95%',
        borderRadius: 80 / 2
    }
})

export default Storylist