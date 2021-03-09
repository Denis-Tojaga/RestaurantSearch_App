import React from "react";
import {Text,StyleSheet,View} from "react-native";
import ResultList from "../components/ResultList";


const ResultShowScreen = ({navigation})=>{


    //if we are sending params with navigate function then we can recieve them with this
    //we accept the whole navigation object
    //we call getParam from that (use the name of the property assigned to an object)
    var id = navigation.getParam("id");

    console.log(id);

    return (
        <View>
            <Text>Results Show</Text>
        </View>
    );


};



const styles = StyleSheet.create({});


export default ResultShowScreen;