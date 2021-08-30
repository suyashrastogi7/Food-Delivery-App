import React, {useState, useRef} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, DrawerLayoutAndroid} from 'react-native'

const navigationView = () => {
    return(
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
        </View>
    )
}

const Drawer = ({component : Comp}) => {
    const drawer = useRef(null)
    const handleDrawerOpen = () => {
        drawer.current.openDrawer()
    }
    const handleDrawerClose = () => {
        drawer.current.closeDrawer()
    }
    return(
        <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition='left'
        renderNavigationView={navigationView}>
            <Comp />
        </DrawerLayoutAndroid>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    }
});

export default Drawer;