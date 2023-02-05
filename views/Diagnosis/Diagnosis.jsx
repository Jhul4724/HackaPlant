import axios from 'axios';
import * as React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Button, Dialog, Portal, Provider, Text } from 'react-native-paper';


export default function Diagnosis({ route, navigation }) {
    const [data, setData] = React.useState({});
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const showDialog = () => setVisible(true);
    const hideDialog = () => {
        setVisible(false);
        navigation.navigate('Camera')
    };

    React.useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await axios.post('https://api.plant.id/v2/health_assessment', {
                "api_key": "juBFAqnP7TIFsOFo8qdHiah5fmhXXOAHBhS9Di8vNsdKrvA7WY",
                "modifiers": ["crops_fast"],
                "disease_details": ["common_names", "description", "local_name", "treatment"],
                "images": [route.params.base64]
            });
            setLoading(false);
            if (!response.data.is_plant)
                showDialog();
            else {
                console.log(JSON.stringify(response.data));
                setData(response.data);
            }
        })()

    }, [route.params])
    return (
        <Provider>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {loading ? <ActivityIndicator /> :
                    <>
                        {data.diseases && data.diseases.map(disease => <Text>{disease.name}</Text>)}
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