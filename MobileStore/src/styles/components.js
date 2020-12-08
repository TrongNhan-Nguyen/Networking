import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export const component_styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    overflow: 'scroll',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'tomato',
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkbox_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    alignSelf: 'baseline',
  },
  input: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'tomato',
    alignSelf: 'stretch',
  },
  text_bottom: {
    alignSelf: 'center',
    overflow: 'hidden',
    fontSize: 15,
    marginTop: 10,
  },
  text_error: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'red',
  },
  text_sign_up: {
    color: 'tomato',
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
