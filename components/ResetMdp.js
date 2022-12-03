import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const AndroidSmall4 = () => {
  return (
    <View style={styles.androidSmall4}>
      <Text style={styles.rinitialiserSonMotDePasse}>
        Réinitialiser son mot de passe
      </Text>
      <Text style={styles.entrezLeMailAssociVotr}>
        <Text
          style={styles.entrezLeMailAssoci}
        >{`Entrez l’e-mail associé à votre compte et nous `}</Text>
        <Text
          style={styles.vousEnverronsUn}
        >{`vous enverrons un code de confirmation pour `}</Text>
        <Text
          style={styles.rinitialiserVotreMot}
        >{`réinitialiser votre mot de passe. `}</Text>
      </Text>
      <View style={styles.emailView}>
        <View style={styles.rectangleView} />
        <Text style={styles.adresseEmailText}>Adresse email</Text>
        <Image
          style={styles.iconlyBoldMessage}
          resizeMode="cover"
          source={require("../assets/iconlyboldmessage3.png")}
        />
      </View>
      <View style={styles.seConnecterView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.validerText}>Valider</Text>
      </View>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame14.png")}
      />
      <Image
        style={styles.arrowLeftCircle}
        resizeMode="cover"
        source={require("../assets/arrow--left-circle.png")}
      />
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  rinitialiserSonMotDePasse: {
    position: "absolute",
    top: 30,
    left: 51,
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Circular Std",
    color: "#047fee",
    textAlign: "left",
  },
  entrezLeMailAssoci: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  vousEnverronsUn: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  rinitialiserVotreMot: {
    margin: 0,
  },
  entrezLeMailAssociVotr: {
    position: "absolute",
    top: 315,
    left: 22,
    fontSize: 15,
    fontFamily: "Circular Std",
    color: "#262626",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(22, 22, 22, 0.8)",
    borderWidth: 0.5,
    width: 303,
    height: 45,
  },
  adresseEmailText: {
    position: "absolute",
    top: 14,
    left: 36,
    fontSize: 12,
    fontFamily: "Circular Std",
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "left",
    width: 95.74,
    height: 16.68,
  },
  iconlyBoldMessage: {
    position: "absolute",
    height: "16.07%",
    width: "5.94%",
    top: "83.93%",
    right: "91.09%",
    bottom: "0%",
    left: "2.97%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  emailView: {
    position: "absolute",
    top: 405,
    left: 29,
    width: 303,
    height: 140,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#047fee",
    width: 303,
    height: 40,
  },
  validerText: {
    position: "absolute",
    top: 12,
    left: 121,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Circular Std",
    color: "#fff",
    textAlign: "left",
    width: 91,
    height: 15.8,
  },
  seConnecterView: {
    position: "absolute",
    top: 517,
    left: 28,
    width: 303,
    height: 40,
  },
  frameIcon: {
    position: "absolute",
    top: 143,
    left: 106,
    width: 126,
    height: 126.02,
    overflow: "hidden",
  },
  arrowLeftCircle: {
    position: "absolute",
    top: 26,
    left: 5,
    width: 36,
    height: 36,
    overflow: "hidden",
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
  androidSmall4: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidSmall4;
