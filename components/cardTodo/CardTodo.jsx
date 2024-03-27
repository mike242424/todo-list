import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { style } from './CardTodo.style';
import checkedIcon from '../../assets/check.png';

const CardTodo = ({ todos, onUpdateTodoIsCompleted, onLongPress }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <View style={style.container} key={todo.id}>
            <TouchableOpacity
              style={style.card}
              key={todo.id}
              onPress={() => onUpdateTodoIsCompleted(todo.id)}
              onLongPress={() => onLongPress(todo)}
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
