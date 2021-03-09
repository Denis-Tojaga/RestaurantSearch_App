import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
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
        <View>
            <Text>{result.name}</Text>
        </View>
    );

};



const styles = StyleSheet.create({});


export default ResultShowScreen;