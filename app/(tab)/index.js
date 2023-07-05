import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

function Page({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Ionicons name={"menu"} color={"black"} size={18}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name={"notifications-none"} color={"black"} size={18}/>
        </TouchableOpacity>
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
    backgroundColor: "red",
  },

  nav: {
    width: width,
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center"
  }
});
