import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as locationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const { state: { recording, trackName, locations }, startRecording, stopRecording, changeName } = useContext(locationContext)
    const [saveTrack] = useSaveTrack();
    return <>
        <Spacer />
        <Input value={trackName} onChangeText={changeName} placeholder="Enter Track Name" />
        <Spacer>
            {recording
                ? (<Button title='Stop' buttonStyle={styles.button} onPress={stopRecording} />)
                : (<Button title='Start Recording' buttonStyle={styles.button} onPress={startRecording} />
                )}
        </Spacer>
        <Spacer >
            {!recording & locations.length
                ? <Button title='Save Recording' buttonStyle={styles.button} onPress={saveTrack} />
                : null
            }
        </Spacer>
    </>
}
const styles = StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 17,
        backgroundColor: 'black',
    },
})
export default TrackForm
