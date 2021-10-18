import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {icons} from '../constants';
import PeopleStyle from '../assets/styles/PeopleStyle';
import {Avatar} from 'react-native-elements';
import moment from 'moment';
import ReadMore from '@fawazahmed/react-native-read-more';
import FastImage from 'react-native-fast-image';

const ProductReviewed = ({data, navigation}) => {
  const [dataProductReviewed, setdataProductReviewed] = useState(data);

  let genKey = 0;
  function generateKey() {
    return (genKey = genKey + 1);
  }
  function renderStar(upvote) {
    const red = [];
    const white = [];

    for (var i = 0; i < upvote; i++) {
      red.push(
        <FastImage
          key={generateKey()}
          source={icons.star}
          style={PeopleStyle.IconStar}
        />,
      );
    }

    for (var i = 1; i < 5 - upvote; i++) {
      white.push(
        <FastImage
          key={generateKey()}
          source={icons.star_white}
          style={PeopleStyle.IconStar}
        />,
      );

      return (
        <View style={PeopleStyle.ContainerStars}>{red.concat(white)}</View>
      );
    }
  }

  return (
    <>
      <Text style={PeopleStyle.LabelActivities}>Product Reviewed</Text>
      <View style={PeopleStyle.ParentFollowers}>
        <View style={PeopleStyle.ContainerSearch}>
          <View style={PeopleStyle.BodySearch}>
            <FastImage source={icons.loop} style={PeopleStyle.IconLoop} />
            <TextInput
              keyboardShouldPersistTaps
              style={PeopleStyle.InputSearch}
              placeholder="Search something..."
              underlineColorAndroid="transparent"
              onSelectionChange={(event) =>
                console.log(event.nativeEvent.selection)
              }
            />
          </View>
        </View>
        <View style={PeopleStyle.ContentContainerFlatList}>
          {dataProductReviewed.map((item, index) => {
            return (
              <View key={index}>
                <View style={PeopleStyle.ContainerReviewer}>
                  <Avatar rounded={true} source={item.avatar} />
                  <View style={PeopleStyle.CommentContainerStar}>
                    {renderStar(item.avgRating)}
                    <View style={PeopleStyle.CommentContainerName}>
                      <Text style={PeopleStyle.UserNameComment}>
                        {item.username} -
                      </Text>
                      <Text style={PeopleStyle.UserTitleComment}>
                        {' ' + moment(new Date(item.date)).format('LL')}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={PeopleStyle.ContainerProductPosted}>
                  <FastImage
                    source={item.img && item.img[0]}
                    style={PeopleStyle.ImageProduct}
                  />
                  <View style={PeopleStyle.ContainerProductTitle}>
                    <Text style={PeopleStyle.LabelTitle}>{item.title}</Text>
                    <Text style={PeopleStyle.LabelCategory}>
                      {item.category}
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={PeopleStyle.ContainerImageMore}>
                    {item.img.map((x, idx) =>
                      idx < 2 ? (
                        <FastImage
                          key={idx}
                          source={x}
                          style={PeopleStyle.ImgMore}
                        />
                      ) : null,
                    )}
                  </View>
                  <ReadMore
                    numberOfLines={3}
                    seeMoreText={'-See more'}
                    seeMoreStyle={PeopleStyle.See}
                    seeLessText={'-See less'}
                    seeLessStyle={PeopleStyle.See}
                    style={PeopleStyle.TextDescription}>
                    {item.desc}
                  </ReadMore>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default ProductReviewed;
