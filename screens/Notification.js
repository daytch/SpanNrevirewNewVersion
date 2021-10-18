import React from 'react';
import moment from 'moment';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import NotificationStyle from '../assets/styles/NotificationStyle';
import {icons} from '../constants';
import FastImage from 'react-native-fast-image';

const Notification = ({navigation}) => {
  const data = [
    {
      id: 1,
      msg: 'Your Product has been Upvoted',
      username: 'Slamet',
      date: '2021-07-16T13:51:50',
      isRead: false,
      isReview: true,
      title: 'Question Title Lorem ipsum dolor sit amet lorem',
      img: 'https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_purple_1_3.jpg',
      category: 'Electronic  /  Games  /  Console',
    },
    {
      id: 2,
      msg: 'Your Question has been Answered',
      username: 'Bejo',
      date: '2021-06-26T13:51:50',
      isRead: true,
      isReview: false,
      title: 'Question Title Lorem ipsum dolor sit amet lorem',
      img: 'https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_red_1_1_2.jpg',
      category: 'Electronic  /  Games  /  Console',
    },
    {
      id: 3,
      msg: 'Your Product has been Reviewed',
      username: 'Udin',
      date: '2021-07-18T13:51:50',
      isRead: false,
      isReview: true,
      title: 'Question Title Lorem ipsum dolor sit amet lorem',
      img: 'https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_white_1_3.jpg',
      category: 'Electronic  /  Games  /  Console',
    },
    {
      id: 4,
      msg: 'Your Answer has been Replied',
      username: 'Joe',
      date: '2021-07-15T13:51:50',
      isRead: false,
      isReview: false,
      title: 'Question Title Lorem ipsum dolor sit amet lorem',
      img: 'https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_pasificblue_4.jpg',
      category: 'Electronic  /  Games  /  Console',
    },
  ];

  return (
    <>
      <SafeAreaView style={NotificationStyle.SafeArea}>
        <View style={NotificationStyle.container}>
          <Text style={NotificationStyle.LabelNew}>Notifications</Text>
          <TouchableOpacity>
            <FastImage source={icons.more} style={NotificationStyle.More} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <FlatList
        style={NotificationStyle.FlatList}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={1}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              item.isReview
                ? navigation.navigate('ReviewDetail', {
                    id: item.id,
                  })
                : navigation.navigate('QuestionDetail', {
                    content: item.title,
                    id: item.id,
                  });
            }}
            style={[
              NotificationStyle.ContainerRender,
              item.isRead ? null : NotificationStyle.UnreadMessage,
            ]}>
            <View style={NotificationStyle.ContainerMessage}>
              <Text style={NotificationStyle.Message}>{item.msg}</Text>
              <Text style={NotificationStyle.Date}>
                {moment(item.date).fromNow()}
              </Text>
            </View>
            <Text style={NotificationStyle.By}>
              by<Text style={NotificationStyle.Username}> {item.username}</Text>
            </Text>
            <View style={NotificationStyle.ContainerImageDesc}>
              {item.isReview ? (
                <>
                  <FastImage
                    source={{uri: item.img}}
                    style={NotificationStyle.ImgProduct}
                  />
                  <View style={NotificationStyle.ContainerTitle}>
                    <Text style={NotificationStyle.Message}>{item.title}</Text>
                    <Text style={NotificationStyle.Date}>{item.category}</Text>
                  </View>
                </>
              ) : (
                <Text style={NotificationStyle.Message}>{item.title}</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
        // onEndReachedThreshold={0}
        // onEndReached={(e) => getData()}
      />
    </>
  );
};

export default Notification;
