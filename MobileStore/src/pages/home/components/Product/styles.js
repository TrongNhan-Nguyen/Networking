import {
    Dimensions,
    StyleSheet
} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height / 3,
    width: width / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  image: {
    height: 150,
    width: 150,
  },
});
export default styles;