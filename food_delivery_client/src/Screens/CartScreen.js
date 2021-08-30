import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

const CartScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Cart Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : '100%',
        backgroundColor : 'white'
    }
})

export default CartScreen;