import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Active from "./active";
import Used from "./used";
// import DetailScreen from "./DetailScreen";

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
            {/* <Tab.Screen name="DetailScreen" component={DetailScreen} /> */}
        </Tab.Navigator>
    );
};

export default History;