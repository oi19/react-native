import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signin":
            return { errorMessage: "", token: action.payload };
        case "delEMessage":
            return { ...state, errorMessage: "" }
        case 'signout':
            return { errorMessage: "", token: null }
        default:
            return state;
    }
};


const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post("/signup", { email, password });
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "signup", payload: response.data.token });

        navigate("mainFlow");

    } catch (err) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sing up",
        });
    }
};

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post("/signin", { email, password })

        await AsyncStorage.setItem("token", response.data.token)
        dispatch({ type: "signup", payload: response.data.token });

        navigate('mainFlow')
    }
    catch (err) {
        dispatch({
            type: "add_error", payload: 'something went wrong with sing in'
        })
    };
};


const autoLogin = (dispatch) => async () => {

    const token = await AsyncStorage.getItem('token')

    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('mainFlow')
    }
    else {
        navigate('loginFlow')
    }

    // token ? async () => {
    //     await dispatch({ type: 'signin', payload: token })
    //     navigate('mainFlow')
    // } : navigate('loginFlow')
}


const delErrorMessage = (dispatch) => async () => {
    dispatch({
        type: 'delEMessage',
    })
}


const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: "signout" })
    // somehow sign out!!!
    navigate('loginFlow')
};



export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, delErrorMessage, autoLogin },
    { token: null, errorMessage: "" }
);
