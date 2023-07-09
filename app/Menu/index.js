import { View, Dimensions, StyleSheet, Text, Image, FlatList, ScrollView } from "react-native";
import AutoScrollBannerReanimated from "./autoScrollBanner";
import { equipeImageData } from "./data";

function LayoutMenu() {
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.ourProjectTextContainer}>
                    <Text style={styles.titleOurProjects}>{"Nossos projetos"}</Text>
                </View>
                <AutoScrollBannerReanimated></AutoScrollBannerReanimated>
                <View style={styles.ourProjectTextContainer}>
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

    scroll: {
        flex: 1,
    },

    ourProjectTextContainer: {
        width: width,
        height: 50,
        paddingHorizontal: 6,
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
    }

});
