import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { style } from './AddButton.style';

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Text style={style.text}>Add Todo</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
