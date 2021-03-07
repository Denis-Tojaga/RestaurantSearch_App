import React from "react";
import {View,Text,StyleSheet} from "react-native";
import { TextInput } from "react-native-gesture-handler";



const ResultList = ({headerText,restaurantsList})=>{

    return (
        <View>
            <Text style = {styles.titleStyle}>{headerText}</Text>
            <Text>Results: {restaurantsList.length}</Text>
        </View>
    );

};




const styles = StyleSheet.create({
    titleStyle:{
        fontSize:25,
        fontWeight:"bold"
    }
});



export default ResultList;