import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SIGN_IN} from '../../constant/pageName';
import {component_styles} from '../../styles/components';
const Sign_Up = ({navigation}) => {
  const [displayName, setDisplayName] = useState('Nguyen Thi Kim Ngan');
  const [email, setEmail] = useState('ngan@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const submit = () => {
    isValidate();
    if (!isValidate()) return;
    signUp();
  };
  const signUp = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/sign-up', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: displayName,
          email,
          password,
        }),
      });
      const result = await response.json();
      const code = response.status;
      if (code == 200) {
        setError('Sign up successfully! Please sign in to continue');
      } else {
        setError(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const sign_in = () => {
    navigation.navigate(SIGN_IN);
  };
  const isValidate = () => {
    if (!displayName || !email || !password) {
      setError('All field is require, pleas fill up this form');
      return false;
    }
    if (password.length < 6) {
      setError('The password must contain at least 6 characters');
      return false;
    }
    setError('');
    return true;
  };
  return (
    <View style={component_styles.container}>
      <Text style={component_styles.title}>Sign up with us !</Text>
      <TextInput
        style={component_styles.input}
        placeholder="Display name"
        value={displayName}
        onChangeText={(text) => setDisplayName(text)}
      />
      <TextInput
        style={component_styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={component_styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      {error ? <Text style={component_styles.text_error}>{error}</Text> : null}
      <TouchableOpacity
        onPress={submit}
        style={component_styles.button}
        delayPressIn={0.2}
        activeOpacity={0.7}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text style={component_styles.text_bottom}>
        Already have an account?
        <Text style={component_styles.text_sign_up} onPress={sign_in}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

export default Sign_Up;
