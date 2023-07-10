import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Animated, {
  scrollTo,
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { data } from './data';

const { width } = Dimensions.get('screen');

export default function AutoScrollBannerReanimated() {
  const scrollRef = useAnimatedRef();
  const scroll = useSharedValue(0);
  useDerivedValue(() => {
    scrollTo(scrollRef, scroll.value * width, 0, false);
  });

  useEffect(() => {
    let interval1, interval2;
    interval2 = setTimeout(() => {
      (function moveRow(delay) {
        scroll.value =
          scroll.value === data.length - 1
            ? 0
            : withSpring(scroll.value + 1, springConfig(0));

        interval1 = setTimeout(() => {
          moveRow(scroll.value === data.length - 1 ? 0 : transitionDelay);
        }, delay);
      })(transitionDelay);
    }, transitionDelay);
    return () => {
      if (interval1) clearTimeout(interval1);
      if (interval2) clearTimeout(interval2);
    };
  }, []);

  return (
    <Animated.ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled
      contentContainerStyle={styles.list}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}>
      {data.map(x => (
        <View style={styles.item} key={x.id}>
          <ImageBackground
            style={styles.imageBackground}
            source={x.image}
            imageStyle={styles.imageBackground}
          >
            <Text style={[styles.titleImage, {color: x.color}]}>{x.titleImage}</Text>
          </ImageBackground>
        </View>
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    height: 200
  },

  item: {
    height: 200,
    width: width,
    backgroundColor: 'red',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },

  txt: {
    fontSize: 20,
    color: '#fff',
  },

  imageBackground: {
    width: width,
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },

  imageBackgroundStyle: {
    flex: 1,
    resizeMode: "cover"
  },

  titleImage: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});

const transitionDelay = 4000;
const springConfig = velocity => {
  'worklet';
  return {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    velocity,
  };
};
