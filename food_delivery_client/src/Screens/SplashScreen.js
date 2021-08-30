import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, StatusBar, Image, ActivityIndicator } from "react-native";

import logo from '../Assests/logo.png'


const SplashScreen = ({navigation}) =>
{
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            navigation.navigate("Tab");
        }, 3000)
    }, []);

    return(
        <View style={styles.container}>
            <StatusBar hidden />
            <Image source={logo} style={{height : 200, width : 200}}></Image>
            {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Text></Text>}
        </View>
    );

}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#fff",
        width : "100%",
        height : "100%",
        textAlign : "center",
        justifyContent : "center",
        alignItems : "center"
    }
});

export default SplashScreen;
