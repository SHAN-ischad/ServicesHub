import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

export default function InputFadesCadaster({ children, trigger }: { children: React.ReactNode, trigger: any }) {
    const opacity = useRef(new Animated.Value(1)).current
    const translateY = useRef(new Animated.Value(0)).current
    const [current, setCurrent] = useState<React.ReactNode>(children)

    useEffect(() => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(opacity, { toValue: 0, duration: 140, useNativeDriver: true }),
                Animated.timing(translateY, { toValue: 0, duration: 140, useNativeDriver: true })
            ])
        ]).start(() => {
            setCurrent(children)
            Animated.parallel([
                Animated.timing(opacity, { toValue: 1, duration: 220, useNativeDriver: true }),
                Animated.timing(translateY, { toValue: 1, duration: 220, useNativeDriver: true })
            ]).start()
        })
    }, [trigger])



    // 
    const styles = StyleSheet.create({
        container: { width: '100%' },
    });

    return (
        <Animated.View style={[styles.container]} >
            {current}
        </Animated.View>
    );
}

