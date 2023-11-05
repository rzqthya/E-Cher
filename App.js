import { NativeBaseProvider } from "native-base";
import Header from "./components/header";
import FormScreen from "./screens/form";

const App = () => {
  return (
    <NativeBaseProvider>
      <Header title="Form Klaim Voucher" />
      <FormScreen />
    </NativeBaseProvider>
  );
};

export default App;