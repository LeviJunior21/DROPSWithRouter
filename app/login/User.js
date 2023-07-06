
import { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { Provider } from "./Provider";
import AsyncStorage from '@react-native-async-storage/async-storage';

function User() {
    const { userInfo, setUserInfo, accept, setAccept, setHasData, setLoginPress, hasData } = useContext(Provider);

    const stateRecuse = () => {
        setUserInfo({});
        setAccept(false);
        setHasData(false);
        setLoginPress(false);
    }

    const setStorage = async() => {
        try {
            const jsonValue = JSON.stringify(userInfo);
            await AsyncStorage.setItem('login', jsonValue);
            setAccept(true);
        }catch{}
    }

    return (
        <Animatable.View style={styles.userContainer} animation={"zoomIn"}>
            <View style={styles.headerUser}>
                <Image style={styles.imageUser} source={{uri: userInfo?.picture}}/>
                <View style={styles.textInfo}>
                    <Text style={styles.userName}>{userInfo?.name}</Text>
                    <Text style={styles.userEmail}>{userInfo?.email}</Text>
                </View>
            </View>
            <View style={[styles.acceptContainer, {justifyContent: accept?"center" : "space-around"}]}>
                {(hasData && accept)?
                    <Image style={styles.userAccepted} source={require("../assets/verified.gif")} ></Image>:
                    <View>
                        <Text>{"Deseja confirmar sua conta no DROPS?"}</Text>
                        <View style={styles.containerChoice}>
                            <TouchableOpacity style={styles.buttonRecuse} onPress={() => {stateRecuse()}}>
                                <Text style={styles.acceptText}>{"RECUSAR"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonAccept} onPress={() => {setStorage()}}>
                                <Text style={styles.acceptText}>{"ACEITAR"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        </Animatable.View>
    );
}

export default User;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
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
