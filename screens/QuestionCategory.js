import React, {useState} from 'react';
import {Text, View,  TouchableOpacity, SafeAreaView} from 'react-native';
import {icons, kFormatter} from '../../constants';
import FastImage from 'react-native-fast-image';
import QuestionCategoryStyle from '../assets/styles/QuestionCategoryStyle';

const QuestionCategory = ({route, navigation}) => {
  console.log(route.params);
  const category = route.params?.category;
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
      <SafeAreaView style={QuestionCategoryStyle.SafeArea}>
        <View style={QuestionCategoryStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage
              source={icons.back}
              style={QuestionCategoryStyle.ImageBack}
            />
          </TouchableOpacity>
          <Text style={QuestionCategoryStyle.Label}>Category | Questions</Text>
        </View>
      </SafeAreaView>

      <View style={QuestionCategoryStyle.container}>
        <View style={QuestionCategoryStyle.Body}>
          <Text style={QuestionCategoryStyle.CategoryTitle}>{category}</Text>
          <TouchableOpacity>
            <FastImage source={icons.sort} style={QuestionCategoryStyle.IconSort} />
          </TouchableOpacity>
        </View>

        {data.map((item, index) => {
          return (
            <View key={index}>
              <View style={QuestionCategoryStyle.ContainerRender}>
                <View style={QuestionCategoryStyle.ContainerQuestion}>
                  <Text numberOfLines={3}>{item.content}</Text>
                </View>
                <View style={QuestionCategoryStyle.ContainerFooter}>
                  <View style={QuestionCategoryStyle.FooterColumn}>
                    <FastImage
                      source={icons.forward}
                      style={QuestionCategoryStyle.FwIcon}
                    />
                    <Text style={QuestionCategoryStyle.AnswersText}>
                      {kFormatter(item.answers)} Answers
                    </Text>
                  </View>
                  <View style={QuestionCategoryStyle.FooterColumnRight}>
                    <FastImage
                      source={icons.eye}
                      style={QuestionCategoryStyle.EyeIcon}
                    />
                    <Text style={QuestionCategoryStyle.AnswersText}>
                      {kFormatter(item.views)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={QuestionCategoryStyle.SeparatorLine} />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default QuestionCategory;
