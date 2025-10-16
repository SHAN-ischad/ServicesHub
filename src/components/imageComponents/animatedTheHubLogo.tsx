import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { globalStyles } from '../../css/globalStyles';

export function AnimatedLogo() {
    const rotate = useSharedValue(0);

    useEffect(() => {
        rotate.value = withTiming(360, { duration: 1200 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { rotate: `${rotate.value}deg` }
        ]
    }));

    return (
        <Animated.Image
            source={require('../../../assets/images/thehubLogoFull.png')}
            style={[
                globalStyles.smallImageLogo,
                animatedStyle
            ]}
        />
    );
}