import React from "react";
import {View,StyleSheet,Text,Image} from "react-native";


const FoodCard = ({result})=>{
    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    );
};









const styles = StyleSheet.create({

});



export default FoodCard;