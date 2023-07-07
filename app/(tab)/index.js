import { StyleSheet, View, Dimensions, TouchableOpacity, TextInput, Animated } from "react-native";
import { useState } from "react";
import Constants from "expo-constants";
import AnimatedInput from "../Menu/Search";
import SwiperPlanets from "../Menu/SwiperPlanets";

function Page() {
  const [search, SetSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <AnimatedInput value={search} onChange={SetSearch} placeHolder={"Pesquisar"}/>
      </View>
      <View style={styles.main}>
        <SwiperPlanets/>
      </View>
    </View>
  );
}

export default Page;

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

    main: {
      flex: 1,
      backgroundColor: "#303030"
    }
});
  