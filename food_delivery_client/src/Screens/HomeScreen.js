import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native'

import hero from '../Assests/hero.png'
import burger from '../Assests/burger.png'

import Drawer from '../Components/AndroidDrawer';
import Header from '../Components/Header'

const HomeScreen = () => {
    const [menu, setMenu] = useState([]);
    const data = [{img : 'https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg', product_name : '', product_description : '', product_price : ''},
        {img : 'https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg', product_name : '', product_description : '', product_price : ''},
        {img : 'https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg', product_name : '', product_description : '', product_price : ''},
        {img : 'https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg', product_name : '', product_description : '', product_price : ''}]


    useEffect(() => {
        setMenu(data)
    },[])

    const HomeView = () => {
        return(
            <View>
                <Header title='Home' />
                <View style={styles.container}>
                    <Image source={hero} style={styles.hero}/>
                    <View>
                        <Text style={styles.heading}>Categories</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{width : '100%'}}>
                        <TouchableOpacity style={styles.sub_category}>
                            <Text style={styles.sub_category_text}>Burgers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sub_category}>
                            <Text style={styles.sub_category_text}>Fries</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sub_category}>
                            <Text style={styles.sub_category_text}>Beverages</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.heading}>Popular Now</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{backgroundColor : '#F6FEFF', padding : 10}}>
                            {menu.map((item,i) => {
                                return(
                                    <TouchableOpacity key={i}>
                                        <View key={i} style={styles.product}>
                                            <Image style={{height : 100, width : 150, marginBottom : 15}} source={burger} />
                                            <Text style={{fontSize : 18, fontWeight : 'bold', textAlign : 'center'}}>Crispy Veg</Text>
                                            <Text style={{fontSize : 15, opacity : 0.6, textAlign : 'center'}}>Cheese + Veggies</Text>
                                            <Text style={{fontSize : 21, fontWeight : 'bold', textAlign : 'center'}}>₹149</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <Drawer component={HomeView} />
    )
}

const styles = StyleSheet.create({
    container : {
        height : '100%',
        backgroundColor : 'white',
        padding : 25
    },
    hero : {
        width : '100%',
        borderRadius : 10,
        backgroundColor : '#fffd8d',
        height : 150,
    },
    heading : {
        fontSize : 20,
        fontWeight : '700',
        opacity : 0.7,
        marginBottom : 20,
        marginTop : 20
    },
    sub_category : {
        padding : 20,
        width : 200,
        borderRadius : 35,
        backgroundColor : '#ff7871',
        height : 65,
        marginHorizontal : 5,
    },
    sub_category_text : {
        color : 'white',
        fontWeight : '900',
        fontSize : 15
    },
    product : {
        height : 250,
        width : 200,
        borderRadius : 20,
        textAlign : 'center',
        marginHorizontal : 10,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white'
    }
})

export default HomeScreen;