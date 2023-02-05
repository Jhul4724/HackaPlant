import * as React from 'react';
import { View } from 'react-native';
import { Button, Chip, Text, Card } from 'react-native-paper';
import Data from "./response.json";

export default function DiseaseDetails() {
    const disease = Data.health_assessment.diseases[0];
    return (
        <>
            <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between", flexWrap: true }}>
                <Text variant='headlineMedium' style={{ fontWeight: "bold" }}>{disease.name}</Text>
                <Chip icon="information">Certainty: {Math.round(disease.probability * 100)}</Chip>
            </View>
            <View style={{ padding: 10 }}>
                <Card>
                    <Card.Title style={{ fontWeight: "bold" }} title="Description" />
                    <Card.Content>
                        <Text variant="displatMedium">{Data.health_assessment.diseases[0].disease_details.description}</Text>
                    </Card.Content>
                </Card>
                <Text variant='titleMedium' style={{ fontWeight: "bold" }}>{Data.health_assessment.is_healthy ? "Possibile diseases" : "Diseases detected"}</Text>

            </View>
        </>
    )
}