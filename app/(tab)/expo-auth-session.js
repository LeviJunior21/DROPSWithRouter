import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { useContext, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import Login from "../login/Login";
import User from "../login/User";
import { Provider } from "../login/Provider";

WebBrowser.maybeCompleteAuthSession();

function Page() {
    const { userInfo, hasData, setUserInfo, loginPress, setLoginPress, accept, setAccept, promptAsync } = useContext(Provider);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#9C66EE"}/>
            <ImageBackground style={styles.backgroundImage} source={require("../assets/loginBackground.jpg")}>
                {hasData?
                <User userInfo={userInfo} setUserInfo={setUserInfo} accept={accept} setAccept={setAccept}></User>:
                <Login promptAsync={promptAsync} loginPress={loginPress} setLoginPress={setLoginPress}/>
                }
            </ImageBackground>
        </View>
    )
}

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
