import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {icons, kFormatter} from '../constants';
import ReviewSlideImageStyle from '../../assets/styles/ReviewSlideImageStyle';
import Slideshow from 'react-native-image-slider-show';
import {Avatar} from 'react-native-elements';
import helper from '../shared/helper';
import {reviews} from '../shared/api';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

let ListViewedImage = [];
const ReviewSlideImage = ({route, navigation}) => {
  const data = route.params?.data;
  console.log(id);
  const listUrl = data.map((item, index) => {
    return {url: item.imageLink};
  });

  const listData = data.map((item, index) => {
    return {
      id: item.Id,
      likes: item.liked,
      views: item.views,
      idx: index,
      IsLiked: item.IsLiked,
      img_avatar: item.img_avatar,
      name: item.name,
    };
  });
  const [id, setId] = useState(data[0].id);
  const [likes, setLikes] = useState(data[0].liked);
  const [views, setViews] = useState(data[0].views);
  const [ava, setAva] = useState(data[0].img_avatar);
  const [name, setName] = useState(data[0].name);
  const [isLiked, setIsLiked] = useState(data[0].IsLiked);
  const user = route.params?.user;
  const tgl = route.params?.tanggal;

  function onChangeImage(e) {
    listData.map((item) => {
      if (item.idx === e) {
        setLikes(item.likes);
        setViews(item.views);
        setIsLiked(item.IsLiked);
        setAva(item.img_avatar);
        setName(item.name);
        setId(item.id);
        let idx = ListViewedImage.indexOf(item.id);
        if (idx === -1) {
          ListViewedImage.push(item.id);
          reviews
            .countViewProductImage(JSON.stringify({id: item.id}))
            // .then((x) => {
            // console.log(x);
            // })
            .catch((error) => {
              if (
                error.response.status === 401 ||
                error.response.status === 403
              ) {
                navigation.navigate('Login');
              }
              // else {
              // alert(error);
              // }
            });
        }
      }
    });
  }

  function likeProductImage(ids) {
    console.log('likeProductImage = ' + ids);
    reviews
      .countProductImageLike(JSON.stringify({id: ids}))
      .then((e) => {
        if (e.isSuccess) {
          setLikes(likes + 1);
        }
        console.log(e);
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          navigation.navigate('Login');
        }
      });
  }

  return (
    <>
      <SafeAreaView style={ReviewSlideImageStyle.SafeArea}>
        <View style={ReviewSlideImageStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage
              source={icons.back}
              style={ReviewSlideImageStyle.ImageBack}
            />
          </TouchableOpacity>
          <Text style={ReviewSlideImageStyle.Label}>Product Images Detail</Text>
        </View>
      </SafeAreaView>

      <View style={ReviewSlideImageStyle.Contents}>
        <View style={ReviewSlideImageStyle.Kosong} />
        <Slideshow
          dataSource={listUrl}
          // position={0}
          overlay={true}
          height={300}
          onPositionChanged={(e) => onChangeImage(e)}
          scrollEnabled={false}
          style={ReviewSlideImageStyle.SlideShow}
        />
        <View style={ReviewSlideImageStyle.Footer}>
          <View style={ReviewSlideImageStyle.PropUser}>
            <Avatar
              rounded
              source={
                ava && {
                  uri: `${ava}`,
                }
              }
              title={name && helper.getInitials(name)}
            />
            <View style={ReviewSlideImageStyle.ContainerTgl}>
              <Text style={ReviewSlideImageStyle.LabelUser}>{user}</Text>
              <Text style={ReviewSlideImageStyle.LabelUser}>
                {moment(tgl).format('ll')}
              </Text>
            </View>
          </View>
          <View style={ReviewSlideImageStyle.ContainerViews}>
            <FastImage source={icons.eye} style={ReviewSlideImageStyle.IconEye} />
            <Text style={ReviewSlideImageStyle.LabelUser}>
              {kFormatter(views)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => likeProductImage(id)}
            style={ReviewSlideImageStyle.ContainerLikes}>
            <FastImage
              source={isLiked ? icons.love : icons.love_white}
              style={ReviewSlideImageStyle.IconLove}
            />
            <Text style={ReviewSlideImageStyle.LabelLike}>
              {kFormatter(likes)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ReviewSlideImage;
