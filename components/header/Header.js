import { Image, Text, View } from 'react-native';
import logo from '../../assets/logo.png';
import { style } from './Header.style';

const Header = () => {
  return (
    <View>
      <Image style={style.image} source={logo} resizeMode="contain" />
      <Text style={style.text}>You probably have something to do</Text>
    </View>
  );
};

export default Header;
