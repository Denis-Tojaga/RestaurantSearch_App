import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
//importujemo yelp file iz API foldera
import yelp from "../api/yelp";
















const SearchScreen = () => {

    //searchInput will be the value we are searching for in a searchBar component
    const [searchInput, setSearchInput] = useState("");

    //passing two props to a searchBar component
    //first we pass in the term that is currently displayed, then we pass the function onInputChange
    //in that function we need to accept one argument and thats a new term and the function is setting the newTerm as term


    //pravimo state koji ce se brinuti o onome sto dobijemo za API linka, defaultno postavljamo na prazan niz
    //ovdje ce se spremiti svi restorani koje nam API vrati
    //restaurants je niz objekata koje dobijemo od requesta
    const [restaurants, setRestaurants] = useState([]);



    //ukoliko dodje do errora onda moramo updateovati screen da se prikaze errorMessage
    const [errorMessage, setErrorMessage] = useState("");






    const searchAPI = async () => {

        try {
            var APIresponse = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchInput,
                    location: "San Jose"
                }
            });

            //nama iz tog objekta treba samo objekat businesses 
            setRestaurants(APIresponse.data.businesses);

        } catch (err) {
            setErrorMessage("Something went wrong!")
        }

    };






    return (

        <View>

            <SearchBar
                //postavlja searchInput
                searchInput={searchInput}
                //svaki put kad se promijeni input da se postavi na novu vrijednost
                onInputChange={(newInput) => setSearchInput(newInput)}
                //svaki put na pretrazivanje pozivamo asinhronu helper funkciju
                onSearch={() => searchAPI()}
            />


            {errorMessage.length != 0 ? <Text>{errorMessage}</Text> : null}

            <Text>We have found {restaurants.length}</Text>

        </View>
    );
}








const styles = StyleSheet.create({

});


export default SearchScreen;