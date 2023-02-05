import React, { useState, useEffect } from 'react';
import { Image, View, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import { Asset } from 'expo-asset';
import * as ImagePicker from 'expo-image-picker';

export default function Home({ route, navigation }) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        if (!result.canceled) {
            navigation.navigate("Diagnosis", { base64: result.assets[0].base64, uri: result.assets[0].uri });
        }
    };

    const logo = Asset.fromModule(require('../../assets/hackaplant-logo.png'));

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {logo && <Image source={logo} style={{ width: 400, height: 200 }} />}
            <Button icon="image" mode="contained" onPress={pickImage} style={{ marginBottom: 10 }}>Pick an image from camera roll</Button>
            <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Camera')}>Click picture</Button>
        </View>

    );
}