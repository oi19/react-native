import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MovieDetail from "./src/screens/MovieDetail";
import SearchScreen from "./src/screens/SearchScreen";



const navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: MovieDetail
},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Movie Browser'
    }

  })



export default createAppContainer(navigator);