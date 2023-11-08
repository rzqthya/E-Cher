import { NativeBaseProvider } from "native-base";
import Header from "./components/header";
import EditProfile from "./screens/edit-profile";

const App = () => {
  return (
    <NativeBaseProvider>
      <Header title="Edit Profile" />
      <EditProfile />
    </NativeBaseProvider>
  );
};

export default App;