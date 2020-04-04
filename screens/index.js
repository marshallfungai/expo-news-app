
import FeedScreen from "./FeedScreen";
import Settings from "./Settings";
import Favorites from "./Favorites";
import AboutUs from "./AboutUs";
import SideMenu from "../navigation/SideMenu";
import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';  
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Slider } from "react-native";


/**
 * Drawer navigator 
 */
const MyDrawerNavigator = createDrawerNavigator({
  Feed: {
    screen: FeedScreen, //Main news screen
  },
  Favorites: {
    screen: Favorites, //Favorites screen
  },
  AboutUs: {
    screen: AboutUs, //Favorites screen
  },
  Settings: {
    screen: Settings, // Settings screen
  }
},{
  contentComponent: SideMenu,
  drawerType: Slider
});

export default MainScreenRouter = createAppContainer(MyDrawerNavigator);