import axios from 'axios';
import * as React from 'react';
import { View, Image } from 'react-native';
import { ActivityIndicator, Button, Dialog, Portal, Provider, Text } from 'react-native-paper';


export default function Diagnosis({ route, navigation }) {
    const [data, setData] = React.useState({});
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const showDialog = () => setVisible(true);
    const hideDialog = () => {
        setVisible(false);
        navigation.navigate('Home')
    };

    React.useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await axios.post('https://api.plant.id/v2/health_assessment', {
                "api_key": "BAYzqJackSvMaeHu5NnqO2vlhtKlhYvoMmyKf65zFDgF5xBcPN",
                "modifiers": ["crops_fast"],
                "disease_details": ["common_names", "description", "local_name", "treatment"],
                "images": [route.params.base64]
            });
            setLoading(false);
            if (!response.data.is_plant)
                showDialog();
            else {
                setData(response.data);
            }
        })()

    }, [route.params])
    return (
        <Provider>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {loading ? <ActivityIndicator /> :
                    <>
                        {data.health_assessment && data.health_assessment.diseases.map((disease, i) => (<Text key={i}>{disease.name}</Text>))}
                        {route.params && <Image source={{ uri: route.params.uri }} style={{ width: 200, height: 200 }} />}
                        <Portal>
                            <Dialog visible={visible} onDismiss={hideDialog}>
                                <Dialog.Title>Alert</Dialog.Title>
                                <Dialog.Content>
                                    <Text variant="bodyMedium">Oops! Looks like your image doesn't have a plant. Go look for some plants!</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={hideDialog}>OK</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </>}
            </View>
        </Provider>
    )
}