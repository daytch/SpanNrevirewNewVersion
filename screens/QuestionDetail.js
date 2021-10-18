import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS, icons, images, kFormatter} from '../constants';
import QuestionDetailStyle from '../assets/styles/QuestionDetailStyle';
import {Avatar} from 'react-native-elements';
import moment from 'moment';
import {BottomModal} from '../shared/components';
import ReadMore from '@fawazahmed/react-native-read-more';

const QuestionDetail = ({route, navigation}) => {
  const {content} = route.params;
  const [data, setData] = useState([
    {
      id: 1,
      name: 'John Doe',
      createdDate: '2020-11-28',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn"t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      upvote: 4235,
      aveRating: 3.6,
      views: 5200,
      comment: 251,
      image: images.user3,
      isUpvoted: true,
      comments: [
        {
          id: 10,
          name: 'John Sinna',
          createdDate: '2020-11-28',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          upvote: 45,
          aveRating: 3.4,
          comment: 91,
          image: images.user2,
          isUpvoted: true,
        },
        {
          id: 11,
          name: 'John Doe',
          createdDate: '2020-11-28',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          upvote: 8908,
          aveRating: 4.4,
          comment: 123,
          image: images.user3,
          isUpvoted: false,
        },
      ],
    },
    {
      id: 2,
      name: 'John Sinna',
      createdDate: '2020-11-28',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      upvote: 45,
      aveRating: 3.4,
      views: 500,
      comment: 91,
      image: images.user2,
      isUpvoted: false,
    },
  ]);
  const [hideComments, setHideComments] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [triggerFrom, setTriggerFrom] = useState('');

  const toggleModal = (param) => {
    setModalVisible(!isModalVisible);
  };

  const renderCommentInComment = (datas) => {
    let jmlComment = Object.keys(datas).length;
    return (
      <>
        <FlatList
          // style={QuestionDetailStyle.FlatList}
          data={datas}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={1}
          renderItem={({item, index}) =>
            index === 0 ? (
              renderItemComment(item)
            ) : (
              <View
                style={
                  hideComments
                    ? QuestionDetailStyle.hide
                    : QuestionDetailStyle.show
                }>
                {renderItemComment(item)}
              </View>
            )
          }
        />

        <View
          style={
            hideComments
              ? QuestionDetailStyle.ContainerSeeAll
              : QuestionDetailStyle.hide
          }>
          <TouchableOpacity
            onPress={() => {
              setHideComments(false);
            }}>
            <Text style={QuestionDetailStyle.TextSeeAll}>
              See All ({jmlComment}) Replies >{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderItemComment = (item) => {
    return (
      <View style={QuestionDetailStyle.ContainerRenderCnC}>
        <TouchableOpacity style={QuestionDetailStyle.ContainerCardComment}>
          <View style={QuestionDetailStyle.UserComment}>
            <View style={QuestionDetailStyle.UserIconComment}>
              <Avatar rounded source={item.image} />
            </View>
            <View style={QuestionDetailStyle.UserPropsComment}>
              <View style={QuestionDetailStyle.CommentContainerName}>
                <Text style={QuestionDetailStyle.UserNameComment}>
                  {item.name} -
                </Text>
                <Text style={QuestionDetailStyle.UserTitleComment}>
                  {' ' + moment(new Date(item.createdDate)).format('LL')}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <ReadMore
            numberOfLines={3}
            seeMoreText={'-See more'}
            seeMoreStyle={QuestionDetailStyle.See}
            seeLessText={'-See less'}
            seeLessStyle={QuestionDetailStyle.See}
            style={{color: COLORS.black}}>
            {item.desc}
          </ReadMore>
        </View>
        <View style={QuestionDetailStyle.IconsComment}>
          <View style={QuestionDetailStyle.BorderUpvote}>
            <FastImage
              source={item.isUpvoted ? icons.arrow_up : icons.arrow_up_white}
              style={QuestionDetailStyle.IconStar}
            />
            <Text style={QuestionDetailStyle.LabelUserIcon}>
              {kFormatter(item.upvote)}
            </Text>
          </View>
          <View style={QuestionDetailStyle.CommentChatIcon}>
            <FastImage source={icons.chat} style={QuestionDetailStyle.IconChat} />
            <Text style={QuestionDetailStyle.LabelUserIconComment}>Reply</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              setTriggerFrom('questioncomment');
            }}
            style={QuestionDetailStyle.CommentChatIcon}>
            <FastImage source={icons.more} style={QuestionDetailStyle.IconMore} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={QuestionDetailStyle.SafeArea}>
        <View style={QuestionDetailStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage source={icons.back} style={QuestionDetailStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={QuestionDetailStyle.Label}>Questions</Text>
        </View>
      </SafeAreaView>

      <View style={QuestionDetailStyle.Contents}>
        <View style={QuestionDetailStyle.User}>
          <View style={QuestionDetailStyle.UserIcon}>
            <Avatar rounded source={images.user1} />
          </View>
          <View style={QuestionDetailStyle.UserProps}>
            <Text style={QuestionDetailStyle.UserName}>
              by Elizabeth - Nov 22, 2020
            </Text>
            <Text style={QuestionDetailStyle.UserTitle}>
              Camera Canon D4 + Wide Lens
            </Text>
          </View>
        </View>

        <View style={QuestionDetailStyle.QuestionContent}>
          <ReadMore
            numberOfLines={3}
            seeMoreText={'-See more'}
            seeMoreStyle={QuestionDetailStyle.See}
            seeLessText={'-See less'}
            seeLessStyle={QuestionDetailStyle.See}
            style={{color: COLORS.black}}>
            {content}
          </ReadMore>
        </View>

        <View style={QuestionDetailStyle.ContainerRating}>
          <TouchableOpacity
            style={QuestionDetailStyle.Ratings}
            onPress={() => navigation.navigate('QuestionAnswer')}>
            <FastImage
              source={icons.forward_white}
              style={QuestionDetailStyle.IconReply}
            />
            <Text style={QuestionDetailStyle.LabelRating}>Answer</Text>
          </TouchableOpacity>

          <View style={QuestionDetailStyle.More}>
            <TouchableOpacity
              onPress={() => {
                toggleModal();
                setTriggerFrom('questiondetail');
              }}>
              <FastImage style={QuestionDetailStyle.IconMore} source={icons.more} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={QuestionDetailStyle.ContainerButton}>
          <Text style={QuestionDetailStyle.TextTotal}>77 Answers</Text>
        </View>

        <View style={QuestionDetailStyle.ContainerSearch}>
          <TouchableOpacity>
            <FastImage source={icons.sort} style={QuestionDetailStyle.IconSort} />
          </TouchableOpacity>

          <View style={QuestionDetailStyle.BodySearch}>
            <FastImage source={icons.loop} style={QuestionDetailStyle.IconLoop} />
            <TextInput
              keyboardShouldPersistTaps
              style={QuestionDetailStyle.InputSearch}
              placeholder="Search something..."
              underlineColorAndroid="transparent"
              // selection={{ start: 100, end: 1 }}
              onSelectionChange={(event) =>
                console.log(event.nativeEvent.selection)
              }
            />
          </View>
        </View>
        {/* <ColoredLine color={COLORS.grayLine} /> */}
        <View style={QuestionDetailStyle.Comments}>
          <FlatList
            style={QuestionDetailStyle.FlatList}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            numColumns={1}
            renderItem={({item}) => (
              <View style={QuestionDetailStyle.ContainerRender}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('QuestionDetail', {
                      id: 1,
                    })
                  }
                  style={QuestionDetailStyle.ContainerCardComment}>
                  <View style={QuestionDetailStyle.UserComment}>
                    <View style={QuestionDetailStyle.UserIconComment}>
                      <Avatar rounded source={item.image} />
                    </View>
                    <View style={QuestionDetailStyle.UserPropsComment}>
                      <View style={QuestionDetailStyle.CommentContainerName}>
                        <Text style={QuestionDetailStyle.UserNameComment}>
                          {item.name} -
                        </Text>
                        <Text style={QuestionDetailStyle.UserTitleComment}>
                          {' ' +
                            moment(new Date(item.createdDate)).format('LL')}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View>
                  <ReadMore
                    numberOfLines={3}
                    seeMoreText={'-See more'}
                    seeMoreStyle={QuestionDetailStyle.See}
                    seeLessText={'-See less'}
                    seeLessStyle={QuestionDetailStyle.See}
                    style={{color: COLORS.black}}>
                    {item.desc}
                  </ReadMore>
                  {/* <Text
                    numberOfLines={3}
                    style={QuestionDetailStyle.CommentContent}>
                    {item.desc}
                  </Text> */}
                </View>
                <View style={QuestionDetailStyle.IconsComment}>
                  <View style={QuestionDetailStyle.BorderUpvote}>
                    <FastImage
                      source={
                        item.isUpvoted ? icons.arrow_up : icons.arrow_up_white
                      }
                      style={QuestionDetailStyle.IconStar}
                    />
                    <Text style={QuestionDetailStyle.LabelUserIcon}>
                      {kFormatter(item.upvote)}
                    </Text>
                  </View>
                  <View style={QuestionDetailStyle.CommentChatIcon}>
                    <FastImage
                      source={icons.chat}
                      style={QuestionDetailStyle.IconChat}
                    />
                    <Text style={QuestionDetailStyle.LabelUserIconComment}>
                      {kFormatter(item.comment)}
                    </Text>
                  </View>
                  <View style={QuestionDetailStyle.CommentChatIcon}>
                    <FastImage
                      source={icons.eye}
                      style={QuestionDetailStyle.IconChat}
                    />
                    <Text style={QuestionDetailStyle.LabelUserIconComment}>
                      {kFormatter(item.views)}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      toggleModal();
                      setTriggerFrom('questioncomment');
                    }}
                    style={QuestionDetailStyle.CommentChatIcon}>
                    <FastImage
                      source={icons.more}
                      style={QuestionDetailStyle.IconMore}
                    />
                  </TouchableOpacity>
                </View>

                <View style={QuestionDetailStyle.ContainerComment}>
                  <Avatar rounded source={item.image} />
                  <TextInput
                    keyboardShouldPersistTaps
                    style={QuestionDetailStyle.InputComment}
                    placeholder="Add a comment..."
                    underlineColorAndroid="transparent"
                    // selection={{ start: 100, end: 1 }}
                    onSelectionChange={(event) =>
                      console.log(event.nativeEvent.selection)
                    }
                  />
                </View>
                {item.comments && renderCommentInComment(item.comments)}
              </View>
            )}
            // onEndReachedThreshold={0}
            // onEndReached={(e) => getData()}
          />
        </View>
        <BottomModal
          isModalVisible={isModalVisible}
          toggleModal={() => toggleModal()}
          triggerFrom={triggerFrom}
        />
      </View>
    </>
  );
};

export default QuestionDetail;
