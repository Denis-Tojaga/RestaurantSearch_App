import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

//name of the icon from the whole directory like a component




//SearchBar component


//Adding icons is easier because we already have vector-icons

const SearchBar = ()=>{

    return (
        <View style = {styles.background}>

            <Feather name = "search" size = {39} color={"black"}/>
            <TextInput style = {styles.searchText} placeholder="Search for restaurants"></TextInput>

        </View>
    );


};




const styles = StyleSheet.create({

    background:{
        backgroundColor:"lightgray",
        height:50.5,
        marginHorizontal:15,        
        borderRadius:5,
        marginVertical:10,
        flexDirection:"row",
        padding:5
    },


    searchText:{
        position:"absolute",
        alignSelf:"center",
        marginLeft:55,
        fontSize:22
    }

});
 


export default SearchBar;