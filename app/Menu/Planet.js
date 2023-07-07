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
        <Image style={styles.imagePrincipal} source={data.imagePrincipal} />
        <Text>{data.planetName}</Text>
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

  imagePrincipal: {
    width: width,
    height: 200,
    resizeMode: "contain"
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
  }
});

export default Planet;
