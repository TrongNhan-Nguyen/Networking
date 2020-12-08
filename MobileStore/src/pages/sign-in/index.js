import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {HOME, SIGN_UP} from '../../constant/pageName';
import {signIn_Action} from '../../redux/actions/user';
import {component_styles} from '../../styles/components';
const Sign_In = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('nhan@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const sign_up = () => {
    navigation.navigate(SIGN_UP);
  };
  const submit = () => {
    isValidate();
    if (!isValidate()) return;
    signIn();
  };
  const goHome = () => {
    navigation.navigate(HOME);
  };
  const signIn = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/sign-in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();
      const code = response.status;
      if (code == 201) {
        setError('');
        dispatch(signIn_Action(result.data));
        navigation.navigate(HOME);
      } else {
        setError(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const isValidate = () => {
    if (!email) {
      setError('Email can not be empty');
      return false;
    } else if (!password) {
      setError('Password can not be empty');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <View style={component_styles.container}>
      <Text style={component_styles.title}>Welcome to Mobile Store !</Text>
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
      <View
        style={component_styles.checkbox_container}
        onStartShouldSetResponder={() => {
          setChecked(!checked);
        }}>
        <Checkbox status={checked ? 'checked' : 'unchecked'} color="tomato" />
        <Text>Remember me?</Text>
      </View>
      <TouchableOpacity
        onPress={submit}
        style={component_styles.button}
        delayPressIn={0.2}
        activeOpacity={0.7}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={goHome}
        style={component_styles.button}
        delayPressIn={0.2}
        activeOpacity={0.7}>
        <Text>Go Home</Text>
      </TouchableOpacity>

      <Text style={component_styles.text_bottom}>
        Don't have account?
        <Text style={component_styles.text_sign_up} onPress={sign_up}>
          Sign up now
        </Text>
      </Text>
    </View>
  );
};

export default Sign_In;
