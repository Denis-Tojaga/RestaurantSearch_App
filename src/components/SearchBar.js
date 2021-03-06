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
        <View style = {styles.backgroundStyle}>

            <Feather name = "search" style={styles.iconStyle}/>
            <TextInput style = {styles.searchText} placeholder="Search for restaurants"></TextInput>

        </View>
    );


};




const styles = StyleSheet.create({

    backgroundStyle:{
        backgroundColor:"lightgray",
        marginHorizontal:15,        
        marginVertical:15,
        borderRadius:5,
        padding:2,
        height:50.5,
        flexDirection:"row"
    },


    iconStyle:{
        color:"black",
        fontSize:39,
        alignSelf:"center",
        marginHorizontal:10       
    },

    searchText:{
        flex:1,
        fontSize:21
    }

});
 


export default SearchBar;