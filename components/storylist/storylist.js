import { ScrollView, Pressable, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicatorBase } from 'react-native'
import React from 'react';
import InstaStory from 'react-native-insta-story';
import { AntDesign } from '@expo/vector-icons';


const data = [
    {
        id: 1,
        user_image: 'https://img.freepik.com/photos-gratuite/portrait-menuisier-professionnel-age-moyen-planche-bois-outils-debout-dans-son-atelier-menuiserie_342744-822.jpg?w=740&t=st=1670191494~exp=1670192094~hmac=65ff776a3566f168cc99d72dffbfc2bc7343bddde6665e559dd61a7ffd33036d',
        user_name: "Lundi",
        stories: [
            {
                story_id: 1,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
            }]
    },
    {
        id: 2,
        user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: "Mardi",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            }]
    },
    {
        id: 3,
        user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: "Mercredi",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            }]
    },
    {
        id: 4,
        user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: "Jeudi",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            }]
    },
    {
        id: 5,
        user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: "Vendredi",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            }]
    }

];

const Storylist = () =>{
    return(
            <InstaStory 
            data={data}
            duration={10}
            onStart={item => console.log(item)}
            onClose={item => console.log('close: ', item)}
            customSwipeUpComponent={<View>
                                <Text>Swipe</Text>
                            </View>}
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