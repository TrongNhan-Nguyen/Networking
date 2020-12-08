import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import Product from '../Product';

const ProductList = () => {
  const [data, setData] = useState([]);
  const category = useSelector((state) => state.filter);
  const getList = async () => {
    try {
      const response = await fetch(
        `http://10.0.2.2:3000/product/products?cate=${category}`,
      );
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, [category]);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => <Product item={item} />}
        numColumns={2}
        keyExtractor={(item) => item._id}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-evenly'}}
      />
    </View>
  );
};

export default ProductList;
