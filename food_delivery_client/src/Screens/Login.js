import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'

//Components

const Login = ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if(username === 'user' && password === 'Hello123'){
            navigation.navigate('Tab')
        }
        else {
            console.log('Wrong password')
        }
        //Register logic
        //If Registered Login using the same creds
        //redirect to HomeScreen
    }

    return(
        <View style={styles.container}>
            <TextInput onChangeText={e => setUsername(e.target.value)} value={username} placeholder="Username"/>
            <TextInput onChangeText={e => setPassword(e.target.value)} value={password} textContentType='password' placeholder="Password" />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={{color : '#fff'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text>Signup</Text></TouchableOpacity>
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
        borderRadius : 15
    },
    button : {
        padding : '8 15',
        borderRadius : 15,
        backgroundColor : '#FF2E2E',
    }
})

export default Login;