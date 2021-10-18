import React, {useState} from 'react';
import {Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {icons, images} from '../constants';
import ProfileEditStyle from '../assets/styles/ProfileEditStyle';
import {Avatar} from 'react-native-elements';
import {launchImageLibrary} from 'react-native-image-picker';
import {TextInput} from 'react-native-gesture-handler';
import countries from '../shared/countries.json';
import DropDownPicker from 'react-native-custom-dropdown';
import FastImage from 'react-native-fast-image';

let dataCountries = countries;

const ProfileEdit = ({route, navigation}) => {
  const {id} = route.params;
  const [usernameActive, setUsernameActive] = useState(true);
  const [usernameOld, setUsernameOld] = useState('daytch');
  const [username, setUsername] = useState('daytch');
  const [nameActive, setNameActive] = useState(true);
  const [nameOld, setNameOld] = useState('Nurul Hidayat');
  const [name, setName] = useState('Nurul Hidayat');
  const [countryActive, setCountryActive] = useState(true);
  const [countryOld, setCountryOld] = useState('Indonesia');
  const [country, setCountry] = useState('Indonesia');
  const [countryKey, setCountryKey] = useState('ID');
  const [bioActive, setBioActive] = useState(true);
  const [bioOld, setBioOld] = useState(
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame.',
  );
  const [bio, setBio] = useState(
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame.',
  );

  const renderConnectButton = () => {
    return (
      <TouchableOpacity style={ProfileEditStyle.ButtonSosmed}>
        <Text style={ProfileEditStyle.LabelConnect}>Connect</Text>
      </TouchableOpacity>
    );
  };

  const renderConnectedButton = () => {
    return (
      <TouchableOpacity
        style={ProfileEditStyle.ButtonSosmedActive}
        disabled={true}>
        <Text style={ProfileEditStyle.LabelConnectActive}>Connected</Text>
      </TouchableOpacity>
    );
  };

  function uploadImage() {
    console.log('test upload');

    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        // alert(res.customButton);
      } else {
        console.log('response', JSON.stringify(res));
      }
    });
  }
  function HideText(param, isSave) {
    switch (param) {
      case 'username':
        setUsernameActive(!usernameActive);
        setUsername(isSave ? username : usernameOld);
        setUsernameOld(isSave ? username : usernameOld);
        break;
      case 'name':
        setNameActive(!nameActive);
        setName(isSave ? name : nameOld);
        setNameOld(isSave ? name : nameOld);
        break;
      case 'country':
        setCountryActive(!countryActive);
        setCountry(isSave ? country : countryOld);
        setCountryOld(isSave ? country : countryOld);
        break;
      case 'bio':
        setBioActive(!bioActive);
        setBio(isSave ? bio : bioOld);
        setBioOld(isSave ? bio : bioOld);
        break;
    }
  }
  return (
    <>
      <SafeAreaView style={ProfileEditStyle.SafeArea}>
        <View style={ProfileEditStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage source={icons.back} style={ProfileEditStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={ProfileEditStyle.LabelHeader}>Edit Profile</Text>
        </View>
      </SafeAreaView>

      <View style={ProfileEditStyle.ContainerPhoto}>
        <View style={ProfileEditStyle.Photo}>
          <Avatar source={images.user1} rounded size="medium" />
          <Text style={ProfileEditStyle.PhotoLabel}>Photo</Text>
        </View>
        <TouchableOpacity onPress={() => uploadImage()}>
          <FastImage
            source={icons.pencil_edit}
            style={ProfileEditStyle.IconPencil}
          />
        </TouchableOpacity>
      </View>

      <View style={ProfileEditStyle.ContainerPhoto}>
        <View>
          <Text style={ProfileEditStyle.Label}>Username</Text>
          {usernameActive ? (
            <Text style={ProfileEditStyle.Input}>{usernameOld}</Text>
          ) : (
            <TextInput
              autoFocus={true}
              value={username}
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
            />
          )}
        </View>
        <View style={ProfileEditStyle.ContainerAction}>
          {usernameActive ? (
            <TouchableOpacity onPress={() => HideText('username', false)}>
              <FastImage
                source={icons.pencil_edit}
                style={ProfileEditStyle.IconPencil}
              />
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={() => HideText('username', true)}>
                <FastImage
                  source={icons.check}
                  style={ProfileEditStyle.IconCheck}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => HideText('username', false)}>
                <FastImage
                  source={icons.close}
                  style={ProfileEditStyle.IconClose}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <View style={ProfileEditStyle.ContainerPhoto}>
        <View>
          <Text style={ProfileEditStyle.Label}>Name</Text>
          {nameActive ? (
            <Text style={ProfileEditStyle.Input}>{nameOld}</Text>
          ) : (
            <TextInput
              autoFocus={true}
              value={name}
              placeholder="Name"
              onChangeText={(text) => setName(text)}
            />
          )}
        </View>
        <View style={ProfileEditStyle.ContainerAction}>
          {nameActive ? (
            <TouchableOpacity onPress={() => HideText('name', false)}>
              <FastImage
                source={icons.pencil_edit}
                style={ProfileEditStyle.IconPencil}
              />
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={() => HideText('name', true)}>
                <FastImage
                  source={icons.check}
                  style={ProfileEditStyle.IconCheck}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => HideText('name', false)}>
                <FastImage
                  source={icons.close}
                  style={ProfileEditStyle.IconClose}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <View style={ProfileEditStyle.ContainerPhoto}>
        <View>
          <Text style={ProfileEditStyle.Label}>Country</Text>
          {countryActive ? (
            <Text style={ProfileEditStyle.Input}>{countryOld}</Text>
          ) : (
            <DropDownPicker
              dropDownMaxHeight={350}
              items={dataCountries}
              defaultValue={countryKey}
              containerStyle={ProfileEditStyle.DropdownContainer}
              style={ProfileEditStyle.DropdownContainer}
              itemStyle={ProfileEditStyle.DropdownItem}
              dropDownStyle={ProfileEditStyle.Dropdown}
              onChangeItem={(item) => {
                setCountry(item.label);
                console.log(item.value);
              }}
            />
          )}
        </View>
        <View style={ProfileEditStyle.ContainerAction}>
          {countryActive ? (
            <TouchableOpacity onPress={() => HideText('country', false)}>
              <FastImage
                source={icons.pencil_edit}
                style={ProfileEditStyle.IconPencil}
              />
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={() => HideText('country', true)}>
                <FastImage
                  source={icons.check}
                  style={ProfileEditStyle.IconCheck}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => HideText('country', false)}>
                <FastImage
                  source={icons.close}
                  style={ProfileEditStyle.IconClose}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <View style={ProfileEditStyle.ContainerBio}>
        <View style={ProfileEditStyle.ContainerBioInput}>
          <Text style={ProfileEditStyle.Label}>Bio</Text>
          {bioActive ? (
            <Text style={ProfileEditStyle.Input}>{bioOld}</Text>
          ) : (
            <TextInput
              autoFocus={true}
              value={bio}
              placeholder="Biodata"
              onChangeText={(text) => setBio(text)}
              multiline={true}
              numberOfLines={3}
            />
          )}
        </View>
        <View style={ProfileEditStyle.ContainerAction}>
          {bioActive ? (
            <TouchableOpacity onPress={() => HideText('bio', false)}>
              <FastImage
                source={icons.pencil_edit}
                style={ProfileEditStyle.IconPencil}
              />
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={() => HideText('bio', true)}>
                <FastImage
                  source={icons.check}
                  style={ProfileEditStyle.IconCheck}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => HideText('bio', false)}>
                <FastImage
                  source={icons.close}
                  style={ProfileEditStyle.IconClose}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <View style={ProfileEditStyle.ContainerSosmed}>
        <View style={ProfileEditStyle.Sosmed}>
          <View style={ProfileEditStyle.Photo}>
            <FastImage source={icons.google} style={ProfileEditStyle.IconSosmed} />
            <Text style={ProfileEditStyle.SosmedLabel}>Google</Text>
          </View>
          {renderConnectButton()}
        </View>
        <View style={ProfileEditStyle.Sosmed}>
          <View style={ProfileEditStyle.Photo}>
            <FastImage source={icons.fb} style={ProfileEditStyle.IconSosmed} />
            <Text style={ProfileEditStyle.SosmedLabel}>Facebook</Text>
          </View>
          {renderConnectedButton()}
        </View>
      </View>
    </>
  );
};

export default ProfileEdit;
