import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

import Header from '../Components/Header'

const ExploreScreen = () => {
    return(
        <View>
            <Header title='Explore' />
            <View style={styles.container}>
                <Text>Explore New Deals!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : '100%',
        backgroundColor : 'white',
        padding : 25
    }
})

export default ExploreScreen;