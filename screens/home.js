import { Center, Button } from 'native-base';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    
    return (
        <Center flex={1}>
            <Button 
                onPress={() => navigation.navigate('Form')} 
                bg="#F82F2D" 
                _pressed={{ bg: "gray.400" }}
            >
                Klaim E-Voucher Wilayah Sidoarjo
            </Button>
        </Center>
    );
};

export default Home;