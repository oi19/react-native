import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import Form from '../components/Form';
import LoginText from '../components/LoginText';
import { NavigationEvents } from 'react-navigation';


const SignupScreen = ({ navigation }) => {

  const { state, signup, delErrorMessage } = useContext(AuthContext);

  return (
    < View style={styles.container}>
      <NavigationEvents
        onWillFocus={delErrorMessage}
      />

      <Text style={{ fontSize: 46, alignSelf: 'center', color: 'black' }}>Sign up for Tracker</Text>
      <Spacer></Spacer>
      <Form
        buttonText='Sign Up'
        /// Q1=> unhandled promise error
        // onSubmit = {()=>signup()}


        //  this works ==> onSubmit={(email, password) => signup(email, password)}
        // another way down below
        onSubmit={signup}
        errorMessage={state.errorMessage}
      />
      <Spacer />
      <LoginText
        text='Already have an Account? Sign In'
        route='Signin'
      />

    </View >



  )

};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
