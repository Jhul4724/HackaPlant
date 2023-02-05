import { createStackNavigator } from "@react-navigation/stack";
import Activity from "../../views/Activity/Activity";
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
            <Stack.Screen
                name="Disease Details"
                component={DiseaseDetails}
            />
        </Stack.Navigator>
    );
}

export { HomeScreenNavigator };

const ActivityNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Activity"
                component={Activity}
            />
        </Stack.Navigator>
    )
}

export { ActivityNavigator };