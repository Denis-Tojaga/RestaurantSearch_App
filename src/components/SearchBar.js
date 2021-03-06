import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";




//SearchBar component

const SearchBar = ()=>{

    return (
        <View style = {styles.background}>
            <Text>Search Bar</Text>

        </View>
    );


};




const styles = StyleSheet.create({

    background:{
        backgroundColor:"#F0EEEE"

    }

});



export default SearchBar;