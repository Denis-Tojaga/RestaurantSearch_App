import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
//import { Feather } from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";

//name of the icon from the whole directory like a component




//SearchBar component


//Adding icons is easier because we already have vector-icons
//We show it exactly like a custom component <Feather />
//For icon styling we can make a styling object or assign a prop directly to it ( size and color )

const SearchBar = ({ searchInput, onInputChange, onSearch }) => {



    //the value by default will be the term we got as a first argument and on changing text we call a function "onChangeTerm"
    //that function need some new text in order to set the new term so we send that as well as an argument



    //new property onEndEditing se zove nakon pritiskanja enter ili potvrde na tastaturi(tada zelimo obaviti search)
    //ako zelimo poslati referencu funkcije koja se poziva samo navedemo naziv bez parametara i zagrada i ta ce se funckcija uvijek pozivati na taj dogadjaj
    //poziva originalnu funckiju iz SearchScreen koja tamo prima parametar, ovdje ne moramo nista proslijedjivati samo navedemo njen naziv



    return (
        <View style={styles.backgroundStyle}>


            <TextInput
                style={styles.searchText}
                placeholder="Search for restaurants"
                value={searchInput}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={onInputChange}
                onEndEditing={onSearch}

            ></TextInput>

        </View>
    );


};




const styles = StyleSheet.create({

    backgroundStyle: {
        backgroundColor: "lightgray",
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 5,
        padding: 2,
        height: 50.5,
        flexDirection: "row"
    },


    iconStyle: {
        color: "black",
        fontSize: 39,
        alignSelf: "center",
        marginHorizontal: 10
    },

    searchText: {
        flex: 1,
        fontSize: 18,
        marginLeft:20
    }

});



export default SearchBar;