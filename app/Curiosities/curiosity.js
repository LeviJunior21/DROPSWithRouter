import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

function Curiosity({data}) {
    return (
        <TouchableOpacity style={styles.container}>

        </TouchableOpacity>
    )
}

export default Curiosity;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        width: width,
        height: 140,
        backgroundColor: "gray"
    }
});
