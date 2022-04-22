import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function TodayDate() {
    let [date, setDate] = useState("")

    return (
        <View style={styles.container}>
            <View>
                <Text>Enter today's date below.</Text>
            </View>
            <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="Enter today's date in this format: MM/DD/22"></TextInput>
            <Text>Today's Date is: {date}</Text>
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
