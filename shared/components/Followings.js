import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {icons} from '../constants';
import PeopleStyle from '../assets/styles/PeopleStyle';
import {Avatar} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

const Followings = ({data}) => {
  const [dataFollowings, setDataFollowings] = useState(data);

  const renderButtonFollow = (isFollowing, index) => {
    return isFollowing ? (
      <TouchableOpacity
        style={PeopleStyle.ButtonFollowing}
        onPress={() => changeFollowing(index)}>
        <Text style={PeopleStyle.LabelNotifActive}>Following</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={PeopleStyle.ButtonFollow}
        onPress={() => changeFollowing(index)}>
        <Text style={PeopleStyle.LabelNotif}>Follow</Text>
      </TouchableOpacity>
    );
  };

  const changeFollowing = (index) => {
    let newArr = [...dataFollowings]; // copying the old datas array
    newArr[index].isFollowing = dataFollowings[index].isFollowing
      ? false
      : true;
    setDataFollowings(newArr); // ??
  };

  return (
    <>
      <Text style={PeopleStyle.LabelActivities}>Following</Text>
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
        {dataFollowings.map((item, index) => {
          return (
            <View key={index} style={PeopleStyle.ContainerFollowers}>
              <Avatar rounded={true} source={item.img} />
              <View style={PeopleStyle.ContainerUser}>
                <View style={PeopleStyle.ContainerUsername}>
                  <Text style={PeopleStyle.LabelName}>{item.name}</Text>
                  <Text style={PeopleStyle.LabelCountry}>{item.country}</Text>
                </View>
                {renderButtonFollow(item.isFollowing, index)}
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};
export default Followings;
