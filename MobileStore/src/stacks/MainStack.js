import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HOME, SIGN_IN, SIGN_UP} from '../constant/pageName';
import CartList from '../pages/CartList';
import Home from '../pages/home';
import ProductDetail from '../pages/home/components/ProductDetail';
import Sign_In from '../pages/sign-in';
import Sign_Up from '../pages/sign-up';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen
          name={SIGN_IN}
          component={Sign_In}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name={SIGN_UP}
          component={Sign_Up}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="DETAIL"
          component={ProductDetail}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="CART"
          component={CartList}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
