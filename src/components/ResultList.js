import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";



const ResultList = ({ headerText, restaurantsList }) => {


    //if there are no restaurants found we want to display message for the user
    var numberOfRestaurantsFound = restaurantsList.length;


    return (
        <View>

            <Text style={styles.titleStyle}>{headerText}</Text>

            {numberOfRestaurantsFound != 0 ? <FlatList

                horizontal={true}

                data={restaurantsList}

                //every object from api has its own id so we use that as the key 
                keyExtractor={(restaurant) => restaurant.id}

                //it accepts whole object with item and key, we just want item
                renderItem={({ item }) => {

                    return numberOfRestaurantsFound != 0 ? <Text>{item.name} </Text> : <Text>No restaurants found!</Text>
                }}
            />
                : <Text>No restaurants found</Text>}



        </View>
    );

};




const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily:"NexaDemo-Bold"
    }
});



export default ResultList;