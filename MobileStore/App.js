import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import CartList from './src/pages/CartList';
import Home from './src/pages/home';
import Product from './src/pages/home/components/Product';
import ProductDetail from './src/pages/home/components/ProductDetail';
import ProductList from './src/pages/home/components/ProductList';
import Sign_In from './src/pages/sign-in';
import Sign_Up from './src/pages/sign-up';
import store from './src/redux/store';
import MainStack from './src/stacks/MainStack';
import Test from './Test';

const App = () => {
  return (
    <Provider store={store}>
  
      <MainStack/>
    
    </Provider>
  );
};

export default App;
