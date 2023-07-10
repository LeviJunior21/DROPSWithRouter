import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useState } from "react";
import Constants from "expo-constants";
import SwiperPlanets from "../Planets/SwiperPlanets";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function Page() {
  const [planet, setPlanet] = useState("Mercúrio");

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.namePlanetNav}>{"DROPS NML"}</Text>
        <Ionicons name="planet" color={"blue"} size={26}/>
        <TouchableOpacity style={styles.buttomWikipedia}>
          <Text style={styles.textWikipedia}>{"Wikipédia"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <SwiperPlanets setPlanet={setPlanet}/>
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
    },

    namePlanetNav: {
      fontSize: 18,
      width: 140,
      fontWeight: "bold",
      color: "purple"
    },
    
    buttomWikipedia: {
      height: 40,
      width: 140,
      justifyContent: "center",
      alignItems: "flex-end"
    },

    textWikipedia: {
      fontWeight: "500"
    }
});
  