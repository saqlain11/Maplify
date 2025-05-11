import {GeneralProvider} from '@Maplify/context';
import {Landing} from '@Maplify/screen';

function App(): React.JSX.Element {
  return (
    <GeneralProvider>
      <Landing />
    </GeneralProvider>
  );
}

export default App;
