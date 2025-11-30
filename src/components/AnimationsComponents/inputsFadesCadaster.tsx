import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

export default function InputsFadesCadaster({
    children,
    trigger, // número: currentStep
}: {
    children: React.ReactNode;
    trigger: number;
}) {
    const opacity = useRef(new Animated.Value(1)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const [currentChild, setCurrentChild] = useState<React.ReactNode>(children);
    const animatingRef = useRef(false);
    const latestChildrenRef = useRef(children);

    // keep latest children reference without triggering effect
    useEffect(() => {
        latestChildrenRef.current = children;
    }, [children]);

    useEffect(() => {
        if (animatingRef.current) return;
        animatingRef.current = true;

        // saída
        Animated.parallel([
            Animated.timing(opacity, { toValue: 0, duration: 140, useNativeDriver: true }),
            Animated.timing(translateY, { toValue: -8, duration: 140, useNativeDriver: true }),
        ]).start(() => {
            // troca o conteúdo para a versão mais recente dos children
            setCurrentChild(latestChildrenRef.current);

            // entrada
            Animated.parallel([
                Animated.timing(opacity, { toValue: 1, duration: 220, useNativeDriver: true }),
                Animated.timing(translateY, { toValue: 0, duration: 220, useNativeDriver: true }),
            ]).start(() => {
                animatingRef.current = false;
            });
        });
        // só executa quando 'trigger' mudar
    }, [trigger, opacity, translateY]);

    return (
        <Animated.View style={[styles.container, { opacity, transform: [{ translateY }] }]}>
            {currentChild}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: { width: '100%' },
});

