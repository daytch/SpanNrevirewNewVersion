import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {icons} from '../constants';
import SettingStyle from '../assets/styles/SettingStyle';
import FastImage from 'react-native-fast-image';

const Setting = ({route, navigation}) => {
  const {id} = route.params;
  const [currentPassword, setCurrentPassword] = useState('123456');
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [passwordActive, setPasswordActive] = useState(true);
  const [newPasswordActive, setNewPasswordActive] = useState(false);

  const renderConnectButton = () => {
    return (
      <TouchableOpacity style={SettingStyle.ButtonSosmed}>
        <Text style={SettingStyle.LabelConnect}>Connect</Text>
      </TouchableOpacity>
    );
  };

  const renderConnectedButton = () => {
    return (
      <TouchableOpacity style={SettingStyle.ButtonSosmedActive} disabled={true}>
        <Text style={SettingStyle.LabelConnectActive}>Connected</Text>
      </TouchableOpacity>
    );
  };
  const HideText = (isSave) => {
    setPasswordActive(!passwordActive);
    setCurrentPassword(isSave ? password : currentPassword);
    setPassword(isSave ? password : '');
    setNewPasswordActive(false);
  };
  const onChangeCurrentPassword = (e) => {
    console.log(e);
    if (e === 'test123') {
      setNewPasswordActive(true);
    }
    setCurrentPassword(e);
  };
  const onChangeNewPassword = (e) => {
    setNewPasswordActive(true);
    setPassword(e);
  };
  return (
    <>
      <SafeAreaView style={SettingStyle.SafeArea}>
        <View style={SettingStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage source={icons.back} style={SettingStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={SettingStyle.LabelHeader}>Settings</Text>
        </View>
      </SafeAreaView>

      <View style={SettingStyle.ContainerPhoto}>
        <View>
          {passwordActive ? (
            <Text style={SettingStyle.Label}>Change Password</Text>
          ) : newPasswordActive ? (
            <>
              <Text style={SettingStyle.Label}>New Password</Text>
              <TextInput
                style={SettingStyle.InputPassword}
                autoFocus={true}
                value={password}
                secureTextEntry={true}
                placeholder="New Password"
                onChangeText={(text) => onChangeNewPassword(text)}
              />
              <TextInput
                style={SettingStyle.InputPassword}
                autoFocus={true}
                value={passwordConfirm}
                secureTextEntry={true}
                placeholder="Re-type Password"
                onChangeText={(text) => onChangeNewPassword(text)}
              />
            </>
          ) : (
            <>
              <Text style={SettingStyle.Label}>Current Password</Text>
              <TextInput
                style={SettingStyle.InputPassword}
                autoFocus={false}
                value={currentPassword}
                secureTextEntry={true}
                placeholder="Current Password"
                onChangeText={(text) => onChangeCurrentPassword(text)}
              />
            </>
          )}
        </View>
        <View style={SettingStyle.ContainerAction}>
          {passwordActive ? (
            <TouchableOpacity onPress={() => HideText()}>
              <FastImage
                source={icons.pencil_edit}
                style={SettingStyle.IconPencil}
              />
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={() => HideText()}>
                <FastImage source={icons.check} style={SettingStyle.IconCheck} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => HideText()}>
                <FastImage source={icons.close} style={SettingStyle.IconClose} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <View style={SettingStyle.ContainerPhoto}>
        <Text style={SettingStyle.Label}>Help</Text>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{alignSelf: 'center'}}>
          <FastImage source={icons.arrow_right} style={SettingStyle.IconArrow} />
        </TouchableOpacity>
      </View>

      <View style={SettingStyle.ContainerPhoto}>
        <Text style={SettingStyle.Label}>About</Text>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{alignSelf: 'center'}}>
          <FastImage source={icons.arrow_right} style={SettingStyle.IconArrow} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={SettingStyle.ButtonSignOut}>
        <Text style={SettingStyle.LabelNotif}>Sign Out</Text>
      </TouchableOpacity>
    </>
  );
};

export default Setting;
