import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import {icons, kFormatter} from '../constants';
import PeopleStyle from '../assets/styles/PeopleStyle';
import FastImage from 'react-native-fast-image';

const Activities = ({activateButton, status}) => {
  return (
    <View style={PeopleStyle.ParentActivity}>
      <View style={PeopleStyle.ContainerAct}>
        <TouchableOpacity
          style={
            status.isActive1
              ? PeopleStyle.ContainerDetailActive
              : PeopleStyle.ContainerDetail
          }
          onPress={() => activateButton(1)}>
          <View style={PeopleStyle.ContainerAtas}>
            <FastImage
              source={status.isActive1 ? icons.follower_a : icons.follower}
              style={PeopleStyle.ActivityIcon}
            />
            <Text
              style={
                status.isActive1 ? PeopleStyle.JumlahActive : PeopleStyle.Jumlah
              }>
              {kFormatter(150000068)}
            </Text>
          </View>
          <Text
            style={
              status.isActive1
                ? PeopleStyle.TitleActActive
                : PeopleStyle.TitleAct
            }>
            Followers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            status.isActive2
              ? PeopleStyle.ContainerDetailActive
              : PeopleStyle.ContainerDetail
          }
          onPress={() => activateButton(2)}>
          <View style={PeopleStyle.ContainerAtas}>
            <FastImage
              source={
                status.isActive2 ? icons.product_post_a : icons.product_post
              }
              style={
                status.isActive2
                  ? PeopleStyle.ActivityIconActive
                  : PeopleStyle.ActivityIcon
              }
            />
            <Text
              style={
                status.isActive2 ? PeopleStyle.JumlahActive : PeopleStyle.Jumlah
              }>
              {kFormatter(500068)}
            </Text>
          </View>
          <Text
            style={
              status.isActive2
                ? PeopleStyle.TitleActActive
                : PeopleStyle.TitleAct
            }>
            Product Posted
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            status.isActive3
              ? PeopleStyle.ContainerDetailActive
              : PeopleStyle.ContainerDetail
          }
          onPress={() => activateButton(3)}>
          <View style={PeopleStyle.ContainerAtas}>
            <FastImage
              source={
                status.isActive3 ? icons.question_post_a : icons.question_post
              }
              style={PeopleStyle.ActivityIcon}
            />
            <Text
              style={
                status.isActive3 ? PeopleStyle.JumlahActive : PeopleStyle.Jumlah
              }>
              {kFormatter(91500068)}
            </Text>
          </View>
          <Text
            style={
              status.isActive3
                ? PeopleStyle.TitleActActive
                : PeopleStyle.TitleAct
            }>
            Question Posted
          </Text>
        </TouchableOpacity>
      </View>

      <View style={PeopleStyle.ContainerAct}>
        <TouchableOpacity
          style={
            status.isActive4
              ? PeopleStyle.ContainerDetailActive
              : PeopleStyle.ContainerDetail
          }
          onPress={() => activateButton(4)}>
          <View style={PeopleStyle.ContainerAtas}>
            <FastImage
              source={status.isActive4 ? icons.following_a : icons.following}
              style={PeopleStyle.ActivityIcon}
            />
            <Text
              style={
                status.isActive4 ? PeopleStyle.JumlahActive : PeopleStyle.Jumlah
              }>
              {kFormatter(915068)}
            </Text>
          </View>
          <Text
            style={
              status.isActive4
                ? PeopleStyle.TitleActActive
                : PeopleStyle.TitleAct
            }>
            Following
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            status.isActive5
              ? PeopleStyle.ContainerDetailActive
              : PeopleStyle.ContainerDetail
          }
          onPress={() => activateButton(5)}>
          <View style={PeopleStyle.ContainerAtas}>
            <FastImage
              source={
                status.isActive5 ? icons.product_review_a : icons.product_review
              }
              style={PeopleStyle.ActivityIcon}
            />
            <Text
              style={
                status.isActive5 ? PeopleStyle.JumlahActive : PeopleStyle.Jumlah
              }>
              {kFormatter(105068)}
            </Text>
          </View>
          <Text
            style={
              status.isActive5
                ? PeopleStyle.TitleActActive
                : PeopleStyle.TitleAct
            }>
            Product Reviewed
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            status.isActive6
              ? PeopleStyle.ContainerDetailActive
              : PeopleStyle.ContainerDetail
          }
          onPress={() => activateButton(6)}>
          <View style={PeopleStyle.ContainerAtas}>
            <FastImage
              source={
                status.isActive6
                  ? icons.question_answered_a
                  : icons.question_answered
              }
              style={PeopleStyle.ActivityIcon}
            />
            <Text
              style={
                status.isActive6 ? PeopleStyle.JumlahActive : PeopleStyle.Jumlah
              }>
              {kFormatter(105068)}
            </Text>
          </View>
          <Text
            style={
              status.isActive6
                ? PeopleStyle.TitleActActive
                : PeopleStyle.TitleAct
            }>
            Question Answered
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Activities;
