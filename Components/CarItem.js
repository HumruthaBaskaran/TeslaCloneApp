import React from "react";
import { View, ImageBackground, StyleSheet,Text, Dimensions, Button } from "react-native";
import Header from "./Header";
import StyledButton from "./StyledButton";

export default function CarItem(props){
    const { name, tagline, taglineCTA, image } = props.car;
    return(
        <View style={styles.container}>
           <ImageBackground  source={image} style={styles.Image}/>
           <View style={styles.titles}>
                <Text style={styles.text}>{name}</Text>
                    <Text style={styles.subtitle}>
                        {tagline}
                        {" "}
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>
           <View style={styles.buttonView}>
                <StyledButton type='primary'/>
                <StyledButton type='secondry'/>
           </View>
        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width:"100%",
            height:Dimensions.get('window').height, 
          },
        titles: {
            marginTop: '30%',
            width: '100%',
            alignItems: "center"
        },
        text:{
            fontWeight: "500",
            fontSize: 40,
        },
        subtitle: {fontSize: 16, color: "#5c5e62"},
        subtitleCTA: {textDecorationLine: "underline"},
        Image: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            position: 'absolute',
        },
        buttonView:{
            position: 'absolute',
            bottom: 50,
            width: '100%'
        },
    })
