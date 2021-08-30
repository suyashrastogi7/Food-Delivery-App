import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

const NotificationScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Notification Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : '100%',
        backgroundColor : 'white'
    }
})

export default NotificationScreen;