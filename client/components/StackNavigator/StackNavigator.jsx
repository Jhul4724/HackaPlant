import { createStackNavigator } from "@react-navigation/stack";
import Diagnosis from "../../views/Diagnosis/Diagnosis";
import DiseaseDetails from "../../views/DiseaseDetails/DiseaseDetails";
import Home from "../../views/Home/Home";
import CameraComponent from "../Camera/Camera";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Camera"
                component={CameraComponent}
            />
            <Stack.Screen
                name="Diagnosis"
                component={Diagnosis}
            />
        </Stack.Navigator>
    );
}

export { HomeScreenNavigator };

const TempNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Disease Details"
                component={DiseaseDetails}
            />
        </Stack.Navigator>
    )
}

export { TempNavigator };