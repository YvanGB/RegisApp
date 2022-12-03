import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const AndroidLarge7 = () => {
  return (
    <View style={styles.androidLarge7}>
      <Text style={styles.enregistrsText}>Enregistrés</Text>
      <Image
        style={styles.arrowLeftCircle}
        resizeMode="cover"
        source={require("../assets/arrow--left-circle.png")}
      />
      <View style={styles.groupView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame7.png")}
        />
        <Text style={styles.dveloppeurInformatiqueText}>
          Développeur informatique
        </Text>
        <Image
          style={styles.bookmarkIcon}
          resizeMode="cover"
          source={require("../assets/bookmark.png")}
        />
      </View>
      <View style={styles.groupView1}>
        <View style={styles.rectangleView2} />
        <View style={styles.rectangleView3} />
        <Text style={styles.jugeText}>Juge</Text>
        <Image
          style={styles.frameIcon1}
          resizeMode="cover"
          source={require("../assets/frame8.png")}
        />
        <Image
          style={styles.bookmarkIcon1}
          resizeMode="cover"
          source={require("../assets/bookmark.png")}
        />
      </View>
      <View style={styles.groupView2}>
        <View style={styles.rectangleView4} />
        <View style={styles.rectangleView5} />
        <Text style={styles.architecteText}>Architecte</Text>
        <Image
          style={styles.frameIcon2}
          resizeMode="cover"
          source={require("../assets/frame9.png")}
        />
        <Image
          style={styles.bookmarkIcon2}
          resizeMode="cover"
          source={require("../assets/bookmark.png")}
        />
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-1244.png")}
      />
      <Text
        style={styles.consultezVosMetiersEnregist}
      >{`Consultez vos metiers enregistrés à tout moment `}</Text>
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  enregistrsText: {
    position: "absolute",
    height: "4.38%",
    width: "32.78%",
    top: "3.75%",
    left: "33.61%",
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
    borderRadius: 10,
    backgroundColor: "#047fee",
    width: 335,
    height: 69,
  },
  rectangleView1: {
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
    color: "#fff",
    textAlign: "left",
  },
  bookmarkIcon: {
    position: "absolute",
    top: 7,
    left: 308,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 202,
    left: 12,
    width: 335,
    height: 69,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#047fee",
    width: 335,
    height: 69,
  },
  rectangleView3: {
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
    color: "#fff",
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
  bookmarkIcon1: {
    position: "absolute",
    top: 7,
    left: 308,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  groupView1: {
    position: "absolute",
    top: 285,
    left: 12,
    width: 335,
    height: 69,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#047fee",
    width: 335,
    height: 69,
  },
  rectangleView5: {
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
    color: "#fff",
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
  bookmarkIcon2: {
    position: "absolute",
    top: 7,
    left: 308,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  groupView2: {
    position: "absolute",
    top: 367,
    left: 12,
    width: 335,
    height: 69,
  },
  groupIcon: {
    position: "absolute",
    top: 752,
    left: 43,
    width: 275,
    height: 48,
  },
  consultezVosMetiersEnregist: {
    position: "absolute",
    top: 131,
    left: 12,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Circular Std",
    color: "#000",
    textAlign: "left",
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
  androidLarge7: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge7;
