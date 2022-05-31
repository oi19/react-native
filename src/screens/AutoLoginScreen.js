import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const AutoLoginScreen = () => {

    const { autoLogin } = useContext(AuthContext)
    useEffect(() => { autoLogin() }, [])

    return null

}
const styles = StyleSheet.create({})

export default AutoLoginScreen;