import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function MultiplicationCalculator() {
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    let addedNum = num1 * num2

    return (
        <View style={styles.container}>
            <View>
                <Text>Enter the two numbers you would like to multiply.</Text>
            </View>
            <TextInput style={styles.input} value={num1} onChangeText={setNum1} placeholder="Enter your first number"></TextInput>
            <TextInput style={styles.input} value={num2} onChangeText={setNum2} placeholder="Enter your second number"></TextInput>
            <Text>{num1} * {num2} = {addedNum}</Text>
            <StatusBar style="auto"/>
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
