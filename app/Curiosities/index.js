import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Curiosity from "./curiosity";

function Curiosities() {
    const data = [
        {title: "Simulador de asteróides", description: "A simulação tem como base estudos sobre impactos de asteroides de Gareth Collins, professor de Ciências Planetárias do Imperial College London, na Inglaterra, e Clemens Rumpf, engenheiro aeroespacial da Nasa.",image: "https://cdn.universoracionalista.org/wp-content/uploads/2022/12/simulador-impacto-asteroides-sao-paulo.jpg", link: ""},
        {title: "Simulador de asteróides", description: "A simulação tem como base estudos sobre impactos de asteroides de Gareth Collins, professor de Ciências Planetárias do Imperial College London, na Inglaterra, e Clemens Rumpf, engenheiro aeroespacial da Nasa.",image: "https://cdn.universoracionalista.org/wp-content/uploads/2022/12/simulador-impacto-asteroides-sao-paulo.jpg", link: ""},
    ];

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
