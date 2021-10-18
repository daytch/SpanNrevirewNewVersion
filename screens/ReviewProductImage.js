/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  LogBox,
} from 'react-native';
import {reviews} from '../shared/api';
import {icons, kFormatter} from '../constants';
import FastImage from 'react-native-fast-image';
import ReviewProductImageStyle from '../../assets/styles/ReviewProductImageStyle';

const ReviewProductImage = ({route, navigation}) => {
  const productId = route.params?.productId;
  const tgl = route.params?.tanggal;
  const [sort, setSort] = useState(0);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
  }, []);

  function getData() {
    let dt = JSON.stringify({
      productId: productId,
      order: '',
      skip: 0,
      take: 10,
    });
    reviews
      .getAllImageByProductId(dt)
      .then((e) => {
        let response = e.data;
        if (response) {
          setData(response);
          setRefreshing(false);
        }
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          navigation.navigate('Login');
        } else {
          alert(error);
        }
      });
  }

  function SortByLike() {
    if (sort === 1) {
      setData(data.sort((a, b) => a.likes < b.likes));
      setSort(0);
    } else {
      setData(data.sort((a, b) => a.likes > b.likes));
      setSort(1);
    }
  }
  return (
    <>
      <SafeAreaView style={ReviewProductImageStyle.SafeArea}>
        <View style={ReviewProductImageStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage
              source={icons.back}
              style={ReviewProductImageStyle.ImageBack}
            />
          </TouchableOpacity>
          <Text style={ReviewProductImageStyle.Label}>Product Images</Text>
          <TouchableOpacity onPress={() => SortByLike()}>
            <FastImage
              source={icons.sort_white}
              style={ReviewProductImageStyle.SortWhite}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        style={ReviewProductImageStyle.ScrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        horizontal={false}>
        <View style={ReviewProductImageStyle.ContainerList}>
          <FlatList
            // contentContainerStyle={ReviewProductImageStyle.FlatContainer}
            data={data}
            keyExtractor={(item) => item.Id}
            horizontal={false}
            numColumns={3}
            renderSeparatorView={() => {
              return <View style={ReviewProductImageStyle.FlatSeparator} />;
            }}
            renderItem={({item}) => (
              <TouchableOpacity
                style={ReviewProductImageStyle.ContainerIconProduct}
                onPress={() =>
                  navigation.navigate('ReviewSlideImage', {
                    data: data,
                    user: item.name,
                    tanggal: tgl,
                    userImage: item.img_avatar,
                  })
                }>
                <FastImage
                  source={{url: item.imageLink}}
                  resizeMode={'contain'}
                  style={ReviewProductImageStyle.IconProduct}
                  defaultSource={require('../assets/images/default.png')}
                />
                <View style={ReviewProductImageStyle.Likes}>
                  <FastImage
                    source={icons.love_white}
                    style={ReviewProductImageStyle.IconLove}
                  />
                  <Text style={ReviewProductImageStyle.TotalLike}>
                    {kFormatter(item.liked)}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            // onEndReachedThreshold={0}
            // onEndReached={(e) => getData()}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ReviewProductImage;
