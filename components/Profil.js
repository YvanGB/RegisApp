import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AndroidLarge9 = () => {
  return (
    <View style={styles.androidLarge9}>
      <View style={styles.rectangleView} />
      <Text style={styles.profilText}>Profil</Text>
      <Text style={styles.ayodlText}>Ayodélé</Text>
      <Text style={styles.modifierText}>Modifier</Text>
      <View style={styles.groupView}>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.iconlyLightOutlineMessage}
          resizeMode="cover"
          source={require("../assets/iconlylightoutlinemessage.png")}
        />
        <Text style={styles.houefagmailcomText}>houefa@gmail.com</Text>
      </View>
      <Image
        style={styles.arrowLeftCircle}
        resizeMode="cover"
        source={require("../assets/arrow--left-circle.png")}
      />
      <View style={styles.groupView1}>
        <View style={styles.rectangleView2} />
        <Text style={styles.lve2ndeText}>élève 2nde</Text>
        <Image
          style={styles.workIcon}
          resizeMode="cover"
          source={require("../assets/work1.png")}
        />
      </View>
      <View style={styles.groupView2}>
        <View style={styles.rectangleView3} />
        <Text style={styles.dconnexionText}>Déconnexion</Text>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-118.png")}
      />
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group-1242.png")}
      />
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    height: "72.75%",
    width: "100%",
    top: "27.38%",
    right: "0%",
    bottom: "-0.12%",
    left: "0%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#047fee",
  },
  profilText: {
    position: "absolute",
    height: "3.84%",
    width: "15.28%",
    top: "4.11%",
    left: "21.39%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Circular Std",
    color: "#047fee",
    textAlign: "left",
  },
  ayodlText: {
    position: "absolute",
    height: "3.38%",
    width: "23.06%",
    top: "35.38%",
    left: "38.33%",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Circular Std",
    color: "#fff",
    textAlign: "left",
  },
  modifierText: {
    position: "absolute",
    height: "2.47%",
    width: "15.28%",
    top: "3.98%",
    left: "81.67%",
    fontSize: 14,
    fontFamily: "Circular Std",
    color: "#000",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  iconlyLightOutlineMessage: {
    position: "absolute",
    height: "27.78%",
    width: "5.59%",
    top: "38.89%",
    right: "78.87%",
    bottom: "33.33%",
    left: "15.54%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  houefagmailcomText: {
    position: "absolute",
    height: "33.33%",
    width: "40.88%",
    top: "33.33%",
    left: "29.73%",
    fontSize: 14,
    fontFamily: "Circular Std",
    color: "#262626",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    height: "7.4%",
    width: "82.22%",
    top: "44.29%",
    right: "8.89%",
    bottom: "48.31%",
    left: "8.89%",
  },
  arrowLeftCircle: {
    position: "absolute",
    top: 26,
    left: 17,
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  lve2ndeText: {
    position: "absolute",
    height: "33.33%",
    width: "22.97%",
    top: "33.33%",
    left: "38.51%",
    fontSize: 14,
    fontFamily: "Circular Std",
    color: "#000",
    textAlign: "left",
  },
  workIcon: {
    position: "absolute",
    top: 18.12,
    left: 43,
    width: 21,
    height: 21,
    overflow: "hidden",
  },
  groupView1: {
    position: "absolute",
    height: "7.4%",
    width: "82.22%",
    top: "57.86%",
    right: "8.89%",
    bottom: "34.74%",
    left: "8.89%",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#047fee",
    borderStyle: "solid",
    borderColor: "#262626",
    borderWidth: 0.8,
    width: 153,
    height: 40,
  },
  dconnexionText: {
    position: "absolute",
    top: 11,
    left: 34,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Circular Std",
    color: "#262626",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    top: 554,
    left: 104,
    width: 153,
    height: 40,
  },
  groupIcon: {
    position: "absolute",
    height: "14.13%",
    width: "31.39%",
    top: "19.13%",
    right: "34.17%",
    bottom: "66.75%",
    left: "34.44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon1: {
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
  androidLarge9: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge9;
