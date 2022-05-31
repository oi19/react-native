import React, { useContext, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext'
import userLocation from '../hooks/userLocation';
import TrackFrom from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons';



const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext)

  const callBack = useCallback((location) => addLocation(location, recording), [recording])

  // the screen is rerendered every second due to the mockLocation file which changes location consistanly changing it in
  // the expo location library and then the variable location is passed as parameter in the addLocation Function 
  const [error] = userLocation(isFocused || recording, callBack)
  // console.log(isFocused)

  return <SafeAreaView style={styles.Container} forceInset={{ top: 'always' }}>
    <Text style={{ fontSize: 46, marginTop: 50 }}>TrackCreateScreen</Text>
    <Map />
    {/* this is another way for eventHnadler \ */}
    {/* <NavigationEvents onWillBlur={() => console.log('leave')} /> */}
    {error ? <Text>please enable location services</Text> : null}
    <TrackFrom />
  </SafeAreaView>
};


TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={24} color="black" />
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,

  },
});

export default withNavigationFocus(TrackCreateScreen);
