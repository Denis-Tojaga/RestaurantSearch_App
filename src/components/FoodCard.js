import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";



//uri is where react-native is trying to get this image from

const openedHelper= (closed)=>{

    return closed ? <Text style= {{color:"red",textAlign:"center",fontSize:10}}>Currently Closed!</Text>
     : <Text style = {{color:"green",fontSize:12,textAlign:"center"}}>Currently Opened</Text>

}



const FoodCard = ({ result }) => {


    return (
        <View style = {styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style = {styles.descStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
            {openedHelper(result.is_closed)}
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
        height: 150,
        borderRadius: 4,
        marginBottom:5
    },

    nameStyle: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign:"center"
    },

    descStyle:{
        color:"gray",
        fontStyle:"italic",
        textAlign:"center",
        fontSize:14
    },

    contactInfo:{
        textAlign:"center",
        fontStyle:"italic",
        color:"gray",
        fontSize:12
    }

});



export default FoodCard;