import React, { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground
} from 'react-native';
import { planets } from './AllPlanets';
import Planet from './Planet';

export default function SwiperPagerButton({ setPlanet }) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const buttons = planets;
    const onCLick = i => this.scrollView.scrollTo({ x: i * width });
    return (
        <ImageBackground style={styles.container} source={require("../assets/stars.jpg")}>
            <View style={{ padding: 5, paddingTop: 0, backgroundColor: "#303030"}}>
                <ButtonContainer buttons={buttons} onClick={onCLick} scrollX={scrollX} />
            </View>
                <ScrollView
                    ref={e => (this.scrollView = e)}
                    horizontal
                    pagingEnabled
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false },
                    )}>
                    {buttons.map(x => (
                        <View style={[styles.card]} key={x}>
                            <Planet data={x} setPlanet={setPlanet}/>
                        </View>
                    ))}
                </ScrollView>
        </ImageBackground>
    );
}

function ButtonContainer({ buttons, onClick, scrollX }) {
    const [btnContainerWidth, setWidth] = useState(0);
    const btnWidth = btnContainerWidth / buttons.length;
    const translateX = scrollX.interpolate({
        inputRange: [0, width],
        outputRange: [0, btnWidth],
    });
    const translateXOpposit = scrollX.interpolate({
        inputRange: [0, width],
        outputRange: [0, -btnWidth],
    });
    return (
        <View
            style={styles.btnContainer}
            onLayout={e => setWidth(e.nativeEvent.layout.width)}>
            {buttons.map((btn, i) => (
                <TouchableOpacity
                    key={btn}
                    style={styles.btn}
                    onPress={() => onClick(i)}>
                    <Text style={styles.textTop}>{btn.planetName}</Text>
                </TouchableOpacity>
            ))}
            <Animated.View
                style={[
                    styles.animatedBtnContainer,
                    { width: btnWidth, transform: [{ translateX }] },
                ]}>
                {buttons.map(btn => (
                    <Animated.View
                        key={btn}
                        style={[
                            styles.animatedBtn,
                            { width: btnWidth, transform: [{ translateX: translateXOpposit }] },
                        ]}>
                        <Text style={styles.btnTextActive}>{btn.planetName}</Text>
                    </Animated.View>
                ))}
            </Animated.View>
        </View>
    );
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5
    },
    
    btnContainer: {
        height: 40,
        borderRadius: 5,
        overflow: 'hidden',
        flexDirection: 'row',
        backgroundColor: '#00000011',
        width: width,
    },

    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    animatedBtnContainer: {
        height: 40,
        flexDirection: 'row',
        position: 'absolute',
        overflow: 'hidden',
        backgroundColor: '#444',
    },

    animatedBtn: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnTextActive: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 11
    },

    textTop: {
        fontSize: 11,
        color: "white",
        fontWeight: "bold"
    },

    card: {
        width: width - 10,
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 5,
        //backgroundColor: "white"
    },
});
