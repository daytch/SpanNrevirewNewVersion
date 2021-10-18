import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {icons, images, kFormatter} from '../constants';
import SearchStyle from '../assets/styles/SearchStyle';
import {Avatar} from 'react-native-elements';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

const Search = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [data] = useState([
    {
      id: 1,
      img: images.user3,
      username: 'daytch',
      country: 'Indonesia',
      joindate: '2020-12-30',
      follower: 54612354,
      following: 654,
      productposted: 65428,
      productreviewed: 45682,
      questionposted: 123,
      questionanswered: 123,
    },
    {
      id: 2,
      img: images.user1,
      username: 'mac',
      country: 'USA',
      joindate: '2021-01-30',
      follower: 5464,
      following: 6544,
      productposted: 6528,
      productreviewed: 45,
      questionposted: 127453,
      questionanswered: 1242373,
    },
    {
      id: 3,
      img: images.user2,
      username: 'john',
      country: 'Austria',
      joindate: '2020-12-30',
      follower: 54234,
      following: 45346556,
      productposted: 65428,
      productreviewed: 45682,
      questionposted: 127683,
      questionanswered: 134623,
    },
    {
      id: 4,
      img: images.user1,
      username: 'udin',
      country: 'Indonesia',
      joindate: '2020-10-30',
      follower: 345677,
      following: 6554984,
      productposted: 456,
      productreviewed: 765,
      questionposted: 125693,
      questionanswered: 1389023,
    },
    {
      id: 5,
      img: images.user3,
      username: 'grace',
      country: 'Italia',
      joindate: '2020-11-30',
      follower: 45,
      following: 654,
      productposted: 23,
      productreviewed: 13,
      questionposted: 9,
      questionanswered: 6,
    },
    {
      id: 6,
      img: images.user1,
      username: 'takachi',
      country: 'Japan',
      joindate: '2021-02-30',
      follower: 3453,
      following: 7895,
      productposted: 3456,
      productreviewed: 67567,
      questionposted: 1564,
      questionanswered: 86756,
    },
    {
      id: 7,
      img: images.user2,
      username: 'zilong',
      country: 'China',
      joindate: '2020-12-30',
      follower: 45456,
      following: 67546,
      productposted: 345,
      productreviewed: 234,
      questionposted: 76573,
      questionanswered: 34765,
    },
    {
      id: 8,
      img: images.user1,
      username: 'ivankov',
      country: 'Rusia',
      joindate: '2020-04-30',
      follower: 635495,
      following: 65154,
      productposted: 628,
      productreviewed: 82,
      questionposted: 13,
      questionanswered: 23,
    },
  ]);
  return (
    <>
      <SafeAreaView style={SearchStyle.SafeArea}>
        <View style={SearchStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FastImage source={icons.back} style={SearchStyle.ImageBack} />
          </TouchableOpacity>

          <View style={SearchStyle.ContainerSearch}>
            <View style={SearchStyle.BodySearch}>
              <TouchableOpacity>
                <FastImage source={icons.loop} style={SearchStyle.IconLoop} />
              </TouchableOpacity>
              <TextInput
                keyboardShouldPersistTaps
                style={SearchStyle.InputSearch}
                placeholder="Search something..."
                underlineColorAndroid="transparent"
                // selection={{ start: 100, end: 1 }}
                onSelectionChange={(event) =>
                  console.log(event.nativeEvent.selection)
                }
              />
            </View>
          </View>
        </View>
      </SafeAreaView>

      <FlatList
        // columnWrapperStyle={SearchStyle.FlatWrapper}
        contentContainerStyle={SearchStyle.FlatContainer}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={1}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('Profile', {
                id: item.id,
                username: item.username,
                country: item.country,
                img: item.img,
                isFromSearch: true,
              })
            }
            style={SearchStyle.ContainerDetail}>
            <View style={SearchStyle.Header}>
              <Avatar source={item.img} rounded={true} size="medium" />
              <View style={SearchStyle.ContainerCountry}>
                <Text style={SearchStyle.LabelUsername}>{item.username}</Text>
                <Text style={SearchStyle.LabelJoindate}>
                  {item.country} | Joined since{' '}
                  {moment(item.joindate).format('LL')}
                </Text>
              </View>
            </View>
            <View style={SearchStyle.ContainerPosted}>
              <Text style={SearchStyle.LabelPosted}>
                {kFormatter(item.follower)} Followers
              </Text>
              <Text style={SearchStyle.LabelPosted}>
                {kFormatter(item.productposted)} Product Posted
              </Text>
              <Text style={SearchStyle.LabelPosted}>
                {kFormatter(item.questionposted)} Question Posted
              </Text>
            </View>
            <View style={SearchStyle.ContainerReviewed}>
              <Text style={SearchStyle.LabelPosted}>
                {kFormatter(item.following)} Following
              </Text>
              <Text style={SearchStyle.LabelPosted}>
                {kFormatter(item.productreviewed)} Product Reviewed
              </Text>
              <Text style={SearchStyle.LabelPosted}>
                {kFormatter(item.questionanswered)} Question Answered
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default Search;
