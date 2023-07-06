import { View, ActivityIndicator, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native"; 
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Provider } from "./Provider";

function Login() {
    const {loginPress, promptAsync, setLoginPress} = useContext(Provider);

    return (
        <View>
            {(loginPress)?
            <ActivityIndicator size={"large"}/>:
            <TouchableOpacity style={styles.loginButton} onPress={() => {promptAsync(), setLoginPress(true)}}>
                <Ionicons name="logo-google" size={30} color={"black"}/>
                <Text style={styles.textLogin}>Fazer login</Text>
            </TouchableOpacity>
            }
        </View>
    );
}

export default Login;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    loginButton: {
        width: 260,
        height: 60,
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 30,
        borderColor: "black",
        backgroundColor: "white",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },

    textLogin: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
