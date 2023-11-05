import { NativeBaseProvider } from "native-base";
import Header from "./components/header";
import DetailScreen from "./screens/DetailScreen";

const App = () => {
  return (
    <NativeBaseProvider>
      <Header title="Detail Voucher" />
      <DetailScreen />
    </NativeBaseProvider>
  );
};

export default App;