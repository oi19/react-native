import React, { useContext } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';


const AccountScreen = () => {

  const { signout } = useContext(AuthContext)

  return <SafeAreaView style={styles.Container}>
    <Text style={styles.Text}> LogOut</Text >
    <Button
      title='SignOut'
      onPress={() => { signout() }}
      buttonStyle={styles.Button}

    />

  </SafeAreaView>


};
AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={24} color="black" />
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  Text: {
    fontSize: 48,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginVertical: 100
  },
  Button: {
    marginHorizontal: 15,
    borderRadius: 17,
    backgroundColor: 'black'
  },
});

export default AccountScreen;
