import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {icons} from '../constants';
import ProfileStyle from '../assets/styles/ProfileStyle';
import {Avatar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

import Followers from './Followers';
import Followings from './Followings';
import ProductPosted from './ProductPosted';
import ProductReviewed from './ProductReviewed';
import QuestionPosted from './QuestionPosted';
import QuestionAnswered from './QuestionAnswered';
import Activities from './Activities';

const MyProfile = ({data, navigation}) => {
  const [status, setStatus] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    isActive5: false,
    isActive6: false,
  });
  const [dataFollower] = useState(data.Followers);
  const [dataFollowings] = useState(data.Followings);
  const [dataProductPosted] = useState(data.ProductPosted);
  const [dataProductReviewed] = useState(data.ProductReviewed);
  const [dataQuestionPosted] = useState(data.QuestionPosted);
  const [dataQuestionAnswered] = useState(data.QuestionAnswered);
  function activateButton(idx) {
    switch (idx) {
      case 1:
        setStatus({
          isActive1: true,
          isActive2: false,
          isActive3: false,
          isActive4: false,
          isActive5: false,
          isActive6: false,
        });
        break;

      case 2:
        setStatus({
          isActive1: false,
          isActive2: true,
          isActive3: false,
          isActive4: false,
          isActive5: false,
          isActive6: false,
        });
        break;

      case 3:
        setStatus({
          isActive1: false,
          isActive2: false,
          isActive3: true,
          isActive4: false,
          isActive5: false,
          isActive6: false,
        });
        break;

      case 4:
        setStatus({
          isActive1: false,
          isActive2: false,
          isActive3: false,
          isActive4: true,
          isActive5: false,
          isActive6: false,
        });
        break;

      case 5:
        setStatus({
          isActive1: false,
          isActive2: false,
          isActive3: false,
          isActive4: false,
          isActive5: true,
          isActive6: false,
        });
        break;

      case 6:
        setStatus({
          isActive1: false,
          isActive2: false,
          isActive3: false,
          isActive4: false,
          isActive5: false,
          isActive6: true,
        });
        break;
    }
  }

  return (
    <>
      <SafeAreaView style={ProfileStyle.SafeArea}>
        <View style={ProfileStyle.container}>
          <Text style={ProfileStyle.LabelNew}>Profile</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Setting', {id: 26})}>
            <FastImage source={icons.gear} style={ProfileStyle.More} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView>
        <View style={ProfileStyle.ContainerProfile}>
          <Avatar
            rounded
            size="large"
            source={{
              uri:
                'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
            }}
          />
          <View style={ProfileStyle.ContainerTextName}>
            <View>
              <Text style={ProfileStyle.Name}>Harley Quinn</Text>
              <Text style={ProfileStyle.Country}>England</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileEdit', {id: 26})}>
              <Text style={ProfileStyle.EditProfile}>Edit Profile ></Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={ProfileStyle.AboutMe}>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit.
        </Text>
        <Text style={ProfileStyle.LabelActivities}>Activities</Text>
        <Activities activateButton={activateButton} status={status} />
        {status.isActive1 ? (
          <Followers data={dataFollower} />
        ) : status.isActive2 ? (
          <ProductPosted data={dataProductPosted} navigation={navigation} />
        ) : status.isActive3 ? (
          <QuestionPosted data={dataQuestionPosted} />
        ) : status.isActive4 ? (
          <Followings data={dataFollowings} />
        ) : status.isActive5 ? (
          <ProductReviewed data={dataProductReviewed} />
        ) : (
          <QuestionAnswered data={dataQuestionAnswered} />
        )}
      </ScrollView>
    </>
  );
};

export default MyProfile;
