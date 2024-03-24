import { Image, Text, TouchableOpacity } from 'react-native';
import { style } from './CardTodo.style';
import checkedIcon from '../../assets/check.png';

const CardTodo = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <TouchableOpacity style={style.card} key={todo.id}>
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
        );
      })}
    </>
  );
};

export default CardTodo;
