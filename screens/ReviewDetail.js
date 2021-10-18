/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  icons,
  kFormatter,
  COLORS,
  widthPercentageToDP as wp,
} from '../constants';
import FastImage from 'react-native-fast-image';
import ReviewDetailStyle from '../assets/styles/ReviewDetailStyle';
import {Avatar} from 'react-native-elements';
import moment from 'moment';
import ReadMore from '@fawazahmed/react-native-read-more';
import {reviews} from '../shared/api';
import helper, {errorHandling} from '../shared/helper';
import {BottomModal} from '../shared/components';
import RenderHTML from 'react-native-render-html';

let ListReviewIds = [];
let isLoaded = false;
const ReviewDetail = ({route, navigation}) => {
  const {id} = route.params;
  const [dataHeader, setDataHeader] = useState([]);
  const [dataContent, setDataContent] = useState([]);
  const [dataFooter, setDataFooter] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [surplus, setSurplus] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [triggerFrom, setTriggerFrom] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  }, []);

  function getData() {
    let dt = JSON.stringify({
      id: id,
    });
    reviews
      .getProductById(dt)
      .then((e) => {
        let response = e.data;
        if (response) {
          setDataHeader(response);
          reviews
            .getProductTopImagesById(dt)
            .then((res) => {
              let respon = res.data;
              if (respon) {
                setDataContent(respon);
                setSurplus(res.surplusImages);
                let dat = JSON.stringify({
                  productId: id,
                  order: '',
                  search: '',
                  skip: 0,
                  take: 25,
                });

                reviews
                  .getAllReviewbyProduct(dat)
                  .then((resp) => {
                    let respons = resp.data;
                    let ids = [];
                    if (respons) {
                      respons.map((item) => {
                        ids.push(item.id);
                        ListReviewIds.push(item.id);
                        item.isHide = true;
                        item.Comments = [];
                      });
                      setDataFooter(respons);

                      if (!isLoaded) {
                        isLoaded = !isLoaded;
                        let uniqueItems = [...new Set(ListReviewIds)];

                        reviews
                          .countViewProduct(JSON.stringify({id: id}))
                          .then((r) => {
                            uniqueItems.map((item) => {
                              let d = JSON.stringify({reviewId: item});
                              reviews
                                .countViewReview(d)
                                .catch((error) =>
                                  errorHandling(error, navigation),
                                );
                            });
                          })
                          .catch((error) => errorHandling(error, navigation));
                      }
                    }
                  })
                  .catch((error) => errorHandling(error, navigation));
              }
            })
            .catch((error) => errorHandling(error, navigation));
        }
      })
      .catch((error) => errorHandling(error, navigation));
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  let genKey = 0;
  function generateKey() {
    return (genKey = genKey + 1);
  }
  const showComments = (item) => {
    let dt = JSON.stringify({
      reviewId: item.id,
      skip: 0,
      take: 5,
    });
    reviews.getAllReviewComments(dt).then((resp) => {
      let dat = resp.data;
      if (resp?.isSuccess) {
        let newArr = [...dataFooter];

        let idx = newArr.map((i) => i.id).indexOf(item.id);
        newArr[idx].isHide = !newArr[idx].isHide;
        newArr[idx].Comments = dat;
        setDataFooter(newArr);
      }
    });
  };
  function renderStar(upvote) {
    const red = [];
    const white = [];

    for (var i = 0; i < upvote; i++) {
      red.push(
        <FastImage
          key={generateKey()}
          source={icons.star}
          style={ReviewDetailStyle.IconStar}
        />,
      );
    }

    for (var i = 1; i < 5 - upvote; i++) {
      white.push(
        <FastImage
          key={generateKey()}
          source={icons.star_white}
          style={ReviewDetailStyle.IconStar}
        />,
      );

      return (
        <View style={ReviewDetailStyle.ContainerStars}>
          {red.concat(white)}
        </View>
      );
    }
  }

  const renderItemComment = (Comments) => {
    return Comments.map((item, index) => {
      return (
        <View
          key={index}
          style={[
            index < 1
              ? ReviewDetailStyle.ContainerRenderCnCFirst
              : index + 1 === Comments.length
              ? ReviewDetailStyle.ContainerRenderCnCLast
              : ReviewDetailStyle.ContainerRenderCnC,
          ]}>
          <TouchableOpacity style={ReviewDetailStyle.ContainerCardComment}>
            <View style={ReviewDetailStyle.UserComment}>
              <View style={ReviewDetailStyle.UserIconComment}>
                <Avatar
                  rounded
                  source={
                    item.img_avatar && {
                      uri: `${item.img_avatar}`,
                    }
                  }
                  title={item?.name && helper.getInitials(item.name)}
                />
              </View>
              <View style={ReviewDetailStyle.UserPropsComment}>
                <View style={ReviewDetailStyle.CommentContainerName}>
                  <Text style={ReviewDetailStyle.UserNameComment}>
                    {item.name} -
                  </Text>
                  <Text style={ReviewDetailStyle.UserTitleComment}>
                    {moment(new Date(item.createdAt)).format('LL')}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <ReadMore
              numberOfLines={3}
              seeMoreText={'-See more'}
              seeMoreStyle={ReviewDetailStyle.See}
              seeLessText={'-See less'}
              seeLessStyle={ReviewDetailStyle.See}
              style={{color: COLORS.black}}>
              {item.comment}
            </ReadMore>
          </View>
          <View style={ReviewDetailStyle.IconsComment}>
            <View style={ReviewDetailStyle.BorderUpvote}>
              <FastImage
                source={item.isUpvoted ? icons.arrow_up : icons.arrow_up_white}
                style={ReviewDetailStyle.IconStar}
              />
              <Text style={ReviewDetailStyle.LabelUserIcon}>
                {kFormatter(item.upvote)}
              </Text>
            </View>
            <View style={ReviewDetailStyle.CommentChatIcon}>
              <FastImage source={icons.chat} style={ReviewDetailStyle.IconChat} />
              <Text style={ReviewDetailStyle.LabelUserIconComment}>Reply</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                toggleModal();
                setTriggerFrom('questioncomment');
              }}
              style={ReviewDetailStyle.CommentChatIcon}>
              <FastImage source={icons.more} style={ReviewDetailStyle.IconMore} />
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };

  const submitUpVoted = (reviewId) => {
    let dt = JSON.stringify({
      reviewId: reviewId,
    });
    reviews
      .countUpVoteReview(dt)
      .then((resp) => {
        console.log('submitUpVoted');
        console.log(resp);
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          navigation.navigate('Login');
        }
      });
  };

  return (
    <>
      <SafeAreaView style={ReviewDetailStyle.SafeArea}>
        <View style={ReviewDetailStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage source={icons.back} style={ReviewDetailStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={ReviewDetailStyle.Label}>Product Reviews</Text>
        </View>
      </SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        horizontal={false}>
        <View style={ReviewDetailStyle.Contents}>
          <View style={ReviewDetailStyle.User}>
            <View style={ReviewDetailStyle.UserIcon}>
              <Avatar
                rounded
                source={
                  dataHeader[0]?.img_avatar && {
                    uri: `${dataHeader[0]?.img_avatar}`,
                  }
                }
                title={
                  dataHeader[0]?.name && helper.getInitials(dataHeader[0]?.name)
                }
              />
            </View>
            <View style={ReviewDetailStyle.UserProps}>
              <Text style={ReviewDetailStyle.UserName}>
                by {dataHeader[0]?.name} -{' '}
                {moment(dataHeader[0]?.createdAt).format('ll')}
              </Text>
              <Text style={ReviewDetailStyle.UserTitle}>
                {dataHeader[0]?.title}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ReviewProductImage', {
                productId: id,
                tanggal: dataHeader[0].createdAt,
              })
            }>
            <FastImage
              source={{
                uri: dataContent[0]?.imageLink,
              }}
              resizeMode={'contain'}
              style={ReviewDetailStyle.MainImage}
              defaultSource={require('../assets/images/default.png')}
            />
          </TouchableOpacity>
          <View
            style={[
              surplus < 1
                ? ReviewDetailStyle.OtherImages
                : ReviewDetailStyle.OtherImagesReverse,
            ]}>
            {dataContent &&
              dataContent.map((item, index) => {
                if (index > 0) {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => navigation.navigate('ReviewProductImage')}>
                      <FastImage
                        source={{
                          uri: item.imageLink,
                        }}
                        resizeMode={'contain'}
                        style={ReviewDetailStyle.MiniImage}
                        defaultSource={require('../assets/images/default.png')}
                      />
                    </TouchableOpacity>
                  );
                }
                if (surplus > 0) {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={ReviewDetailStyle.ButtonMoreImage}
                      onPress={() => navigation.navigate('ReviewProductImage')}>
                      <Text style={ReviewDetailStyle.LabelMoreImage}>
                        +{surplus}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              })}
          </View>
          <View style={ReviewDetailStyle.ContainerRating}>
            <View style={ReviewDetailStyle.Ratings}>
              <FastImage source={icons.star} style={ReviewDetailStyle.IconStar} />
              <Text style={ReviewDetailStyle.LabelRating}>
                {dataHeader[0]?.aveRating}({dataHeader[0]?.views} reviews)
              </Text>
            </View>
            <View style={ReviewDetailStyle.Views}>
              <FastImage source={icons.eye} style={ReviewDetailStyle.IconEye} />
              <Text style={ReviewDetailStyle.LabelView}>
                {dataHeader[0]?.views}
              </Text>
            </View>
            <View style={ReviewDetailStyle.More}>
              <TouchableOpacity
                onPress={() => {
                  toggleModal();
                  setTriggerFrom('reviewdetail');
                }}>
                <FastImage style={ReviewDetailStyle.IconMore} source={icons.more} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={ReviewDetailStyle.ContainerButton}>
            <TouchableOpacity
              style={ReviewDetailStyle.ButtonImages}
              onPress={() =>
                navigation.navigate('ReviewAddImage', {
                  category: dataHeader[0].categoryName,
                  title: dataHeader[0].title,
                  id: id,
                  img: dataContent[0]?.imageLink,
                })
              }>
              <FastImage source={icons.cam_red} style={ReviewDetailStyle.IconCam} />
              <Text style={ReviewDetailStyle.LabelAddImage}>Add Images</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ReviewDetailStyle.ButtonReviews}
              onPress={() =>
                navigation.navigate('ReviewNew', {
                  category: dataHeader[0].categoryName,
                  title: dataHeader[0].title,
                  id: id,
                  img: dataContent[0]?.imageLink,
                })
              }>
              <FastImage
                source={icons.pencil}
                style={ReviewDetailStyle.IconPencil}
              />
              <Text style={ReviewDetailStyle.LabelAddImage}>
                Write a Review
              </Text>
            </TouchableOpacity>
          </View>
          <View style={ReviewDetailStyle.ContainerSearch}>
            <View style={ReviewDetailStyle.ContainerInputSearch}>
              <TouchableOpacity>
                <FastImage source={icons.sort} style={ReviewDetailStyle.IconSort} />
              </TouchableOpacity>

              <View style={ReviewDetailStyle.BodySearch}>
                <FastImage source={icons.loop} style={ReviewDetailStyle.IconLoop} />
                <TextInput
                  keyboardShouldPersistTaps
                  style={ReviewDetailStyle.InputSearch}
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
          <View style={ReviewDetailStyle.Comments}>
            {dataFooter &&
              dataFooter.map((item, index) => {
                return (
                  <View key={index} style={ReviewDetailStyle.ContainerRender}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ReviewDetail', {
                          id: 1,
                        })
                      }
                      style={ReviewDetailStyle.ContainerCardComment}>
                      <View style={ReviewDetailStyle.UserComment}>
                        <View style={ReviewDetailStyle.UserIconComment}>
                          <Avatar
                            rounded
                            source={{uri: item.img_avatar}}
                            title={
                              dataHeader[0]?.name &&
                              helper.getInitials(dataHeader[0]?.name)
                            }
                          />
                        </View>
                        <View style={ReviewDetailStyle.UserPropsComment}>
                          <View style={ReviewDetailStyle.CommentContainerStar}>
                            {renderStar(item.rate)}
                          </View>
                          <View style={ReviewDetailStyle.CommentContainerName}>
                            <Text style={ReviewDetailStyle.UserNameComment}>
                              {item.name} -
                            </Text>
                            <Text style={ReviewDetailStyle.UserTitleComment}>
                              {moment(item.createdAt).format('ll')}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <ReadMore
                      numberOfLines={3}
                      seeMoreText={'-See more'}
                      seeMoreStyle={ReviewDetailStyle.See}
                      seeLessText={'-See less'}
                      seeLessStyle={ReviewDetailStyle.See}
                      style={ReviewDetailStyle.CommentContent}>
                      {/* {item.description}*/}
                      <RenderHTML
                        source={{html: item.description}}
                        contentWidth={wp('100%')}
                      />
                    </ReadMore>
                    <View style={ReviewDetailStyle.IconsComment}>
                      <TouchableOpacity
                        style={ReviewDetailStyle.BorderUpvote}
                        onPress={() => submitUpVoted(item.id)}>
                        <FastImage
                          source={
                            item.isUpvoted
                              ? icons.arrow_up
                              : icons.arrow_up_white
                          }
                          style={ReviewDetailStyle.IconStar}
                        />
                        <Text style={ReviewDetailStyle.LabelUserIcon}>
                          {kFormatter(item.voted)}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => showComments(item, index)}
                        style={ReviewDetailStyle.CommentChatIcon}>
                        <FastImage
                          source={icons.chat}
                          style={ReviewDetailStyle.IconChat}
                        />
                        <Text style={ReviewDetailStyle.LabelUserIconComment}>
                          {kFormatter(item.countedComment)}
                        </Text>
                      </TouchableOpacity>
                      <View style={ReviewDetailStyle.CommentChatIcon}>
                        <FastImage
                          source={icons.eye}
                          style={ReviewDetailStyle.IconChat}
                        />
                        <Text style={ReviewDetailStyle.LabelUserIconComment}>
                          {kFormatter(item.views)}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          toggleModal();
                          setTriggerFrom('reviewcomment');
                        }}
                        style={ReviewDetailStyle.CommentChatIcon}>
                        <FastImage
                          source={icons.more}
                          style={ReviewDetailStyle.IconMore}
                        />
                      </TouchableOpacity>
                    </View>
                    {item.isHide
                      ? null
                      : item?.countedComment < 1
                      ? null
                      : item?.Comments?.length > 0
                      ? renderItemComment(item.Comments)
                      : null}
                  </View>
                );
              })}
          </View>
          <BottomModal
            isModalVisible={isModalVisible}
            toggleModal={() => toggleModal()}
            triggerFrom={triggerFrom}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ReviewDetail;
