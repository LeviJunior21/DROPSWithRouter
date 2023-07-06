import { StyleSheet, View, Dimensions, TouchableOpacity, TextInput, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";

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
          <TouchableOpacity style={[styles.searchButton, {display: value? "flex": "none"}]}>
            <Ionicons name="search" size={18}/>
          </TouchableOpacity>
      </View>
    )
}
  
export default AnimatedInput;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    inputContainer: {
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 24,
      marginTop: 24,
      width: 0.8 * width,
      height: 30,
      borderColor: "#999999",
      justifyContent: "center"
    },
  
    input: {
      paddingHorizontal: 10,
      fontSize: 13
    },
  
    placeHolderContainer: {
      width: 100,
      position: "absolute",
      justifyContent: "center"
    },
  
    placeHolder: {
      width: 100,
      fontSize: 11,
      marginHorizontal: 4,
      paddingHorizontal: 4,
      position: "absolute",
      backgroundColor: "#FFFFFF",
      color: "black"
    },
  
    searchButton: {
      position: "absolute",
      right: 10,
    }
});
