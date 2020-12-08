import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Appbar, Button, Divider, Menu} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {SIGN_IN} from '../../../../constant/pageName';
import {showSearchbar} from '../../../../redux/actions/searchbar';

const AppBar = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = () => {
    closeMenu();
    navigation.navigate('CART');
  };

  const sign_out = () => {
    closeMenu();
    navigation.navigate(SIGN_IN);
  };
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Appbar.Header style={{backgroundColor: 'tomato'}}>
      <Appbar.Content title="Mobile store" />
      <Appbar.Action icon="magnify" onPress={() => dispatch(showSearchbar())} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button color="black" onPress={openMenu}>
            More
          </Button>
        }>
        <Menu.Item onPress={cart} icon="cart" title="Cart" />
        <Divider />
        <Menu.Item onPress={sign_out} icon="logout-variant" title="Sign out" />
      </Menu>
    </Appbar.Header>
  );
};

export default AppBar;
