import React, { useState, useEffect } from 'react';
import { Image, View, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function Home({ route, navigation }) {
    const [image, setImage] = useState(null);

    // useEffect(() => {
    //    console.log(route.params)
    // }, [route.params])

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button icon="image" mode="contained" onPress={pickImage} style={{ marginBottom: 10 }}>Pick an image from camera roll</Button>
            <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Camera')}>Click picture</Button>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}