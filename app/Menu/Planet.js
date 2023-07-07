import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';

function Planet({data}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipAnim] = useState(new Animated.Value(0));

  const flipCard = () => {
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

  textTop: {
    fontSize: 24,
    fontWeight: "bold",
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
    backgroundColor: 'gray', 
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
  }
});

export default Planet;
