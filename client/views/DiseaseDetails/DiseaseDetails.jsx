import * as React from 'react';
import { Text } from 'react-native-paper';
import Data from "./response.json";

export default function DiseaseDetails() {
    return (
        <>
            {Data.health_assessment.diseases.map(x => (<Text>{x.name}</Text>))}
        </>
    )
}