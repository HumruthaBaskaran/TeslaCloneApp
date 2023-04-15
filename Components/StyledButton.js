import React from "react";
import { Pressable, StyleSheet, View,Text, ToastAndroid  } from "react-native";

export default function StyledButton(props){
    const name = props.type === 'primary'? "custom order":"existing inventory";
    const buttonColor= props.type === 'primary'?  '#171A20CC' : '#FFFFFFA6';
    const textColor= props. type === 'primary' ? '#FFFFFF' : '#171A20';
    return(
        <View style={styles.container}>
            <Pressable style={[{backgroundColor: buttonColor}, styles.pressable]} onPress={()=>{pressed(name)}}>
                <Text style={[{color:textColor},styles.text]}>{name}</Text>
            </Pressable>
        </View>
    );
}

function pressed(buttonName){
    ToastAndroid.show('You pressed '+ buttonName+ ' Button', ToastAndroid.LONG);
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 10,
    },
    pressable: {
        height: 40,
        borderRadius:20,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    }
});