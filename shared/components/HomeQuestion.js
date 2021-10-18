import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {icons, kFormatter} from '../../constants';
import HomeQuestionStyle from '../assets/styles/HomeQuestionStyle';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const HomeQuestion = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      id: 1,
      content:
        'Card 1, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      answers: 4235,
      views: 5200,
      category: 'Electronics',
    },
    {
      id: 2,
      content:
        'Card 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answers: 245,
      views: 500,
      category: 'Healhty & Beauty',
    },
    {
      id: 3,
      content:
        'Card 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answers: 10025,
      views: 15496,
      category: 'Sports',
    },
    {
      id: 4,
      content:
        'Card 4, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answers: 3658,
      views: 9875,
      category: 'Games',
    },
    {
      id: 5,
      content:
        'Card 5, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answers: 352,
      views: 798,
      category: 'Foods',
    },
    {
      id: 6,
      content:
        'Card 6, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answers: 95,
      views: 129,
      category: 'Electronics',
    },
    {
      id: 7,
      content:
        'Card 7, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answers: 963,
      views: 1200,
      category: 'Games',
    },
    {
      id: 8,
      content:
        'Card 8, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answers: 658,
      views: 2125,
      category: 'Sports',
    },
  ]);
  return (
    <>
      <View style={HomeQuestionStyle.container}>
        <View style={HomeQuestionStyle.Body}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Category', {from: 'HomeQuestion'})
            }>
            <FastImage
              style={HomeQuestionStyle.IconHumburger}
              source={icons.humburger}
            />
          </TouchableOpacity>

          <View style={HomeQuestionStyle.ContainerSearch}>
            <View style={HomeQuestionStyle.BodySearch}>
              <FastImage source={icons.loop} style={HomeQuestionStyle.IconLoop} />
              <TextInput
                keyboardShouldPersistTaps
                style={HomeQuestionStyle.InputSearch}
                placeholder="Search something..."
                underlineColorAndroid="transparent"
                // selection={{ start: 100, end: 1 }}
                onSelectionChange={(event) =>
                  console.log(event.nativeEvent.selection)
                }
              />
            </View>
          </View>

          <TouchableOpacity>
            <FastImage source={icons.sort} style={HomeQuestionStyle.IconSort} />
          </TouchableOpacity>
        </View>

        {data.map((item, index) => {
          return (
            <View key={index}>
              <View style={HomeQuestionStyle.ContainerRender}>
                <View style={HomeQuestionStyle.ContainerCategory}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('QuestionCategory', {
                        category: 'Electronics > Speaker & Microphone',
                      })
                    }>
                    <Text style={HomeQuestionStyle.FontCategory}>
                      found in{' '}
                      <Text style={HomeQuestionStyle.FontCategories}>
                        {item.category}
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={HomeQuestionStyle.ContainerQuestion}
                  onPress={() =>
                    navigation.navigate('QuestionDetail', {
                      content:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                      id: 1,
                    })
                  }>
                  <Text numberOfLines={5}>{item.content}</Text>
                </TouchableOpacity>
                <View style={HomeQuestionStyle.ContainerFooter}>
                  <View style={HomeQuestionStyle.FooterColumn}>
                    <FastImage
                      source={icons.forward}
                      style={HomeQuestionStyle.FwIcon}
                    />
                    <Text style={HomeQuestionStyle.AnswersText}>
                      {kFormatter(item.answers)} Answers
                    </Text>
                  </View>
                  <View style={HomeQuestionStyle.FooterColumnRight}>
                    <FastImage
                      source={icons.eye}
                      style={HomeQuestionStyle.EyeIcon}
                    />
                    <Text style={HomeQuestionStyle.AnswersText}>
                      {kFormatter(item.views)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={HomeQuestionStyle.SeparatorLine} />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default HomeQuestion;
