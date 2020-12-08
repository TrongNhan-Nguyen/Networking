import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Provider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ALL, APPLE, OPPO, SAMSUM} from '../../constant/pageName';
import {setFilters} from '../../redux/actions/filter';
import AppBar from './components/AppBar';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
const Tab = createMaterialTopTabNavigator();
const Home = () => {
  const searchbar = useSelector((state) => state.searchbar.show);
  const dispatch = useDispatch();
  return (
    <Provider>
      {searchbar ? <SearchBar /> : <AppBar />}
      <Tab.Navigator initialRouteName={ALL}>
        <Tab.Screen
          name={ALL}
          listeners={{
            focus: (e) => {
              dispatch(setFilters('All'));
            },
          }}
          component={ProductList}
        />
        <Tab.Screen
          name={APPLE}
          listeners={{
            focus: (e) => {
              dispatch(setFilters('Apple'));
            },
          }}
          component={ProductList}
        />
        <Tab.Screen
          name={SAMSUM}
          listeners={{
            focus: (e) => {
              dispatch(setFilters('Samsum'));
            },
          }}
          component={ProductList}
        />
        <Tab.Screen
          name={OPPO}
          listeners={{
            focus: (e) => {
              dispatch(setFilters('Oppo'));
            },
          }}
          component={ProductList}
        />
      </Tab.Navigator>
    </Provider>
  );
};

export default Home;
