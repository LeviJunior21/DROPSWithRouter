import { View, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, Text, ActivityIndicator, Dimensions, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Animatable from "react-native-animatable";

WebBrowser.maybeCompleteAuthSession();

function Page({navigation}) {
    const [loginPress, setLoginPress] = useState(false);
    const [accessToken, setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState({});
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '1019379642180-04hmh33ddu9hpqutrente1ckndirl5sr.apps.googleusercontent.com',
        androidClientId: '1019379642180-04hmh33ddu9hpqutrente1ckndirl5sr.apps.googleusercontent.com',
        webClientId: '1019379642180-04hmh33ddu9hpqutrente1ckndirl5sr.apps.googleusercontent.com',
    });

    useEffect(() => {
        if (response?.type == "success") {
            setAccessToken(response.authentication.accessToken);
        }
    }, [response])

    useEffect(() => {
        const getUserData = async() => {
            let useInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: {Authorization: `Bearer ${accessToken}`}
            });
            useInfoResponse.json().then(data => {
                setUserInfo(data);
            })
        }
        getUserData();
    }, [userInfo]);

    useEffect(() => {
        if (userInfo.email != undefined) {
            setLoginPress(false);
        }
    }, [userInfo])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#9C66EE"}/>
            <ImageBackground style={styles.backgroundImage} source={require("../assets/loginBackground.jpg")}>
                {(userInfo.email == undefined)?
                <Login promptAsync={promptAsync} loginPress={loginPress} setLoginPress={setLoginPress}/>:
                <User userInfo={userInfo} setUserInfo={setUserInfo}></User>
                }
            </ImageBackground>
        </View>
    )
}

function Login(props) {
    return (
        <>
            {(props.loginPress)?
            <ActivityIndicator size={"large"}/>:
            <TouchableOpacity style={styles.loginButton} onPress={() => {props.promptAsync(), props.setLoginPress(true)}}>
                <Ionicons name="logo-google" size={30} color={"black"}/>
                <Text style={styles.textLogin}>Fazer login</Text>
            </TouchableOpacity>
            }
        </>
    );
}

function User(props) {
    const [accept, setAccept] = useState(false);

    return (
        <Animatable.View style={styles.userContainer} animation={"zoomIn"}>
            <View style={styles.headerUser}>
                <Image style={styles.imageUser} source={{uri: props.userInfo.picture}}/>
                <View style={styles.textInfo}>
                    <Text style={styles.userName}>{props.userInfo.name}</Text>
                    <Text style={styles.userEmail}>{props.userInfo.email}</Text>
                </View>
            </View>
            <View style={[styles.acceptContainer, {justifyContent: accept?"center" : "space-around"}]}>
                {accept?
                    <Image style={styles.userAccepted} source={require("../assets/verified.gif")} ></Image>:
                    <View>
                        <Text>{"Deseja confirmar sua conta no DROPS?"}</Text>
                        <View style={styles.containerChoice}>
                            <TouchableOpacity style={styles.buttonRecuse} onPress={() => {props.setUserInfo({})}}>
                                <Text style={styles.acceptText}>{"RECUSAR"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonAccept} onPress={() => {setAccept(true)}}>
                                <Text style={styles.acceptText}>{"ACEITAR"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        </Animatable.View>
    );
}

export default Page;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

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
    },

    userContainer: {
        width: 0.97 * width,
        height: 140,
        padding: 10,
        backgroundColor: "white"
    },

    imageUser: {
        width: 44,
        height: 44,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "black"
    },

    headerUser: {
        width: 0.97 * width,
        height: 40,
        borderBottomColor: "black",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch"
    },

    userName: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 10
    },

    userEmail: {
        marginLeft: 10
    },

    textInfo: {
        flexDirection: "column",
        marginLeft: 10
    },

    acceptContainer: {
        flex: 1,
        paddingVertical: 10,
        alignItems: "center"
    },

    acceptText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }, 

    buttonRecuse: {
        width: 114,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    },
    
    buttonAccept: {
        width: 114,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#39D749"
    },

    userAccepted: {
        width: 60,
        height: 60,
    },

    containerChoice: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 4,
        width: 250
    }
})
