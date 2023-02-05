import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Chip, Text, Card } from 'react-native-paper';
import Data from "./response.json";
import { List, MD3Colors } from 'react-native-paper';


export default function DiseaseDetails() {
    const disease = Data.health_assessment.diseases[0];
    return (
        <>
            <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between", flexWrap: true }}>
                <Text variant='headlineMedium' style={{ fontWeight: "bold" }}>{disease.name}</Text>
                <Chip icon="information">Certainty: {Math.round(disease.probability * 100)}</Chip>
            </View>
            <View style={{ padding: 10, flex: 1 }}>
                <Card>
                    <Card.Title titleStyle={{ fontWeight: "bold" }} title="Description" />
                    <Card.Content>
                        <Text variant="displatMedium">{disease.disease_details.description}</Text>
                    </Card.Content>
                </Card>
                <Text variant='titleLarge' style={{ fontWeight: "bold", marginTop: 15 }}>Treatments</Text>
                <ScrollView>
                    <Card style={{ margin: 5, padding: 5 }}>
                        <Card.Title titleStyle={{ fontWeight: "bold" }} title="Biological" />
                        <Card.Content>{disease.disease_details.treatment.biological.map((desc, i) => <List.Item style={{ paddingHorizontal: 5 }} descriptionNumberOfLines={5} description={desc} left={() => <List.Icon icon={`numeric-${i > 9 ? '9-plus' : i + 1}-circle`} />} />)}</Card.Content>
                    </Card>
                    <Card style={{ margin: 5, padding: 5 }}>
                        <Card.Title titleStyle={{ fontWeight: "bold" }} title="Chemical" />
                        <Card.Content>{disease.disease_details.treatment.chemical.map((desc, i) => <List.Item style={{ paddingHorizontal: 5 }} descriptionNumberOfLines={5} description={desc} left={() => <List.Icon icon={`numeric-${i > 9 ? '9-plus' : i + 1}-circle`} />} />)}</Card.Content>
                    </Card>
                    <Card style={{ margin: 5, padding: 5 }}>
                        <Card.Title titleStyle={{ fontWeight: "bold" }} title="Prevention" />
                        <Card.Content>{disease.disease_details.treatment.prevention.map((desc, i) => <List.Item style={{ paddingHorizontal: 5 }} descriptionNumberOfLines={5} description={desc} left={() => <List.Icon icon={`numeric-${i > 9 ? '9-plus' : i + 1}-circle`} />} />)}</Card.Content>
                    </Card>
                </ScrollView>

            </View>
        </>
    )
}