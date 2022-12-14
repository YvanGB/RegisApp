import { ScrollView, Pressable, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicatorBase } from 'react-native'
import React from 'react';
import InstaStory from 'react-native-insta-story';
import { AntDesign } from '@expo/vector-icons';

const data = [
    {
        id: 1,
        user_image: 'https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/docteur.png?alt=media&token=30b285dc-85ea-41e2-80f5-48da5bc18914',
        user_name: "Lundi",
        stories: [
            {
                story_id: 1,
                story_image: "https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/docteur.png?alt=media&token=30b285dc-85ea-41e2-80f5-48da5bc18914",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/docteur.png?alt=media&token=30b285dc-85ea-41e2-80f5-48da5bc18914",
            }]
    },
    {
        id: 2,
        user_image: 'https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/med.png?alt=media&token=2dbcd6db-e8c5-4f68-b9ba-b579162797d6',
        user_name: "Mardi",
        stories: [
            {
                story_id: 1,
                story_image: "https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/med.png?alt=media&token=2dbcd6db-e8c5-4f68-b9ba-b579162797d6",
                swipeText:'',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/med.png?alt=media&token=2dbcd6db-e8c5-4f68-b9ba-b579162797d6",
                swipeText:'',
                onPress: () => console.log('story 2 swiped'),
            }]
    },
    {
        id: 3,
        user_image: 'https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/med.png?alt=media&token=2dbcd6db-e8c5-4f68-b9ba-b579162797d6',
        user_name: "Mercredi",
        stories: [
            {
                story_id: 1,
                story_image: "https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/med.png?alt=media&token=2dbcd6db-e8c5-4f68-b9ba-b579162797d6",
                swipeText:'',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://firebasestorage.googleapis.com/v0/b/monorientation-8f782.appspot.com/o/med.png?alt=media&token=2dbcd6db-e8c5-4f68-b9ba-b579162797d6",
                swipeText:'',
                onPress: () => console.log('story 2 swiped'),
            }]
    },
    // {
    //     id: 4,
    //     // user_image: '',
    //     user_name: "Jeudi",
    //     stories: []
    // },
    // {
    //     id: 5,
    //     // user_image: '',
    //     user_name: "Vendredi",
    //     // stories: []
    // }

];

const Storylist = () =>{
    return(
            <InstaStory 
            data={data}
            duration={10}
            onStart={item => console.log(item)}
            onClose={item => console.log('close: ', item)}
            customCloseComponent={<AntDesign name="closesquareo" size={20} color="white" />}
            style={{marginTop:'-10%'}}
            avatarSize={55}
            avatarTextStyle={{color:'#0B2E5E'}}
            />
    )
}

// const Storylist = ()=> {
//   return (
//     <View style={styles.container}    
//     >
//         <View style={styles.storyContainer}>
//                 {
//                     stories.map((story, index) =>{
//                         return(
//                             <TouchableOpacity>
//                                 <View style={styles.circleContainer} >
//                                     <ProfileHead key={story.id} uri={story.uri} />
//                                     <Text>{story.jour}</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         );
//                     })
//                 }
//         </View>
//     </View>
//   )
// };

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

export default Storylist;