import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';
import Header from './components/header/Header';
import CardTodo from './components/cardTodo/CardTodo';

const TODO_LIST = [
  { id: 1, title: 'Walk the dog', isCompleted: true },
  { id: 2, title: 'Take out the trash', isCompleted: false },
  { id: 3, title: 'Learn React Native', isCompleted: false },
];

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.app}>
          <View style={style.header}>
            <Header />
          </View>
          <View style={style.body}>
            <CardTodo todos={TODO_LIST} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={style.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default App;
