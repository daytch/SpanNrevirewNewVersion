import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {icons} from '../constants';
import PeopleStyle from '../assets/styles/PeopleStyle';
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
import BottomModal from './BottomModal';

const MyPeople = ({data, navigation}) => {
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
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
      <SafeAreaView style={PeopleStyle.SafeArea}>
        <View style={PeopleStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage source={icons.back} style={PeopleStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={PeopleStyle.LabelNew}>People</Text>
        </View>
      </SafeAreaView>

      <ScrollView>
        <View style={PeopleStyle.ContainerProfile}>
          <View style={PeopleStyle.ContainerAvatar}>
            <Avatar
              rounded
              size="large"
              source={{
                uri:
                  'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
              }}
            />
            <TouchableOpacity style={PeopleStyle.ContainerIcon}>
              <FastImage source={icons.user_plus} style={PeopleStyle.IconFollow} />
              <Text style={PeopleStyle.LabelMenu}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={PeopleStyle.ContainerIcon}>
              <FastImage source={icons.bell} style={PeopleStyle.IconBell} />
              <Text style={PeopleStyle.LabelMenu}>Notify Me</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('QuestionNew')}
              style={PeopleStyle.ContainerIcon}>
              <FastImage source={icons.ask} style={PeopleStyle.IconFollow} />
              <Text style={PeopleStyle.LabelMenu}>Ask</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PeopleStyle.ContainerIcon}
              onPress={toggleModal}>
              <FastImage source={icons.more} style={PeopleStyle.IconMore} />
              <Text style={PeopleStyle.LabelMenu}>More</Text>
            </TouchableOpacity>
          </View>
          <Text style={PeopleStyle.Name}>Harley Quinn</Text>
          <Text style={PeopleStyle.Country}>England</Text>
        </View>
        <Text style={PeopleStyle.AboutMe}>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit.
        </Text>
        <Text style={PeopleStyle.LabelActivities}>Activities</Text>
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
        <BottomModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
      </ScrollView>
    </>
  );
};

export default MyPeople;
