import { VStack, Input, Center } from "native-base";

const FormScreen = () => {
    return (
        <Center>
            <VStack space={4} w="75%" maxW="300px" m={12}>
                <Input variant="outline" placeholder="Nama Lengkap" />
                <Input variant="outline" placeholder="Email" />
                <Input variant="outline" placeholder="Alamat" />
                <Input variant="outline" placeholder="Nomor Polisi: L 1234 AG" />
            </VStack>
        </Center>
    );
};

export default FormScreen;