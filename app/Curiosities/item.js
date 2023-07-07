import {
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
    Image,
    Dimensions,
    Linking
} from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

function Item({ data, i, active, setActive }) {
    const onPress = () => {
        LayoutAnimation.easeInEaseOut();
        setActive(i == active ? null : i);
    };
    const open = active == i;

    const openLink = () => {
        Linking.openURL(data?.link);
    }

    return (
        <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={1}>
            <View style={styles.principal}>
                <Image style={styles.image} source={{uri: data?.image}}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{data?.title.toUpperCase()}</Text>
                    {open? 
                        <FontAwesome name="chevron-up" size={22}/>:
                        <FontAwesome name="chevron-down" size={22}/>
                    }
                </View>
            </View>
            {open? 
                <View style={styles.description}>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.subItem}>{"- Descrição:"}</Text>
                    </View>
                    <Text style={styles.descriptionText}>{data?.description}</Text>
                    <View style={styles.descriptionSiteContainer}>
                        <Text style={styles.descriptionSite}>{"Para mais informações:"}</Text>
                        <TouchableOpacity style={styles.buttonOpen} onPress={() => openLink()}>
                            <Text style={styles.textOpen}>{"clique aqui"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>:<></>
            }
        </TouchableOpacity>
    );
}

export default Item;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingTop: 5
    },

    item: {
        width: width,
        borderWidth: 1,
        marginBottom: 5,
        paddingBottom: 10,
        overflow: 'hidden',
    },

    subItem: {
        padding: 10,
        fontWeight: "bold"
    },

    principal: {
        flexDirection: "column",
    },

    title: {
        fontSize: 18,
        paddingVertical: 10,
        fontWeight: "bold"
    },

    image: {
        width: width,
        height: 180,
        backgroundColor: "gray"
    },

    description: {
        flexDirection: "column"
    },

    descriptionContainer: {
        width: width,
        minHeight: 50,
        paddingHorizontal: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    buttonOpen: {
        width: 100,
        height: 30,
        paddingHorizontal: 8,
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    textOpen: {
        fomtSize: 18,
        color: "#9127B2",
        fontWeight: "bold",
        fontStyle: "italic"
    },

    descriptionText: {
        width: width,
        paddingHorizontal: 13,
        fontWeight: "bold"
    },

    titleContainer: {
        width: width,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    descriptionSite: {
        fontWeight: "bold",
    },

    descriptionSiteContainer: {
        width: width,
        paddingVertical: 10,
        paddingHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
    }
});
