import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Provider } from "../login/Provider";
import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Layout() {
    const [userInfo, setUserInfo] = useState({});
    const [accept, setAccept] = useState(false);
    const [save, setSave] = useState(false);
    const [accessToken, setAccessToken] = useState();
    const [loginPress, setLoginPress] = useState(false);
    const [hasData, setHasData] = useState(false);
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '1019379642180-04hmh33ddu9hpqutrente1ckndirl5sr.apps.googleusercontent.com',
        androidClientId: '1019379642180-04hmh33ddu9hpqutrente1ckndirl5sr.apps.googleusercontent.com',
        webClientId: '1019379642180-04hmh33ddu9hpqutrente1ckndirl5sr.apps.googleusercontent.com',
    });

    useEffect(() => {
        const getUserData = async() => {
            let useInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
                headers: {Authorization: `Bearer ${accessToken}`}
            });
            useInfoResponse.json().then(data => {
                setHasData(true);
                setUserInfo(data);
            });
        }
        if (accessToken) {getUserData();}
    }, [accessToken]);

    useEffect(() => {
        if (response?.type == "success") {
            setAccessToken(response.authentication.accessToken);
        }
    }, [response]);

    useEffect(() => {
        const getLogin = async() => {
            try {
                const value = await AsyncStorage.getItem("login");
                setUserInfo(JSON.parse(value));
                if (Object.keys(userInfo).length !== 0) {
                    setHasData(true);
                    setAccept(true);
                }
            } catch {}
        }
        if (!hasData) {getLogin();}
    }, [userInfo]);

    return(
        <Provider.Provider value={{userInfo, setUserInfo, accept, setAccept, save, setSave, accessToken, setAccessToken, loginPress, setLoginPress, response, promptAsync, hasData, setHasData}}>
            <Tabs>
                <Tabs.Screen 
                    name = {"index"} 
                    options={{
                        tabBarLabel: "Menú", 
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Feather name="home" color={color} size={size}/>
                        )
                    }}
                />
                <Tabs.Screen 
                    name = {"activities"} 
                    options={{
                        tabBarLabel: "Atividades", 
                        headerTitle: "Atividades 📖",
                        headerTintColor: "#8146DA",
                        tabBarIcon: ({color, size}) => (
                            <Feather name={"book"} color={color} size={size}/>
                        )
                    }}
                />
                <Tabs.Screen 
                    name = {"expo-auth-session"} 
                    options={{
                        tabBarLabel: "Login", 
                        headerTitle: "Login com o DROPS",
                        headerTintColor: "#8146DA",
                        tabBarIcon: ({color, size}) => (
                            <Feather name={"user"} color={color} size={size}/>
                        )
                    }}
                />
            </Tabs>
        </Provider.Provider>
    )
}

export default Layout;
