import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import Form from '../components/Form';
import LoginText from '../components/LoginText';
import { NavigationEvents } from 'react-navigation';


const SigninScreen = () => {


  const { state, signin, delErrorMessage } = useContext(AuthContext);



  return (
    < View style={styles.container}>
      <NavigationEvents
        onWillFocus={delErrorMessage}
      />

      <Text style={{ fontSize: 46, alignSelf: 'center', color: 'black' }}>Sign In for Tracker</Text>
      <Spacer></Spacer>
      <Form
        buttonText='Sign In'
        onSubmit={signin}
        errorMessage={state.errorMessage}
      />
      <Spacer />
      <LoginText
        text="Don't have an Account? Sign Up"
        route='Signup'
      />
    </View >

  )
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 300,
    padding: 5,
  }
});

export default SigninScreen;
