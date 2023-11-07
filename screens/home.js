import { Center, Button } from 'native-base';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    
    return (
        <Center flex={1}>
            <Button onPress={() => navigation.navigate('Form')}>
                Go to Form Screen
            </Button>
        </Center>
    );
};

export default Home;