import axios from "axios";
import { push, ref } from "firebase/database";
import * as React from "react";
import { View, Image, ScrollView } from "react-native";
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  Provider,
  Text,
  Card,
  Chip,
} from "react-native-paper";
import { DiseasesList } from "../../components/DiseasesList/DiseasesList";
import { database, storage } from "../../firebase";
import { getDisease, getPlant } from "../../utils";


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



  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const disease = await getDisease(route.params.base64);
      const plant = await getPlant(route.params.base64);
      push(ref(database, 'analyses'), { plant: plant, disease: disease });
      setLoading(false);
      if (!plant.is_plant) showDialog();
      else {
        setDisease(disease);
        setPlant(plant);
      }
    })();
  }, [route.params]);

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  else
    return (
      <Provider>
        <ScrollView style={{ padding: 10 }}>
          {plant?.suggestions && (
            <Card>
              <Card.Content>
                <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
                  {"Plant detected : \n" + plant.suggestions[0].plant_name}
                </Text>
              </Card.Content>
              <Card.Cover source={{ uri: route.params.uri }} />
              <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <Chip icon="information" style={{ margin: 3 }}> {"Certainty: " + (plant.suggestions[0].probability * 100).toFixed(2) + "%"}</Chip>
                <Chip icon="sprout" style={{ margin: 3 }}> Status : {disease.health_assessment.is_healthy ? 'healthy' : 'unhealthy'} </Chip>
              </View>
            </Card>
          )}
          {disease?.health_assessment?.diseases && (
            <DiseasesList arr={disease.health_assessment.diseases}></DiseasesList>
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
        </ScrollView>
      </Provider>
    );
}
