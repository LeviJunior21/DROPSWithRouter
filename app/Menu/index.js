import { View, Dimensions, StyleSheet, Text, Image, FlatList, ScrollView, TouchableOpacity, Linking, ImageBackground } from "react-native";
import AutoScrollBannerReanimated from "./autoScrollBanner";
import { equipeImageData } from "./data";
import { Ionicons } from "@expo/vector-icons";
import logoDrops from "../assets/drops.jpg";

function LayoutMenu() {

    const openLink = (link) => {
        Linking.openURL(link);
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.nav}>
                    <Text style={styles.titleNav}>{"DROPS na Rede"}</Text>
                </View>
                <View style={styles.apresentacaoContainer}>
                    <ImageBackground 
                    style={styles.imageApresentacao} 
                    source={logoDrops}
                    imageStyle={styles.imageApresentacaoBackgroundStyle}
                    ></ImageBackground>
                </View>
                <View style={styles.ourProjectTextContainer}>
                    <Text style={styles.titleOurProjects}>{"Nossos projetos"}</Text>
                </View>
                <AutoScrollBannerReanimated></AutoScrollBannerReanimated>
                <View style={styles.ourProjectWorkContainer}>
                    <Text style={styles.titleOurProjects}>{"Nosso trabalho"}</Text>
                    <Text style={styles.descriptionOurProjects}>"{"Descrição sobre o nosso projeto Drops na Rede."}"</Text>
                </View>
                <View style={styles.equipeContainer}>
                    <FlatList
                        numColumns={2}
                        data={equipeImageData}
                        style={styles.flatListImage}
                        renderItem={({item}) => (
                            <Image style={styles.imageEquipe} source={item.image}/>
                    )}
                    />
                </View>
                <View style={styles.ourSocialNetworkContainer}>
                    <Text style={styles.titleOurSocialNetwork}>{"Nossas redes sociais"}</Text>
                    <View style={styles.buttonsRedesContainer}>
                        <TouchableOpacity style={styles.redesButton} onPress={() => openLink("https://www.instagram.com/dropsdefisica/")}>
                            <Ionicons name="logo-instagram" size={20} color={"white"}/>
                            <Text style={styles.redesTextButton}>{"Instagram"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.redesButton} openLink={() => openLink("https://www.instagram.com/dropsdefisica/")}>
                            <Ionicons name="logo-facebook" size={20} color={"white"}/>
                            <Text style={styles.redesTextButton}>{"Facebook"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contactContainer}>
                        <Text style={styles.textTitleContact}>{"Contato:"}</Text>
                        <Text style={styles.textInfoContact}>{"Email: drops@ufcg.edu.br"}</Text>
                        <Text style={styles.textInfoContact}>{"Telefone: +55 (83)99999-9999"}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LayoutMenu;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },

    nav: {
        width: width,
        height: 50,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: "gray",
        justifyContent: "center",
        backgroundColor: "#120546"
    },

    titleNav: {
        fontSize: 22,
        color: "white",
        fontWeight: "bold",
    },

    scroll: {
        flex: 1,
    },

    apresentacaoContainer: {
        width: width,
        height: 240,
    }, 

    imageApresentacao: {
        flex: 1
    },

    imageApresentacaoBackgroundStyle: {
        flex: 1,
        resizeMode: "contain"
    },

    ourProjectTextContainer: {
        width: width,
        height: 50,
        paddingHorizontal: 6,
        justifyContent: "center"
    },

    ourProjectWorkContainer: {
        width: width,
        height: 50,
        paddingHorizontal: 6,
        marginTop: 30,
        justifyContent: "center"
    },

    descriptionOurProjects: {
        fontSize: 13,
        fontStyle: "italic"
    },

    titleOurProjects: {
        fontSize: 26,
        color: "purple",
        fontWeight: "bold"
    },

    equipeContainer: {
        width: width,
        minHeight: 200,
        padding: 10,
        gap: 10,
        display: "flex",
        flexWrap: "wrap"
    },

    flatListImage: {
        width: width,
    },

    imageEquipe: {
        width: 0.48 * width,
        height: 110,
        resizeMode: "cover"
    },

    ourSocialNetworkContainer: {
        width: width,
        minHeight: 200,
        paddingVertical: 10,
        marginTop: 30,
        backgroundColor: "#120546"
    },

    titleOurSocialNetwork: {
        fontSize: 24,
        paddingHorizontal: 10,
        color: "white",
        fontWeight: "bold"
    },

    buttonsRedesContainer: {
        width: width,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },

    redesButton: {
        width: 0.4 * width,
        height: 40,
        flexDirection: "row",
        alignItems: "center"
    },

    redesTextButton: {
        color: "white",
        fontWeight: "500",
        marginLeft: 10,
        fontSize: 16
    },

    contactContainer: {
        width: width,
        marginTop: 20,
        paddingHorizontal: 10
    },

    textTitleContact: {
        fontSize: 18,
        color: "white"
    },

    textInfoContact: {
        marginTop: 10,
        color: "white"
    }
});
