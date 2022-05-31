import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 2,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            latitude: 31.230590254193068 + increment * tenMetersWithDegrees,
            longitude: 29.95701312475723 + increment * tenMetersWithDegrees,
        }
    };
};

let counter = 0;
setInterval(() => {
    try {
        const newLocal = 'Expo.locationChanged';
        Location.EventEmitter.emit(newLocal, {
            watchId: Location._getCurrentWatchId(),
            location: getLocation(counter)
        });
    } catch (e) {
        console.log(e);
    } finally {
        counter++;
    }
}, 1000);