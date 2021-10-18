import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {MMKV} from 'react-native-mmkv';

import {icons, images} from '../constants';

import auth from '../shared/api/authentication';
import LoginStyle from '../assets/styles/LoginStyle';

const initialState = {
  username: 'me@nurulhidayat.com',
  password: '@PitoDev123',
  errors: {},
  isAuthorized: false,
  isLoading: false,
};

class Login extends Component {
  state = initialState;

  componentWillUnmount() {}

  handleUsernameChange = (username) => {
    this.setState({username});
  };

  handlePasswordChange = (password) => {
    this.setState({password});
  };

  onPressLogin() {
    const {username, password} = this.state;
    const payload = {email: username, password: password};

    // Show spinner when call is made
    this.setState({isLoading: true});
    auth
      .login(payload)
      .then((res) => {
        console.log(res);
        MMKV.set('token', res.token);
        this.setState({isLoading: false, isAuthorized: true});
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
        this.setState({errors: error, isLoading: false});
      });
  }

  getNonFieldErrorMessage() {
    let message = null;
    const {errors} = this.state;
    if (errors.non_field_errors) {
      message = (
        <View style={LoginStyle.ErrorMessageContainer}>
          {errors.non_field_errors.map((item) => (
            <Text style={LoginStyle.ErrorMessageText} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  getErrorMessageByField(field) {
    // Checks for error message in specified field Shows error message from backend
    let message = null;
    if (this.state.errors[field]) {
      message = (
        <View style={LoginStyle.ErrorMessageContainer}>
          {this.state.errors[field].map((item) => (
            <Text style={LoginStyle.ErrorMessageText} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  render() {
    const {isLoading} = this.state;

    return (
      <SafeAreaView style={LoginStyle.SafeArea}>
        <Spinner visible={isLoading} />

        <View style={LoginStyle.ContainerHeader}>
          <Image source={images.logo} style={LoginStyle.LogoType} />
          <Image source={images.SnapNReview} style={LoginStyle.Logo} />
        </View>
        <View style={LoginStyle.ContainerBody}>
          <Image style={LoginStyle.UserIcon} source={icons.user} />
          <TextInput
            style={LoginStyle.Input}
            value={this.state.username}
            placeholder="Username or Email Address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.wrappedInstance.focus()}
            onChangeText={this.handleUsernameChange}
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />

          {this.getErrorMessageByField('username')}
        </View>

        <View style={LoginStyle.ContainerFooter}>
          <Image style={LoginStyle.KeyholeIcon} source={icons.keyhole} />
          <View>
            <TextInput
              ref={(node) => {
                this.passwordInput = node;
              }}
              style={LoginStyle.Input}
              value={this.state.password}
              placeholder="Password"
              onChangeText={this.handlePasswordChange}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              blurOnSubmit
              onSubmitEditing={this.onPressLogin.bind(this)}
              secureTextEntry
              underlineColorAndroid="transparent"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text style={LoginStyle.LabelForgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          {this.getErrorMessageByField('password')}
        </View>

        {this.getNonFieldErrorMessage()}

        <TouchableOpacity
          style={LoginStyle.LoginButton}
          onPress={this.onPressLogin.bind(this)}>
          {/* onPress={() => {
            this.props.navigation.navigate('Home');
          }}> */}
          <Text style={LoginStyle.LabelLogin}>Login</Text>
        </TouchableOpacity>
        <Text style={LoginStyle.LabelNotMember}>Not a member yet?</Text>
        <TouchableOpacity
          style={LoginStyle.RegisButton}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={LoginStyle.LabelNew}>New Account</Text>
        </TouchableOpacity>
        <Text style={LoginStyle.LabelContinue}>Or continue with</Text>
        <View style={LoginStyle.ContainerSosmed}>
          <Image source={icons.fb} style={LoginStyle.ImageFb} />
          <Image source={icons.google} style={LoginStyle.ImageGoogle} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
