import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Product = (props) => {
  const navigation = useNavigation();
  const baseURL = 'http://10.0.2.2:3000/images/';
  const {item} = props;
  const onItemClick = () => {
    navigation.navigate('DETAIL',{item});
  };
  return (
    <TouchableOpacity onPress={onItemClick} style={styles.container}>
      <Image style={styles.image} source={{uri: `${baseURL}/${item.img}`}} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );
};

export default Product;
