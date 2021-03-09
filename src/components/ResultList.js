import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FoodCard from "./FoodCard";




const ResultList = ({ headerText, restaurantsList, navigation }) => {


    //we are recieving a navigation prop from the parent Screen so we can navigate to a new screen

    //if there are no restaurants found we want to display message for the user
    var numberOfRestaurantsFound = restaurantsList.length;


    return (
        <View style={styles.container}>

            <Text style={styles.titleStyle}>{headerText}</Text>
            <Text style={styles.lineStyle}>________________________________________________</Text>

            {numberOfRestaurantsFound != 0 ? <FlatList

                horizontal={true}

                showsHorizontalScrollIndicator={false}

                data={restaurantsList}

                //every object from api has its own id so we use that as the key 
                keyExtractor={(restaurant) => restaurant.id}



                //it accepts whole object with item and key, we just want item
                renderItem={({ item }) => {

                    //we are returning touchable opacity wrapped around the FoodCard component
                    //everytime a user clicks on the whole card it navigates to a new screen
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate("ResultScreen") }}>
                            <FoodCard result={item} />
                        </TouchableOpacity>
                    )
                }}


            />

                : <Text style={styles.errorStyle}>No restaurants found for this category!</Text>}



        </View>
    );

};




const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
    },

    lineStyle: {
        alignSelf: "center",
        color: "darkgray"
    },

    container: {
        marginBottom: 10
    },

    errorStyle: {
        color: "darkred",
        fontSize: 15,
        fontStyle: "italic",
        alignSelf: "center"
    }
});



export default ResultList;