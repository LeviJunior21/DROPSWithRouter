import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Sepatarator from "../activities/Separator";
import Curiosity from "./curiosity";
import * as Animatable from "react-native-animatable";

function Curiosities() {
    const data = [{}, {}];

    return (
        <View style={styles.curiosities}>
            <FlatList 
                data={data}
                ItemSeparatorComponent={Sepatarator(10)}
                renderItem={({item, index}) => 
                <Animatable.View animation="fadeInUp" delay={index * 100} useNativeDriver>
                    <Curiosity data={item}/>
                </Animatable.View>
                }
            />
        </View>
    )
}

export default Curiosities;

const styles= StyleSheet.create({
    curiosities: {
        flex: 1
    }
});
