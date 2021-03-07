import { useEffect, useState } from "react";
import yelp from "../api/yelp";


//ovaj file koristimo da odvojimo hooks logic iz komponente 
//use + ono sa cim poslujemo (ex. useRestaurants jer dobavljamo restorane)



//exportujemo arrow function preko koje mozemo vratiti vise vrijednosti
export default () => {

    const [restaurants, setRestaurants] = useState([]);

    //ukoliko dodje do errora onda moramo updateovati screen da se prikaze errorMessage
    const [errorMessage, setErrorMessage] = useState("");


    //da bi se defaultno izvrsilo neko pretrazivanje cim pokrenemo aplikciju ova helper funckija ce primati searchArgument 
    const searchAPI = async (searchTerm) => {

        try {

            var APIresponse = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "San Jose"
                }
            });

            //nama iz tog objekta treba samo objekat businesses 
            setRestaurants(APIresponse.data.businesses);



        } catch (err) {
            setErrorMessage("Something went wrong!")
        }

    };





    //Call searchAPI when component is first rendered
    //ako ovo ostavimo bit ce infinite loop jer svaki put u funkciji pozivamo setter i komponenta se rerenderuje
    // *NE RADITI 
    //umjesto ovoga koristimo useEffect da se pozove samo jednom
    //searchAPI("pasta");

    useEffect(() => {
        searchAPI("pasta");
    }, []);






    //unutar komponente pogledamo koje stvari nam trebaju i to vracamo iz hook file 
    //trebaju nam searchAPI funkcija,restaurants,errorMessage 
    //to vracamo kao niz objekata
    return [searchAPI,restaurants,errorMessage];

};