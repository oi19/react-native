import { useState, useEffect } from 'react';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';


export default (shouldTrack, callBack) => {
    const [error, setErr] = useState(null)

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                const granted = await requestForegroundPermissionsAsync();
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                    callBack)
                if (!granted) {
                    throw new Error('location persmission is not granted')
                }
            } catch (e) {
                setErr(e)
            }
        }
        if (shouldTrack) {
            startWatching()
        } else {
            // defensivly wise in case subscriber equals null !
            if (subscriber) {
                subscriber.remove()
            }
            subscriber = null
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }
        , [shouldTrack, callBack])

    return [error]
}