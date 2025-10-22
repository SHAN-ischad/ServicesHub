import React from 'react';
import Animated from 'react-native-reanimated';
import { globalStyles } from '../../css/globalStyles';

export function AnimatedLogo() {

    return (
        <Animated.Image
            source={require('../../../assets/images/thehubLogoFull.png')}
            style={[globalStyles.smallImageLogo,]}
            className="animate-pulse "
            resizeMode="contain"
        />
    );
}