import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Heading, Center } from "native-base";
import { Header } from "../components";
import Active from "./active";
import Used from "./used";

const Tab = createMaterialTopTabNavigator();

const History = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Active" component={Active} />
            <Tab.Screen name="Used" component={Used} />
        </Tab.Navigator>
    );
};

export default History;