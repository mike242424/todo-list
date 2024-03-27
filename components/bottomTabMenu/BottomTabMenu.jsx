import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { style } from './BottomTabMenu.style.js';

const BottomTabMenu = ({ currentlySelectedTab, onSetCurrentlySelectedTab }) => {
  function getTextStyle(tabName) {
    return {
      fontWeight: 'bold',
      color: currentlySelectedTab === tabName ? '#2F76E5' : '#000',
    };
  }
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => onSetCurrentlySelectedTab('all')}>
        <Text style={getTextStyle('all')}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSetCurrentlySelectedTab('inProgress')}>
        <Text style={getTextStyle('inProgress')}>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSetCurrentlySelectedTab('done')}>
        <Text style={getTextStyle('done')}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabMenu;
