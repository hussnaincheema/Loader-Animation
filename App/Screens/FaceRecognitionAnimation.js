import React, { useRef, useState, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, Text } from 'react-native';
import { Svg, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

const FaceRecognitionAnimation = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prevRotation => prevRotation + 11);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ transform: [{ rotate: `${rotation}deg` }] }}>
                <Svg width={300} height={300}>
                    <Defs>
                        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <Stop offset="30%" stopColor="rgb(180,180,180)" />
                            <Stop offset="100%" stopColor="rgb(43, 252, 35)" />
                        </LinearGradient>
                    </Defs>
                    <Circle
                        cx={150}
                        cy={150}
                        r={120}
                        fill="transparent"
                        stroke="url(#gradient)"
                        strokeWidth={17}
                        strokeDasharray="2, 5.616"
                    />
                </Svg>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FaceRecognitionAnimation;