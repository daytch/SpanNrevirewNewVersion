import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ForgotStyle from '../assets/styles/ForgotStyle';
import {icons} from '../constants';
import FastImage from 'react-native-fast-image';

const Forgot = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={ForgotStyle.SafeArea}>
        <View style={ForgotStyle.containerHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <FastImage source={icons.back} style={ForgotStyle.LoginImage} />
          </TouchableOpacity>
          <Text style={ForgotStyle.ForgotText}>Forgot Password</Text>
        </View>
      </SafeAreaView>
      <View style={ForgotStyle.ContainerBody}>
        <Text style={ForgotStyle.LabelForgot}>Forgot Password?</Text>
        <Text style={ForgotStyle.LabelEmail}>
          Enter Your Registered Email Address
        </Text>
        <TextInput
          style={ForgotStyle.Input}
          placeholder="Your Email Address"
          // onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          blurOnSubmit
          // onSubmitEditing={this.onPressLogin.bind(this)}
          secureTextEntry
          underlineColorAndroid="transparent"
          placeholderTextColor="#999"
        />

        <View style={ForgotStyle.ContainerSubmit}>
          <TouchableOpacity style={ForgotStyle.ButtonSubmit}>
            <Text style={ForgotStyle.LabelSubmit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Forgot;
