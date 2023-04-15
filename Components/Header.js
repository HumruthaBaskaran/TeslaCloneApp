import React from "react";
import { Image, StyleSheet, SafeAreaView, TouchableOpacity, ToastAndroid } from "react-native";

export default function Header(){
    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <TouchableOpacity onPress={()=>{ ToastAndroid.show('You pressed the MENU', ToastAndroid.LONG)}}>
                <Image source={require('../assets/menu.png')} style={styles.menu}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        position: 'absolute',
        top: 50,
        width: '100%',
        zIndex:100,
        paddingHorizontal: 20,
    },
    logo:{
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});