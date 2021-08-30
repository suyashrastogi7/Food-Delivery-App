import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'

//Components

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')

    const handleRegister = () => {
        //Register logic
        //If Registered Login using the same creds
        //redirect to HomeScreen
    }

    return(
        <View style={styles.container}>
            <TextInput onChangeText={e => setUsername(e.target.value)} value={username} placeholder="Username"/>
            <TextInput onChangeText={e => setPassword(e.target.value)} value={password} textContentType='password' placeholder="Password" />
            <TextInput onChangeText={e => setConfirmPassword(e.target.value)} value={confirm_password} textContentType='password' placeholder="Confirm Password" />
            <TouchableOpacity onPress={handleRegister} style={styles.button}>
                <Text style={{color : '#fff'}}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        padding : 10
    },
    input : {
        width : '90%',
        padding : 5,
        borderRadius : 15,
    },
    button : {
        padding : '8 15',
        borderRadius : 15,
        backgroundColor : '#FF2E2E',
    }
})

export default Register;