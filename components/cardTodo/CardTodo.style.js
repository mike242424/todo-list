import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 13,
    height: 115,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 5,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
