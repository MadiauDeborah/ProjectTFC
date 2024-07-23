import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import AuthScreen from "./AuthScreen";

const SignupScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>DRHKAT</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput style={styles.input} placeholder="Nom" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry />
                <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>- Or sign up with -</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    logoText: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    formContainer: {
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#0056A6',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    orText: {
        textAlign: 'center',
        marginVertical: 10,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
});
export default SignupScreen;