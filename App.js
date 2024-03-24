import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>App</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
