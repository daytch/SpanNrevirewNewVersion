import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {icons} from '../constants';
import PeopleStyle from '../assets/styles/PeopleStyle';
import {Avatar} from 'react-native-elements';
import ReadMore from '@fawazahmed/react-native-read-more';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

const QuestionAnswered = ({data}) => {
  const [dataQuestionAnswered, setDataQuestionAnswered] = useState(data);
  return (
    <>
      <Text style={PeopleStyle.LabelActivities}>Question Answered</Text>
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
          {dataQuestionAnswered.map((item, index) => {
            return (
              <View key={index} style={PeopleStyle.ContainerQuestionPosted}>
                <View style={PeopleStyle.ContainerQAHeader}>
                  <Avatar source={item.img} rounded />
                  <View>
                    <Text>{item.username}</Text>
                    <Text style={PeopleStyle.UserTitleComment}>
                      {' ' + moment(new Date(item.date)).format('LL')}
                    </Text>
                  </View>
                </View>
                <Text style={PeopleStyle.Title}>{item.title}</Text>
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
            );
          })}
        </View>
      </View>
    </>
  );
};

export default QuestionAnswered;
