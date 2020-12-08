import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Test = () => {
  const getAPI = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/test');
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const postAPI = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/sign-in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'nhan@gmail.com',
          password: '123456',
        }),
      });
      const json = await response.json();
      const code = response.status;
      console.log('response: ', json.data);
      console.log('code: ', code);
      return;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // getAPI();
    postAPI();
  }, []);
  return (
    <View>
      <Text>Test API</Text>
    </View>
  );
};

export default Test;
