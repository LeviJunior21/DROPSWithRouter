import { Stack } from "expo-router";
import { Provider } from "./login/Provider";
import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LayoutStack = () => {
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

    return (
        <Provider.Provider value={{userInfo, setUserInfo, accept, setAccept, save, setSave, accessToken, setAccessToken, loginPress, setLoginPress, response, promptAsync, hasData, setHasData}}>
            <Stack>
                <Stack.Screen name={"(tab)"} options={{headerShown: false}}></Stack.Screen>
            </Stack>
        </Provider.Provider>
    )
}

export default LayoutStack;
