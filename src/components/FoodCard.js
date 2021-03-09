import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";



//uri is where react-native is trying to get this image from

const FoodCard = ({ result }) => {
    return (
        <View style = {styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style = {styles.descStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};









const styles = StyleSheet.create({

    container:{
        marginTop:15,
        marginLeft:15,
    },

    imageStyle: {
        width: 250,
        height: 140,
        borderRadius: 4,
        marginBottom:5
    },

    nameStyle: {
        fontWeight: "bold",
        fontSize: 16
    },

    descStyle:{
        color:"gray",
        fontStyle:"italic"
    }

});



export default FoodCard;