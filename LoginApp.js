import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import TodayDate from './components/TodayDate';
import MultiplicationCalculator from './components/MultiplicationCalculator';
import Counter from './components/Counter';

export default function LoginApp() {
    let [error, setError] = useState("")
    let [loggedIn, setLoggedIn] = useState(false)
    let [passwordTextValue, setPasswordTextValue] = useState("")
    let [usernameTextValue, setUsernameTextValue] = useState("")

    let doLogin = useCallback(() => {
        if (passwordTextValue === "Ch@rge!") {
            setLoggedIn(true)
            setError("")
        }
        else {
            setLoggedIn(false)
            setError("Wrong password! Try again.")
        }
    }, [passwordTextValue])

    return (
        loggedIn ?
            <View style={styles.container}>
                <Text>Welcome, {usernameTextValue}!</Text>
                <br></br>
                <TodayDate></TodayDate>
                <MultiplicationCalculator></MultiplicationCalculator>
                <Counter></Counter>
            </View>
            :
            <View style={styles.container}>
                <View>
                    <Text>Welcome, please log in below!</Text>
                </View>
                <TextInput style={styles.input} value={usernameTextValue} onChangeText={setUsernameTextValue} placeholder="Username"></TextInput>
                <TextInput style={styles.input} value={passwordTextValue} onChangeText={setPasswordTextValue} placeholder="Password" secureTextEntry={true}></TextInput>
                <Text style={{ color: "red" }}>{error}</Text>
                <Button title="Login" onPress={doLogin}></Button>
                <StatusBar style="auto" />
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
