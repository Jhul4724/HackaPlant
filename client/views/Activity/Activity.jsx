import { onValue, ref } from 'firebase/database';
import { getBlob, getDownloadURL } from 'firebase/storage';
import * as React from 'react';
import { Text } from 'react-native-paper';
import { database, storage } from '../../firebase';

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
        onValue(ref(database, 'uploads'), async (snapshot) => {
            if (snapshot.val()) {
                try {
                    const arr = Object.values(snapshot.val());
                    const image = arr[arr.length - 1];
                    const blob = await getBlob(ref(storage, image));
                    const base64 = await blobToBase64(blob);
                } catch (e) {
                    console.error(e);
                }
            }
        });
    }, []);
    return (
        <Text>Activity</Text>
    )
}