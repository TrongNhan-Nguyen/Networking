import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { hideSearchbar } from '../../../../redux/actions/searchbar';

const SearchBar = () => {
  const [filters, setFilters] = useState('');
  const dispatch = useDispatch();

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={(text) => setFilters(text)}
      value={filters}
      icon="close-box"
      onIconPress={() => dispatch(hideSearchbar())}
    />
  );
};

export default SearchBar;
