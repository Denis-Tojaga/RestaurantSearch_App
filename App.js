import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
//stackNavigator je property koji ce automatski prikazati razlicite ekrane,takodjer prikazuje automatski header na vrhu svakog screena
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

//u funkciju createStackNavigator proslijedjujemo dva objekta 


//dajemo proizvoljna imena pozeljno je da uzmemo prvu rijec bez Screen
//ako imamo vise ekrana onda nam treba drugi initialRouteName za prikaz prvog ekrana

//defaultNavigationOptions su opcije koje ce se koristiti za svaki drugi screen,ovaj objekat mozemo koristiti da bi podesili header na vrhu svakog ekrana


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultScreen : ResultShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search"
    }
  });




//App.js je poseban file ciji export ce react-native uzeti i pokrenuti automatski na pocetku aplikacije (default App Component)
//vracamo funckiju kojoj proslijedjujemo prethodno napravljeni StackNavigator



export default createAppContainer(navigator)