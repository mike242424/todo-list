import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { style } from './BottomTabMenu.style.js';

const BottomTabMenu = ({
  todos,
  currentlySelectedTab,
  onSetCurrentlySelectedTab,
}) => {
  function getTextStyle(tabName) {
    return {
      fontWeight: 'bold',
      color: currentlySelectedTab === tabName ? '#2F76E5' : '#000',
    };
  }

  const inProgressTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  const countByStatus = {
    all: todos.length,
    inProgress: inProgressTodos.length,
    done: completedTodos.length,
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => onSetCurrentlySelectedTab('all')}>
        <Text style={getTextStyle('all')}>All ({countByStatus.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSetCurrentlySelectedTab('inProgress')}>
        <Text style={getTextStyle('inProgress')}>
          In Progress ({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSetCurrentlySelectedTab('done')}>
        <Text style={getTextStyle('done')}>Done ({countByStatus.done})</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabMenu;
