import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Header = ({title}) => 
{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{alignSelf : 'center'}}><MaterialCommunityIcons size={35} name='menu' /></TouchableOpacity>
            <Text style={styles.heading}>{title}</Text>
        </View>
    );
}

const handleSearch = () => 
{
    //search logic
}

const styles = StyleSheet.create(
    {
        container : {
            height : 'auto',
            display : 'flex',
            backgroundColor : 'white',
            width : '100%',
            flexDirection : 'row',
            paddingLeft : 25
        },
        heading : {
            color : 'black',
            fontSize : 19,
            margin : 20,
            textAlign : 'center',
            justifyContent : "center"
            
        }

    }
);

export default Header;
