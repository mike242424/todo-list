import { Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';
import Header from './components/header/Header';
import CardTodo from './components/cardTodo/CardTodo';
import { useEffect, useState } from 'react';
import BottomTabMenu from './components/bottomTabMenu/BottomTabMenu';
import AddButton from './components/addButton/AddButton';
import Dialog from 'react-native-dialog';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

let isFirstRender = true;
let isLoadUpdate = false;

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [currentlySelectedTab, setCurrentlySelectedTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getTodoList();
  }, []);

  useEffect(() => {
    // code for removing extra saveTodoList() renders
    if (!isLoadUpdate) {
      if (!isFirstRender) {
        saveTodoList();
      } else {
        isFirstRender = false;
      }
    } else {
      isLoadUpdate = false;
    }
  }, [todoList]);

  async function saveTodoList() {
    try {
      console.log('save');
      const jsonTodoList = JSON.stringify(todoList);
      await AsyncStorage.setItem('todoList', jsonTodoList);
    } catch (e) {
      alert(err);
    }
  }

  async function getTodoList() {
    try {
      console.log('get');
      const jsonTodoList = await AsyncStorage.getItem('todoList');
      const parsedTodoList = JSON.parse(jsonTodoList);
      setTodoList(parsedTodoList || []);
      isLoadUpdate = true;
    } catch (e) {
      alert(err);
    }
  }

  function addTodo() {
    setTodoList([
      ...todoList,
      {
        id: uuid.v4(),
        title: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue('');
    setIsVisible(false);
  }

  function showAddTodoDialog() {
    setIsVisible(true);
  }

  function closeAddTodoDialog() {
    setIsVisible(false);
  }

  function getFilteredList() {
    switch (currentlySelectedTab) {
      case 'all':
        return todoList;
      case 'inProgress':
        return todoList.filter((todo) => !todo.isCompleted);
      case 'done':
        return todoList.filter((todo) => todo.isCompleted);
      default:
        break;
    }
  }

  function updateTodoIsCompleted(id) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });

    setTodoList(updatedTodos);
  }

  function deleteTodo(todo) {
    Alert.alert('Delete todo?', 'Are you sure you want to delete this todo?', [
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setTodoList(
            todoList.filter((filteredTodo) => todo.id !== filteredTodo.id),
          );
        },
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
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
                onUpdateTodoIsCompleted={updateTodoIsCompleted}
                todos={getFilteredList()}
                onSetTodos={setTodoList}
                onLongPress={deleteTodo}
              />
            </ScrollView>
          </View>
          <AddButton onPress={showAddTodoDialog} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={style.footer}>
        <BottomTabMenu
          todos={todoList}
          currentlySelectedTab={currentlySelectedTab}
          onSetCurrentlySelectedTab={setCurrentlySelectedTab}
        />
      </View>

      <Dialog.Container
        visible={isVisible}
        onBackdropPress={closeAddTodoDialog}
      >
        <Dialog.Title>Add New Todo</Dialog.Title>
        <Dialog.Description>CHoose a name for your todo</Dialog.Description>
        <Dialog.Input
          placeholder="Ex: Go to the gym"
          onChangeText={setInputValue}
        />
        <Dialog.Button
          label="Cancel"
          onPress={closeAddTodoDialog}
          color="grey"
        />
        <Dialog.Button
          disabled={!inputValue}
          label="Add"
          onPress={() => addTodo(inputValue)}
        />
      </Dialog.Container>
    </>
  );
};

export default App;
