import { FlatList} from "react-native";
import { useState } from "react";
import * as Animatable from "react-native-animatable";
import Item from "./item";
import Separator from "../activities/Separator";

export default function Curiosity({data}) {
    const [active, setActive] = useState(null);

    return (
            <FlatList
                data={data}
                ItemSeparatorComponent={Separator(6)}
                renderItem={({item, index}) => 
                    <Animatable.View animation="fadeInUp" delay={index * 100} useNativeDriver>
                        <Item key={item} data={item} active={active} i={index} setActive={setActive}/>
                    </Animatable.View>
                }
            />
    );
}