import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';
import Header from './components/header/Header';
import CardTodo from './components/cardTodo/CardTodo';
import { useState } from 'react';
import BottomTabMenu from './components/bottomTabMenu/BottomTabMenu';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Walk the dog', isCompleted: true },
    { id: 2, title: 'Take out the trash', isCompleted: false },
    { id: 3, title: 'Learn React Native', isCompleted: false },
    { id: 4, title: 'Walk the dog', isCompleted: true },
    { id: 5, title: 'Take out the trash', isCompleted: false },
    { id: 6, title: 'Learn React Native', isCompleted: false },
    { id: 7, title: 'Walk the dog', isCompleted: true },
    { id: 8, title: 'Take out the trash', isCompleted: false },
    { id: 9, title: 'Learn React Native', isCompleted: false },
  ]);
  const [currentlySelectedTab, setCurrentlySelectedTab] = useState('all');

  function updateTodos(id) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });

    setTodoList(updatedTodos);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.app}>
          <View style={style.header}>
            <Header />
          </View>
          <View style={style.body}>
            <ScrollView>
              <CardTodo
                onUpdateTodos={updateTodos}
                todos={todoList}
                onSetTodos={setTodoList}
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={style.footer}>
        <BottomTabMenu
          currentlySelectedTab={currentlySelectedTab}
          onSetCurrentlySelectedTab={setCurrentlySelectedTab}
        />
      </View>
    </>
  );
};

export default App;
