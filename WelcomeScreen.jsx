import {
    StyleSheet, Text, View, Button,
    TextInput
} from 'react-native'
import React from 'react'
import { useState } from "react";

const WelcomeScreen = ({navigation,route}) => {
        const [name, setname] = useState("");
        const [age, setage] = useState("");
        const handlename = (v) => {
            setname(v);
        };
        const handleage = (v) => {
            setage(v);
        };

        return (
            <View style={styles.container}>
                <View style={styles.inputview}>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter Your Name"
                        placeholderTextColor="#E8E8E8"
                        onChangeText={handlename}
                        value={name}
                    />
                </View>

                <View style={styles.inputview}>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter Your Age"
                        placeholderTextColor="#E8E8E8"
                        secureTextEntry={true}
                        onChangeText={handleage}
                        value={age}
                    />
                </View>

                <View style={styles.buttonview}>
                    <Button title="sign in" style={styles.button} onPress={()=>{
                        navigation.navigate("Home", {age1:age})
                    }}/>

                </View>
            </View>
        )
    
}

    export default WelcomeScreen

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
        },
        inputview: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2100,
        },
        textinput: {
            borderWidth: 1,
            borderColor: "black",
            margin: 10,
            flex: 1,
            padding: 10,
            borderRadius: 10,
            textAlign: "center",
            color: "black",
            fontSize: 18,
        },
        buttonview: {
            margin: 10,
        },
        button: {
            borderRadius: 10,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
            elevation: 3,
            flex: 1,
        },
    });