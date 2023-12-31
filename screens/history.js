import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Active from "./active";
import Used from "./used";

const Tab = createMaterialTopTabNavigator();

const History = () => {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarLabelStyle: { fontWeight: "bold" }, 
                tabBarIndicatorStyle: { backgroundColor: "#D32324" }, 
        }}>
            <Tab.Screen name="Active" component={Active} />
            <Tab.Screen name="Used" component={Used} />
        </Tab.Navigator>
    );
};

export default History;