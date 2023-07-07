import { View, StyleSheet, ImageBackground, StatusBar, FlatList, ScrollView } from "react-native";
import Post from "../activities/post";
import flatListData from "../activities/data";
import * as Animatable from "react-native-animatable";
import Separator from "../activities/Separator";
import { useEffect } from "react";
import { LogBox } from "react-native";

function Page() {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#9C66EE"}/>
            <ImageBackground style={styles.backgroundImage} source={require("../assets/loginBackground.jpg")}>
                <ScrollView>
                    <FlatList
                        data={flatListData}
                        ItemSeparatorComponent={Separator(6)}
                        renderItem={({item, index}) => 
                            <Animatable.View animation="fadeInUp" delay={index * 100} useNativeDriver>
                                <Post title={item.title} subtitle={item.subtitle} description={item.description}/>
                            </Animatable.View>
                        }
                    />
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    scroll: {
     flex: 1,   
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
    }
})
