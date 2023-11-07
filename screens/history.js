import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Active from "./active";
import Used from "./used";

const Tab = createMaterialTopTabNavigator();

const History = () => {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarLabelStyle: { fontWeight: "bold" }, 
                tabBarIndicatorStyle: { backgroundColor: "#F82F2D" }, 
        }}>
            <Tab.Screen name="Active" component={Active} />
            <Tab.Screen name="Used" component={Used} />
        </Tab.Navigator>
    );
};

export default History;