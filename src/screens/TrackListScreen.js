import React, { useContext } from 'react';
import { ListItem } from 'react-native-elements'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as trackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(trackContext)
  const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
        <ListItem chevron
        >
          <Text>{item.name}</Text>
        </ListItem>
      </TouchableOpacity>
    )
  }
  return <>
    <NavigationEvents onWillFocus={fetchTracks} />
    <FlatList
      keyExtractor={item => item._id}
      data={state}
      renderItem={({ item }) => renderItem(item)}
    >
    </FlatList>
  </>
};

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}
const styles = StyleSheet.create({});
export default TrackListScreen;
