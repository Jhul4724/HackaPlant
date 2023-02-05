import { onValue, push, ref as dbRef, set } from 'firebase/database';
import { getBlob, ref as sRef } from 'firebase/storage';
import * as React from 'react';
import { Text } from 'react-native-paper';
import { database, storage } from '../../firebase';
import { getDisease, getPlant } from '../../utils';

export default function Activity() {

    const blobToBase64 = blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise(resolve => {
            reader.onloadend = () => {
                resolve(reader.result);
            };
        });
    };


    React.useEffect(() => {
        onValue(dbRef(database, 'uploads'), async (snapshot) => {
            if (snapshot.val()) {
                try {
                    const arr = Object.values(snapshot.val());
                    const image = arr[arr.length - 1];
                    console.log(image)
                    const blob = await getBlob(sRef(storage, image));
                    const base64 = await blobToBase64(blob);
                    const plant = await getPlant(base64.split('base64,')[1]);
                    const disease = await getDisease(base64.split('base64,')[1]);
                    set(dbRef(database, `analyses/${image.slice(0, image.length - 4)}`), { plant: plant, disease: disease })
                } catch (e) {
                    ;
                }
            }
        });
    }, []);


    return (
        <Text>Activity</Text>
    )
}