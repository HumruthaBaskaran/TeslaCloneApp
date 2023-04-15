import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import CarItem from "./CarItem";
import cars from "./cars";

export default function CarsList(){
    return(
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem= {({item})=><CarItem car={item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                snapToInterval={Dimensions.get('window').height}
                decelerationRate={'fast'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});