import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetail = (props) => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);
  const [msg, setMsg] = useState('');
  const {item} = props.route.params;
  const buy = async () => {
    try {
      if (!user) {
        setMsg('Please sign in to complete the action');
      }
      const response = await fetch('http://10.0.2.2:3000/cart/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: user._id,
          productID: item._id,
        }),
      });
      const code = response.status;
      if (code == 201) {
        setMsg('Added product to your cart');
      } else {
        setMsg(`${item.name} is already exists in your cart`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const back = () => {
    navigation.navigate('HOME');
  };
  const cart = () => {
    if (!user) {
      setMsg('Please sign in to complete the action');
    }
    navigation.navigate('CART')
  };
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `http://10.0.2.2:3000/images/${item.img}`,
        }}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      <Text style={styles.name}>Price: {item.price}$</Text>
      <Text style={styles.msg}>{msg}</Text>
      <TouchableOpacity delayPressIn={0.2} style={styles.button} onPress={buy}>
        <Text>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity delayPressIn={0.2} style={styles.button} onPress={cart}>
        <Text>Your Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity delayPressIn={0.2} style={styles.button} onPress={back}>
        <Text>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: width,
    height: 180,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    margin: 5,
  },
  desc: {
    fontSize: 15,
    marginHorizontal: 10,
  },
  msg: {
    fontWeight: 'bold',
    color: 'red',
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ProductDetail;
