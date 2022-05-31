import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import AutoLoginScreen from './src/screens/AutoLoginScreen';
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { FontAwesome } from '@expo/vector-icons';




const TrackList = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
})

TrackList.navigationOptions = {
  title: 'Track List',
  tabBarIcon: <FontAwesome name="th-list" size={24} color="black" />,
  titleStyle: {
    color: 'black',
  },

}

const switchNavigator = createSwitchNavigator({
  Auto: AutoLoginScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    TrackList,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => {
            setNavigator(navigator);
          }} />
        </AuthProvider>
      </LocationProvider >
    </TrackProvider>

  )
}
