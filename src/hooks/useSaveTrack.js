import { useContext } from "react";

import { Context as locationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';
import { navigate } from '../navigationRef'

export default () => {
    const { state: { trackName, locations }, reset } = useContext(locationContext)
    const { createTrack } = useContext(TrackContext)
    const saveTrack = async () => {
        await createTrack(trackName, locations);
        reset();
        navigate('TrackList')
    };
    return [saveTrack];
}