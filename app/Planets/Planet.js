import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

function Planet({data, setPlanet}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipAnim] = useState(new Animated.Value(0));

  const flipCard = () => {
    setPlanet(data.planetName)
    Animated.timing(flipAnim, {
      toValue: isFlipped ? 0 : 180,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.card, frontAnimatedStyle]} onPress={flipCard}>
        <View style={styles.touchIcon}>
          <MaterialIcons name={"touch-app"} size={40} color={"white"}/>
          <Text style={styles.textWithTouchIcon}>{"toque"}</Text>
        </View>
        <View style={styles.textTopContainer}>
          <Text style={styles.textTop}>{"VISÃO GERAL"}</Text>
        </View>
        <Image style={styles.imagePrincipal} source={data.imagePrincipal} />
        <View style={styles.planetNameContainer}>
          <Text style={styles.planetNameText}>{data.planetName.toUpperCase()}</Text>
        </View>
        <View style={styles.infoPlanetContainer}>
          <Text style={styles.infoPlanetText}>{data.infoPlanet}</Text>
        </View>
        <View style={styles.infoGeralContainer}>
          <View style={styles.squareInfo}>
            <Text style={styles.squareInfoTopText}>{"ROTAÇÃO"}</Text>
            <Text style={styles.textInfo}>{data.rotacao} {"HORAS"}</Text>
          </View>
          <View style={styles.squareInfo}>
            <Text style={styles.squareInfoTopText}>{"REVOLUÇÃO"}</Text>
            <Text style={styles.textInfo}>{data.revolucao} {"ANOS"}</Text>
          </View>
          <View style={styles.squareInfo}>
            <Text style={styles.squareInfoTopText}>{"RAIO"}</Text>
            <Text style={styles.textInfo}>{data.raio} {"KM"}</Text>
          </View>
          <View style={styles.squareInfo}>
            <Text style={styles.squareInfoTopText}>{"TEMPERATURA"}</Text>
            <Text style={styles.textInfo}>{data.raio} {"°C"}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card, styles.cardBack, backAnimatedStyle]} onPress={flipCard}>
        <View style={[styles.textTopContainerInternal, {marginTop: -40}]}>
          <Text style={styles.textTop}>{"ESTRUTURA INTERNA"}</Text>
        </View>
        <Image style={[styles.imagePrincipal, {marginTop: 0, height: 150}]} source={data.imageInternal} />
        <View style={[styles.planetNameContainer, {paddingVertical: 0}]}>
          <Text style={styles.infoPlanetText}>{data.structure}</Text>
        </View>
        <View style={styles.textTopContainerInternal}>
          <Text style={styles.textTop}>{"GEOLOGIA DA SUPERFÍCIE"}</Text>
        </View>
        <Image style={[styles.imagePrincipal, {marginTop: 20, height: 150}]} source={data.imageStructure} />
        <View style={[styles.planetNameContainer, {paddingVertical: 0}]}>
          <Text style={styles.infoPlanetText}>{data.geology}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTopContainer: {
    width: 0.97 * width,
    height: 50,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  textTopContainerInternal: {
    width: 0.97 * width,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  textTop: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  },

  touchIcon: {
    right: 40,
    top: 100,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },

  textWithTouchIcon: {
    color: "white"
  },

  imagePrincipal: {
    width: width,
    height: 200,
    resizeMode: "contain"
  },

  planetNameContainer: {
    width: 0.97 * width,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },

  cardBack: {
    position: 'absolute',
    width: width - 8,
    height: height - 154,
    borderRadius: 5
  },

  planetNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },

  infoPlanetContainer: {
    width: 0.96 * width,
    padding: 14
  },

  infoPlanetText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white"
  },

  infoGeralContainer: {
    width: 0.98 * width,
    height: 80,
    bottom: 10,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  squareInfo: {
    width: 0.23 * width,
    height: 70,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "space-around",
    alignItems: "center"
  },

  squareInfoTopText: {
    fontSize: 11,
    color: "#FFFFFFBF",
    fontWeight: "bold"
  },

  textInfo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },

  linkContainer: {
    width: 0.97 * width,
    justifyContent: "center",
    alignItems: "center"
  },

  textLink: {
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "underline",
    textDecorationColor: "purple"
  }
});

export default Planet;
