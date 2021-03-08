import React from "react";
import {View,StyleSheet,Text,Image} from "react-native";



//uri is where react-native is trying to get this image from

const FoodCard = ({result})=>{
    return (
        <View>
            <Image style = {styles.imageStyle} source = {{uri: result.image_url }} />
            <Text style = {styles.nameStyle}>{result.name}</Text>
        </View>
    );
};









const styles = StyleSheet.create({

    imageStyle:{
        width:250,
        height:100,
        borderRadius:4
    },

    nameStyle:{
        fontWeight:"bold",
        fontSize:16
    }

});



export default FoodCard;