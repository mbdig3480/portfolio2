import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    }

    return (
        <View>
            <Text></Text>
            <Text>Count: {count == 0 ? "0" : count}</Text>
            <Button onPress={incrementCount} title="Add"></Button>
            <Button onPress={decrementCount} title="Subtract"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        height: 100,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
