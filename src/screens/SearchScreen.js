import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";


const SearchScreen = () => {

    //term will be the value we are searching for in a searchBar component
    const [term, setTerm] = useState("");


    //passing two props to a searchBar component
    //first we pass in the term that is currently displayed, then we pass the function onTermChange
    //in that function we need to accept one argument and thats a new term and the function is setting the newTerm as term

    return (
        <View>
            
            <SearchBar
                term={term}
                onTermChange={(newTerm) => { setTerm(newTerm) }}
                onSearch={() => { console.log("Term was submited!") }}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>

        </View>
    );
}



const styles = StyleSheet.create({

});


export default SearchScreen;