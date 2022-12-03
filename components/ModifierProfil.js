import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const AndroidLarge10 = () => {
  return (
    <View style={styles.androidLarge10}>
      <View style={styles.prenomView}>
        <View style={styles.rectangleView} />
        <Text style={styles.prnomsText}>Prénoms</Text>
        <Text style={styles.ayodlText}>Ayodélé</Text>
      </View>
      <View style={styles.telephoneView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.emailText}>Email</Text>
        <Text style={styles.houefagmailcomText}>houefa@gmail.com</Text>
      </View>
      <Text style={styles.terminText}>Terminé</Text>
      <Text style={styles.annulerText}>Annuler</Text>
      <Text style={styles.modifierMonProfil}>{`Modifier mon profil `}</Text>
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#edecec",
    width: 332,
    height: 61,
  },
  prnomsText: {
    position: "absolute",
    top: 5,
    left: 9,
    fontSize: 12,
    fontFamily: "Circular Std",
    color: "rgba(0, 0, 0, 0.7)",
    textAlign: "left",
  },
  ayodlText: {
    position: "absolute",
    top: 31,
    left: 9,
    fontSize: 14,
    fontFamily: "Mulish",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  prenomView: {
    position: "absolute",
    top: 111,
    left: 11,
    width: 332,
    height: 61,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#edecec",
    width: 332,
    height: 61,
  },
  emailText: {
    position: "absolute",
    top: 6,
    left: 13,
    fontSize: 12,
    fontFamily: "Circular Std",
    color: "rgba(0, 0, 0, 0.7)",
    textAlign: "left",
  },
  houefagmailcomText: {
    position: "absolute",
    top: 33,
    left: 13,
    fontSize: 14,
    fontFamily: "Circular Std",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  telephoneView: {
    position: "absolute",
    top: 203,
    left: 10,
    width: 332,
    height: 61,
  },
  terminText: {
    position: "absolute",
    top: 28,
    left: 285,
    fontSize: 16,
    fontFamily: "Circular Std",
    color: "#047fee",
    textAlign: "left",
  },
  annulerText: {
    position: "absolute",
    top: 28,
    left: 14,
    fontSize: 14,
    fontFamily: "Circular Std",
    color: "#000",
    textAlign: "left",
  },
  modifierMonProfil: {
    position: "absolute",
    top: 28,
    left: 106,
    fontSize: 16,
    fontFamily: "Circular Std",
    color: "#000",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 78.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderTopWidth: 0.3,
    width: 360.3,
    height: 0.3,
  },
  androidLarge10: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge10;
