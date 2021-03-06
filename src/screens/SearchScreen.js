import React, { useState } from "react";
//If we want to scroll through some content we wrap it up with scrollview JSX element
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
//importujemo hook koju smo kreirali
import useRestaurants from "../hooks/useRestaurants";
import ResultList from "../components/ResultList";














//if we want to navigate from child to some new screen we need to intercept the navigation object out default screen is getting

const SearchScreen = () => {


    //searchInput will be the value we are searching for in a searchBar component
    const [searchInput, setSearchInput] = useState("");

    //passing two props to a searchBar component
    //first we pass in the term that is currently displayed, then we pass the function onInputChange
    //in that function we need to accept one argument and thats a new term and the function is setting the newTerm as term


    //pravimo state koji ce se brinuti o onome sto dobijemo za API linka, defaultno postavljamo na prazan niz
    //ovdje ce se spremiti svi restorani koje nam API vrati
    //restaurants je niz objekata koje dobijemo od requesta



    //file useRestaurants exportuje funkciju koja vraca niz od tri objekta koja cemo spremiti ovdje
    const [searchAPI, restaurants, errorMessage] = useRestaurants();



    const filterRestaurantsByPrice = (priceValue) => {
        //price === $
        //price === $$
        //price === $$$



        //this will filter all the restaurants with the correct price as given argument
        //filter built-in function will be called for each object in restaurants array 


        //funkcija prima jedan parametar a to je rezultat get requesta i vraca listu odgovarajucih restorana
        return restaurants.filter(result => {
            return result.price === priceValue;
        });
    };






    return (

        <>

            <SearchBar
                //postavlja searchInput
                searchInput={searchInput}
                //svaki put kad se promijeni input da se postavi na novu vrijednost
                onInputChange={(newInput) => setSearchInput(newInput)}
                //svaki put na pretrazivanje pozivamo asinhronu helper funkciju
                onSearch={() => searchAPI(searchInput)}
            />


            {errorMessage.length != 0 ? <Text style={{ alignSelf: "center", fontSize: 15, color: "red" }}>{errorMessage}</Text> : null}


            <ScrollView showsVerticalScrollIndicator={false}>

                <ResultList
                    headerText={"Cost Effective"}
                    restaurantsList={filterRestaurantsByPrice("$")}
                />
                <ResultList
                    headerText={"Bit Pricier"}
                    restaurantsList={filterRestaurantsByPrice("$$")}
                />
                <ResultList
                    headerText={"Big spender"}
                    restaurantsList={filterRestaurantsByPrice("$$$")}
                />

                <ResultList
                    headerText={"Luxury"}
                    restaurantsList={filterRestaurantsByPrice("$$$$")}
                />

            </ScrollView>


        </>
    );
}







//ako ne zelimo da vracamo sve unutar view elementa zbog fit in namjera view elementa , mozemo koristiti prazan tag
// <>  </>


const styles = StyleSheet.create({

    //ako zelimo da view element uzima samo onoliko koliko je visible od ekrana onda dodajemo flex:1
    parentView: {
        flex: 1
    }
});


export default SearchScreen;