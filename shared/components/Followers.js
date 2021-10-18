import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {icons} from '../constants';
import FastImage from 'react-native-fast-image';
import PeopleStyle from '../assets/styles/PeopleStyle';
import {Avatar} from 'react-native-elements';

const Followers = ({data}) => {
  const [dataFollower, setDataFollower] = useState(data);

  const removeFollower = (index) => {
    let newArr = [...dataFollower]; // copying the old datas array
    newArr.splice(index, 1);
    setDataFollower(newArr); // ??
  };

  return (
    <>
      <Text style={PeopleStyle.LabelActivities}>Followers</Text>
      <View style={PeopleStyle.ParentFollowers}>
        <View style={PeopleStyle.ContainerSearch}>
          <View style={PeopleStyle.BodySearch}>
            <FastImage source={icons.loop} style={PeopleStyle.IconLoop} />
            <TextInput
              keyboardShouldPersistTaps
              style={PeopleStyle.InputSearch}
              placeholder="Search something..."
              underlineColorAndroid="transparent"
              // selection={{ start: 100, end: 1 }}
              onSelectionChange={(event) =>
                console.log(event.nativeEvent.selection)
              }
            />
          </View>
        </View>
        {dataFollower.map((item, index) => {
          return (
            <View key={index} style={PeopleStyle.ContainerFollowers}>
              <Avatar rounded={true} source={item.img} />
              <View style={PeopleStyle.ContainerUser}>
                <View style={PeopleStyle.ContainerUsername}>
                  <Text style={PeopleStyle.LabelName}>{item.name}</Text>
                  <Text style={PeopleStyle.LabelCountry}>{item.country}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => removeFollower(index)}
                  style={PeopleStyle.ButtonRegister}>
                  <Text style={PeopleStyle.LabelNotif}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default Followers;
