import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload };
        case 'recording':
            return { ...state, recording: action.payload }
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'track_name':
            return { ...state, trackName: action.payload }
        case 'reset':
            return { ...state, trackName: '', locations: [] }
        default:
            return state;
    }
};
const changeName = dispatch => (name) => {
    dispatch({ type: 'track_name', payload: name })
}
const startRecording = dispatch => () => {
    dispatch({ type: 'recording', payload: true })
};
const stopRecording = dispatch => () => {
    dispatch({ type: 'recording', payload: false })

};
const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location });
    if (recording) {
        dispatch({ type: 'add_location', payload: location })
    }


};
const reset = dispatch => () => {
    dispatch({ type: 'reset' })
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { changeName, startRecording, stopRecording, addLocation, reset },
    { trackName: '', recording: false, locations: [], currentLocation: null }
);
