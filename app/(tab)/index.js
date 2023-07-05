import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";

function Page({navigation}) {
  const [search, SetSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <AnimatedInput value={search} onChange={SetSearch}  placeHolder={"Pesquisar"}/>
      </View>
    </View>
  );
}

export default Page;

function AnimatedInput({ value, onChange, placeHolder }) {
  const [inputHeight, setHeight] = useState(null);
  const [placeHolderWidth, setWidth] = useState(null);
  const animation = useRef(new Animated.Value(0)).current;
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -inputHeight / 2]
  });
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -placeHolderWidth / 2]
  });
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5]
  });
  const onFocus = () => animate(1);
  const onBlur = () => !value && animate(0);

  const animate = val => {
    Animated.spring(animation, {
      toValue: val,
      bounciness: 0,
      useNativeDriver: true
    }).start();
  }

  return (
    <View 
      style={styles.inputContainer}  
      onLayout={e => !inputHeight && setHeight(e.nativeEvent.layout.height)}>
        <View style={{height: inputHeight, ...styles.placeHolderContainer}}>
          <Animated.Text 
            style={[styles.placeHolder, {transform: [{translateY}, {translateX}, {scale}]}]}
            onTextLayout={e => !placeHolderWidth && setWidth(e.nativeEvent.lines[0]?.width || 0)} 
          >{placeHolder}</Animated.Text>
          <TextInput 
          style={[styles.input, {height: 100}]}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChange}
          multiline={false}
          />
        </View>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#DCCACA",
  },

  nav: {
    width: width,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  navInput: {
    width: 0.7 * width,
    height: 40,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "gray"
  },

  inputContainer: {
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 24,
    borderColor: "#999999",
    width: 0.8 * width,
    height: 30
  },

  input: {
    paddingHorizontal: 10,
    fontSize: 18
  },

  placeHolderContainer: {
    position: "absolute",
    backgroundColor: "red",
    justifyContent: "center"
  },

  placeHolder: {
    fontSize: 22,
    position: "absolute",
    marginHorizontal: 4,
    paddingHorizontal: 4,
    backgroundColor: "#FFFFFF",
    color: "black"
  }
});
