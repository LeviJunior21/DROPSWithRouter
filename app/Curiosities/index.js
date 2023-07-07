import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Curiosity from "./curiosity";

function Curiosities() {
    const data = [
        {title: "Simulador de asteróides", description: "A simulação tem como base estudos sobre impactos de asteroides de Gareth Collins, professor de Ciências Planetárias do Imperial College London, na Inglaterra, e Clemens Rumpf, engenheiro aeroespacial da Nasa.",image: "https://cdn.universoracionalista.org/wp-content/uploads/2022/12/simulador-impacto-asteroides-sao-paulo.jpg", link: "https://neal.fun/asteroid-launcher"},
        {title: "Telescópio Webb", description: "Imagens fantásticas do supertelescópio James Webb mostram o Universo como nunca antes visto. Foi um presente de US$ 10 bilhões para o mundo. Uma máquina que mostraria nosso lugar no Universo.",image: "https://pbs.twimg.com/tweet_video_thumb/F0Smm7tWIAg2HBE.jpg", link: "https://webbtelescope.org/images"},
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
