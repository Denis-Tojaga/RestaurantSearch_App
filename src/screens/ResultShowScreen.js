import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import ResultList from "../components/ResultList";
import yelp from "../api/yelp";


const ResultShowScreen = ({ navigation }) => {

    //if we are sending params with navigate function then we can recieve them with this
    //we accept the whole navigation object
    //we call getParam from that (use the name of the property assigned to an object)
    var id = navigation.getParam("id");

    //jer primamo objekat ovdje kao default mora stajati null
    const [result, setResult] = useState(null);




    const fetchData = async (id) => {
        try {

            var APIResponse = await yelp.get(`${id}`);
            setResult(APIResponse.data);

        } catch (error) {
            console.log(error);
        }
    };



    //takes care that component gets rendered first time only once
    useEffect(() => {
        fetchData(id);
    }, []);



    //if there is no result yet, first time component get rerendered the default for the result is null
    if (!result)
        return null;


    return (
        <>
            <Text style={styles.headerStyle}>{result.name}</Text>

            <View style={styles.detailContainerStyle}>
                <Text style={styles.detailStyle}>Owner contact:  {result.phone}</Text>
                <Text style={styles.detailStyle}>Delivery number:  {result.display_phone}</Text>
                <Text style={styles.detailStyle}>________________________________________________</Text>
            </View>

            <FlatList

                showsVerticalScrollIndicator={false}

                style={styles.listStyle}
                //our data will be the array of photos
                data={result.photos}

                //key will be the url of the photo
                keyExtractor={(photo) => photo}

                //with every item we will show an image 
                renderItem={({ item }) => {

                    return (
                        <Image style={styles.imageStyle} source={{ uri: item }} />
                    )

                }}

            />

        </>
    );

};



const styles = StyleSheet.create({

    imageStyle: {
        width: 350,
        height: 200,
        marginVertical: 8,
        borderRadius: 4,
        alignSelf: "center"
    },

    headerStyle: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 28,
        marginTop:10
    },

    detailStyle: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: "300",
        color: "gray",
        fontStyle: "italic",
    },


    detailContainerStyle: {
        marginLeft: 10,
        marginVertical: 20
    }


});


export default ResultShowScreen;