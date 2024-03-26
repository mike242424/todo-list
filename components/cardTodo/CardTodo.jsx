import { Image, Text, TouchableOpacity, View } from 'react-native';
import { style } from './CardTodo.style';
import checkedIcon from '../../assets/check.png';

const CardTodo = ({ todos, onUpdateTodos }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <View style={style.container}>
            <TouchableOpacity
              style={style.card}
              key={todo.id}
              onPress={() => onUpdateTodos(todo.id)}
            >
              <Text
                style={[
                  style.text,
                  todo.isCompleted && { textDecorationLine: 'line-through' },
                ]}
              >
                {todo.title}
              </Text>
              {todo.isCompleted && (
                <Image style={style.icon} source={checkedIcon} />
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};

export default CardTodo;
