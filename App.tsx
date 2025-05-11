import {GeneralProvider} from '@Maplify/context';
import {Landing} from '@Maplify/screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): React.JSX.Element {
  AsyncStorage.clear();
  return (
    <GeneralProvider>
      <Landing />
    </GeneralProvider>
  );
}

export default App;
