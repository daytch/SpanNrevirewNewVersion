import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {icons, kFormatter} from '../constants';
import PeopleStyle from '../assets/styles/PeopleStyle';
import ReadMore from '@fawazahmed/react-native-read-more';
import FastImage from 'react-native-fast-image';

const QuestionPosted = ({data}) => {
  const [dataQuestionPosted, setDataQuestionPosted] = useState(data);
  return (
    <>
      <Text style={PeopleStyle.LabelActivities}>Question Posted</Text>
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
          {dataQuestionPosted.map((item, index) => {
            return (
              <View key={index} style={PeopleStyle.ContainerQuestionPosted}>
                <ReadMore
                  numberOfLines={3}
                  seeMoreText={'-See more'}
                  seeMoreStyle={PeopleStyle.See}
                  seeLessText={'-See less'}
                  seeLessStyle={PeopleStyle.See}
                  style={PeopleStyle.TextDescription}>
                  {item.desc}
                </ReadMore>
                <View style={PeopleStyle.ContainerQuestionPostedFooter}>
                  <View style={PeopleStyle.ContainerQPAnswer}>
                    <FastImage source={icons.forward} style={PeopleStyle.FwIcon} />
                    <Text style={PeopleStyle.AnswersText}>
                      {kFormatter(item.answer)} Answers
                    </Text>
                  </View>
                  <View style={PeopleStyle.ContainerQPViews}>
                    <FastImage source={icons.eye} style={PeopleStyle.IconEye} />

                    <Text style={PeopleStyle.AnswersText}>
                      {kFormatter(item.views)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};
export default QuestionPosted;
