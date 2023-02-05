import { Card, Chip, Text } from "react-native-paper";

function DiseaseCard({ disease }) {
    return (
        <Card style={{marginTop:5}}>
            <Card.Content>
                <Text variant="titleLarge">{disease.name}</Text>
                <Chip style={{width:170}}> Probability : {disease.probability.toFixed(2)}% </Chip>
                <Text>{disease.disease_details?.description}</Text>
            </Card.Content>
        </Card>
    );
}

export function DiseasesList({arr}) {
    return (
        <>
            <Text variant="titleLarge"> Possible diseases :</Text>
            {arr.map((disease) => {
                if(disease.probability > 0.1)
                return <DiseaseCard disease={disease} />;
            })}
        </>
    );

}