import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const AndroidLarge6 = () => {
  return (
    <View style={styles.androidLarge6}>
      <Text style={styles.listeDesMtiers}>Liste des métiers</Text>
      <Image
        style={styles.arrowLeftCircle}
        resizeMode="cover"
        source={require("../assets/arrow--left-circle.png")}
      />
      <View style={styles.groupView}>
        <View style={styles.rectangleView} />
        <Text style={styles.rechercherUnMtier}>Rechercher un métier</Text>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search1.png")}
        />
      </View>
      <View style={styles.groupView1}>
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame1.png")}
        />
        <Text style={styles.dveloppeurInformatiqueText}>
          Développeur informatique
        </Text>
      </View>
      <View style={styles.groupView2}>
        <View style={styles.rectangleView3} />
        <View style={styles.rectangleView4} />
        <Text style={styles.jugeText}>Juge</Text>
        <Image
          style={styles.frameIcon1}
          resizeMode="cover"
          source={require("../assets/frame2.png")}
        />
      </View>
      <View style={styles.groupView3}>
        <View style={styles.rectangleView5} />
        <View style={styles.rectangleView6} />
        <Text style={styles.architecteText}>Architecte</Text>
        <Image
          style={styles.frameIcon2}
          resizeMode="cover"
          source={require("../assets/frame3.png")}
        />
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-1243.png")}
      />
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  listeDesMtiers: {
    position: "absolute",
    height: "4.38%",
    width: "48.06%",
    top: "3.75%",
    left: "25.83%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Circular Std",
    color: "#047fee",
    textAlign: "left",
  },
  arrowLeftCircle: {
    position: "absolute",
    top: 26,
    left: 17,
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "rgba(217, 217, 217, 0.44)",
    width: 335,
    height: 40,
  },
  rechercherUnMtier: {
    position: "absolute",
    top: 12,
    left: 44,
    fontSize: 14,
    fontFamily: "Circular Std",
    color: "rgba(38, 38, 38, 0.7)",
    textAlign: "left",
  },
  searchIcon: {
    position: "absolute",
    top: 10,
    left: 11,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 123,
    left: 13,
    width: 335,
    height: 40,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.79)",
    width: 335,
    height: 69,
  },
  rectangleView2: {
    position: "absolute",
    top: 7,
    left: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 87,
    height: 55,
  },
  frameIcon: {
    position: "absolute",
    top: 14,
    left: 16,
    width: 71,
    height: 41.58,
    overflow: "hidden",
  },
  dveloppeurInformatiqueText: {
    position: "absolute",
    top: 25,
    left: 119,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Circular Std",
    color: "#262626",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 202,
    left: 12,
    width: 335,
    height: 69,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.79)",
    width: 335,
    height: 69,
  },
  rectangleView4: {
    position: "absolute",
    top: 7,
    left: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 87,
    height: 55,
  },
  jugeText: {
    position: "absolute",
    top: 25,
    left: 119,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Circular Std",
    color: "#262626",
    textAlign: "left",
  },
  frameIcon1: {
    position: "absolute",
    top: 10,
    left: 20,
    width: 59,
    height: 48.38,
    overflow: "hidden",
  },
  groupView2: {
    position: "absolute",
    top: 285,
    left: 12,
    width: 335,
    height: 69,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.79)",
    width: 335,
    height: 69,
  },
  rectangleView6: {
    position: "absolute",
    top: 7,
    left: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 87,
    height: 55,
  },
  architecteText: {
    position: "absolute",
    top: 25,
    left: 119,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Circular Std",
    color: "#262626",
    textAlign: "left",
  },
  frameIcon2: {
    position: "absolute",
    top: 10,
    left: 18,
    width: 59,
    height: 49.23,
    overflow: "hidden",
  },
  groupView3: {
    position: "absolute",
    top: 367,
    left: 12,
    width: 335,
    height: 69,
  },
  groupIcon: {
    position: "absolute",
    top: 750,
    left: 43,
    width: 275,
    height: 48,
  },
  lineView: {
    position: "absolute",
    top: 78.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#e6e6e6",
    borderTopWidth: 0.3,
    width: 360.3,
    height: 0.3,
  },
  androidLarge6: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge6;
