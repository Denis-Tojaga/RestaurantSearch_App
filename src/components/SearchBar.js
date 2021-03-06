import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";

//name of the icon from the whole directory like a component




//SearchBar component


//Adding icons is easier because we already have vector-icons

const SearchBar = ()=>{

    return (
        <View style = {styles.background}>

            <Feather name = "search" />
            <Text>Search Bar</Text>

        </View>
    );


};




const styles = StyleSheet.create({

    background:{
        backgroundColor:"lightgray",
        height:50.5,
        marginHorizontal:15,        
        borderRadius:5,
        marginVertical:10
    }

});



export default SearchBar;