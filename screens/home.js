import { Center, Button } from 'native-base';

const Home = ({ navigation }) => {
    return (
        <Center flex={1}>
            <Button onPress={() => navigation.navigate('Form')}>
                Go to Form Screen
            </Button>
        </Center>
    );
};

export default Home;