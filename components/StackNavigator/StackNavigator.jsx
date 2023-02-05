import { createStackNavigator } from "@react-navigation/stack";
import Diagnosis from "../../views/Diagnosis/Diagnosis";
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