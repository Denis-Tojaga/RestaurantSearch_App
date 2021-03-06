import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

//name of the icon from the whole directory like a component




//SearchBar component


//Adding icons is easier because we already have vector-icons
//We show it exactly like a custom component <Feather />
//For icon styling we can make a styling object or assign a prop directly to it ( size and color )

const SearchBar = ()=>{

    return (
        <View style = {styles.background}>

            <Feather name = "search" size = {35} color={"black"}/>
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
        marginVertical:15,
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