import { View, Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useState } from "react";
import LayoutMenu from "../Menu/index";

function Page() {
  const [search, SetSearch] = useState("");

  return (
    <View style={styles.container}>
      <LayoutMenu/>
    </View>
  );
}

export default Page;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight
    },

});
