import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, icons} from '../constants';
import DropDownPicker from 'react-native-custom-dropdown';
import CheckBox from '@react-native-community/checkbox';
import RegisterStyle from '../assets/styles/RegisterStyle';
import countries from '../shared/countries.json'
import FastImage from 'react-native-fast-image';

let data = countries;

const Register = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <>
      <SafeAreaView style={RegisterStyle.SafeArea}>
        <View style={RegisterStyle.Container}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <FastImage source={icons.back} style={RegisterStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={RegisterStyle.LabelNew}>New Account</Text>
        </View>
      </SafeAreaView>
      <View style={RegisterStyle.ContainerReg}>
        <View style={RegisterStyle.ContainerEmail}>
          <Text style={RegisterStyle.Label}>Email Address</Text>
          <TextInput
            style={RegisterStyle.Input}
            placeholder="Your Email Address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />
        </View>

        <View>
          <Text style={RegisterStyle.Label}>Username</Text>
          <TextInput
            style={RegisterStyle.Input}
            placeholder="Username"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />
        </View>

        <View>
          <Text style={RegisterStyle.Label}>Name</Text>
          <TextInput
            style={RegisterStyle.Input}
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />
        </View>

        <View style={RegisterStyle.ContainerCountry}>
          <Text style={RegisterStyle.Label}>Country</Text>
          <DropDownPicker
            dropDownMaxHeight={250}
            items={data}
            // defaultValue={this.state.country}
            containerStyle={RegisterStyle.DropdownContainer}
            style={RegisterStyle.Input}
            itemStyle={RegisterStyle.DropdownItem}
            dropDownStyle={RegisterStyle.Dropdown}
            // onChangeItem={item => this.setState({
            //     country: item.value
            // })}
          />
        </View>

        <View>
          <Text style={RegisterStyle.Label}>Password</Text>
          <TextInput
            style={RegisterStyle.Input}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            secureTextEntry
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />
        </View>

        <View>
          <Text style={RegisterStyle.Label}>Retype Password</Text>
          <TextInput
            style={RegisterStyle.Input}
            placeholder="Retype Password"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            secureTextEntry
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />
        </View>

        <View style={RegisterStyle.ContainerTnC}>
          <CheckBox
            style={RegisterStyle.CheckBox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            onCheckColor={COLORS.primary}
            // onFillColor={COLORS.primary}
            onTintColor={COLORS.primary}
          />
          <Text style={RegisterStyle.LabelAgree}>I agree to the </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Forgot')}>
            <Text style={RegisterStyle.LabelTnC}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>

        <View style={RegisterStyle.ContainerBottom}>
          <TouchableOpacity style={RegisterStyle.ButtonRegister}>
            <Text style={RegisterStyle.LabelNotif}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Register;
