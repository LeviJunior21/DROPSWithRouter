import {
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
    Image,
    Dimensions
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

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
    return (
        <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={1}>
            <View style={styles.principal}>
                <Image style={styles.image} source={{uri: data?.image}}/>
                <Text style={styles.title}>{data?.title.toUpperCase()}</Text>
            </View>
            {open? 
                <View style={styles.description}>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.subItem}>{"- Descrição"}</Text>
                        <TouchableOpacity style={styles.buttonOpen}>
                            <Text style={styles.textOpen}>{"ABRIR"}</Text>
                            <Ionicons name="ios-arrow-forward-outline" size={22} color={"white"}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.descriptionText}>{data?.description}</Text>
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
        paddingHorizontal: 6,
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
        backgroundColor: "green",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    textOpen: {
        fomtSize: 18,
        color: "white",
        fontWeight: "bold"
    },

    descriptionText: {
        width: width,
        paddingHorizontal: 13,
        fontWeight: "bold"
    }
});
