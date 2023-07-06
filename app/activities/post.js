import { TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";

function Post(props) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            <Text style={styles.subtitle} numberOfLines={1}>{props.subtitle}</Text>
            <Text style={styles.description} numberOfLines={3}>{props.description}</Text>
        </TouchableOpacity>
    )
}

export default Post;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        width: 0.97 * width,
        height: 114,
        borderRadius: 6,
        borderWidth: 2,
        padding: 4,
        borderColor: "black",
        backgroundColor: "#d0f5ed"
    },

    title: {
        fontSize: 17,
        fontWeight: "bold",
        color: "blue"
    },

    subtitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black"
    },

    description: 10,
        fontWeight: "bold",
        color: "black"
})
