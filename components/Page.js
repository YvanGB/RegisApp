import React, {useEffect} from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Page = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <Image
        style={styles.groupIcon}
        resizeMethod="resize"
        resizeMode="center"
        source={require("../assets/Group116.png")}
      />
      <TouchableOpacity
        style={styles.groupTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Inscription")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.inscriptionText}>Inscription</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.groupTouchableOpacity1}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Connexion")}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.connexionText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.groupTouchableOpacity2}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Text style={styles.continuerSansSinscrire}>Continuer sans s’inscrire</Text>
        <AntDesign style={{left:80}} name="caretright" size={15} color="white" />
      </TouchableOpacity>
      <View style={{marginLeft:'5%'}}>
      <ImageBackground
        style={styles.mO21}
        resizeMethod="resize"
        resizeMode="cover"
        source={require("../assets/MO21.png")}
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    position: "absolute",
    height: "50.5%",
    width: "98.06%",
    top: "17%",
    right: "0.83%",
    bottom: "32.5%",
    left: "1.11%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: 131,
    height: 40,
  },
  inscriptionText: {
    position: "absolute",
    top: 10,
    left: 24,
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
    textAlign: "left",
  },
  groupTouchableOpacity: {
    position: "absolute",
    top: 592,
    left: 36,
    width: 131,
    height: 40,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#047fee",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 131,
    height: 40,
  },
  connexionText: {
    position: "absolute",
    top: 10,
    left: 27,
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },
  groupTouchableOpacity1: {
    position: "absolute",
    top: 592,
    left: 193,
    width: 131,
    height: 40,
  },
  continuerSansSinscrire: {
    position: "absolute",
    top: 3,
    left: 0,
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },
  arrowLeft2: {
    position: "absolute",
    top: 0,
    left: 165,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  groupTouchableOpacity2: {
    position: "absolute",
    top: 700,
    left: 155,
    width: 193,
    height: 28,
    justifyContent:'center',
    alignItems:'center'
  },
  mO21: {
    position: "absolute",
    top: 0,
    left: -13,
    width: 179,
    height: 179,
  },
  androidLarge2: {
    position: "relative",
    backgroundColor: "#047fee",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Page;
