import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Curiosity from "./curiosity";
import {data} from "./AllCuriosities";

function Curiosities() {

    return (
        <View style={styles.curiosities}>
            <ScrollView style={styles.scroll}>
                <Curiosity data={data}/>
            </ScrollView>
        </View>
    )
}

export default Curiosities;

const styles= StyleSheet.create({
    curiosities: {
        flex: 1
    },

    scroll: {
        flex:1
    }
});
