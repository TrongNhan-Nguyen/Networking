import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useSelector} from 'react-redux';
const Cart = (props) => {
  const {item, removeItem} = props;
  const handleRemoveItem = () => {
    if (removeItem) {
      removeItem(item);
    }
    return;
  };
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.desc}>Name: {item.name}</Text>
        <Text style={styles.desc}>Price: {item.price}</Text>
      </View>
      <TouchableOpacity onPress={handleRemoveItem} style={styles.remove}>
        <Icon size={25} color="red" name="shopping-basket-remove" />
      </TouchableOpacity>
    </View>
  );
};
const CartList = () => {
  const [cartList, setCartList] = useState([]);
  const user = useSelector((state) => state.user);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();
  const getList = async () => {
    try {
      const response = await fetch(
        `http://10.0.2.2:3000/cart/cartList?userID=${user._id}`,
      );
      const result = await response.json();
      setCartList(result.data);
      const tempList = [...result.data];
      let temp = 0;
      for (let i = 0; i < tempList.length; i++) {
        temp += Number(tempList[i].price);
      }
      setTotal(temp);
    } catch (error) {
      console.log(error);
    }
  };
  const removeItem = async (item) => {
    try {
      const response = await fetch(
        `http://10.0.2.2:3000/cart/delete?userID=${user._id}&productID=${item._id}`,
      );
      const code = response.status;
      if (code == 201) {
        const index = cartList.findIndex((product) => product._id == item._id);
        if (index >= 0) {
          const tempList = [...cartList];
          tempList.splice(index, 1);
          setCartList(tempList);
          let temp = 0;
          for (let i = 0; i < tempList.length; i++) {
            temp += Number(tempList[i].price);
          }
          setTotal(temp);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const purchase = async () => {
    try {
      const response = await fetch(
        `http://10.0.2.2:3000/cart/clear?userID=${user._id}`,
      );
      const code = response.status;
      console.log(code);
      if (code == 201) {
        const tempList = [];
        setCartList(tempList);
        setTotal(0);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const back = () => {
    navigation.navigate('HOME');
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 9}}>
        <FlatList
          data={cartList}
          renderItem={({item}) => <Cart removeItem={removeItem} item={item} />}
          keyExtractor={(item) => item._id}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.total_price}>Total Price: {total}vnd</Text>
        <TouchableOpacity
          onPress={purchase}
          style={styles.btn_purchase}>
          <Text style={styles.btn_purchase_text}>Purchase</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={back}
          style={styles.btn_purchase}>
          <Text style={styles.btn_purchase_text}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 9,
  },
  desc: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  remove: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
  },
  total_price: {
    flex: 6,
    color: 'black',
    fontWeight: 'bold',
  },
  btn_purchase_text: {
    color: 'red',
    fontWeight: 'bold',
  },
  btn_purchase: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CartList;
