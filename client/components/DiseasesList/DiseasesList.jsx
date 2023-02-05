import { Card, Chip, Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";


function DiseaseCard({ disease }) {
    const navigation = useNavigation();
    return (
        <Card style={{marginTop:5}}>
            <Card.Content>
                <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between", flexWrap: true }}>
                <Text variant="titleLarge" style={{fontWeight:"bold"}}>{disease.name}</Text>
                <Chip icon="information"> Probability : {(disease.probability * 100).toFixed(2)}% </Chip>
                </View>
                <Text>{disease.disease_details?.description}</Text>
            </Card.Content>
            <Card.Actions>
                {console.log(disease)}
                <Button onPress={() => {navigation.navigate("Disease Details", {disease})}}> Check details </Button>
            </Card.Actions>
        </Card>
    );
}

export function DiseasesList({arr}) {
    return (
        <>
            <Text variant="titleLarge" style={{fontWeight:"bold"}}> Possible diseases :</Text>
            {arr.map((disease) => {
                if(disease.probability > 0.1)
                return <DiseaseCard disease={disease} />;
            })}
        </>
    );

}