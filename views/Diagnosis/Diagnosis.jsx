import axios from "axios";
import * as React from "react";
import { View, Image } from "react-native";
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  Provider,
  Text,
  Card,
} from "react-native-paper";

export default function Diagnosis({ route, navigation }) {
  const [disease, setDisease] = React.useState({});
  const [plant, setPlant] = React.useState({});
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => {
    setVisible(false);
    navigation.navigate("Home");
  };

  const getDisease = async () => {
    try {
        const response = await axios.post('https://api.plant.id/v2/health_assessment', {
          "api_key": "juBFAqnP7TIFsOFo8qdHiah5fmhXXOAHBhS9Di8vNsdKrvA7WY",
          "modifiers": ["crops_fast"],
          "disease_details": ["common_names", "description", "local_name", "treatment"],
          "images": [route.params.base64],
      });
      return response.data;
    }
    catch (error) {
      console.log(error);
    }
};

const getPlant = async () => {
    try {
        const response = await axios.post('https://api.plant.id/v2/identify', {
          "api_key": "juBFAqnP7TIFsOFo8qdHiah5fmhXXOAHBhS9Di8vNsdKrvA7WY",
          "modifiers": ["crops_fast"],
          "plant_details": ["common_names", "wiki_description"],
          "images": [route.params.base64],
      });
      return response.data;
      console.log(response)
    }
    catch (error) {
      console.log(error);
    }
}; 

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      // TODO: uncomment this
    //   const disease = await getDisease();
      const plant = await getPlant();
      setLoading(false);
      if (!plant.is_plant)
          showDialog();
      else {
        // console.log(JSON.stringify(disease));
        console.log(JSON.stringify(plant));
        //   setDisease(disease);
        setPlant(plant);
      }
    })();
  }, [route.params]);

  if (loading)
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <ActivityIndicator />
    </View>
  )
  else
    return (
      <Provider>
        <View>
          {disease?.health_assessment?.diseases &&
            data.health_assessment.diseases.map((disease) => (
              <Text>{disease.name}</Text>
            ))}
        {console.log(plant)}
           {plant?.suggestions &&
          <Card>
            <Card.Cover source={{ uri: route.params.uri }} />
            <Card.Content>
              <Text variant="titleLarge"> { plant.suggestions[0].plant_name } </Text>
            </Card.Content>
          </Card>}
          {route.params && (
            <Image
              source={{ uri: route.params.uri }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">
                  Oops! Looks like your image doesn't have a plant. Go look for
                  some plants!
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>OK</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    );
}
