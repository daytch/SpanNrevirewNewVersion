import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {icons, kFormatter} from '../constants';
import PeopleStyle from '../assets/styles/PeopleStyle';
import FastImage from 'react-native-fast-image';

const ProductPosted = ({data, navigation}) => {
  const [dataProductPosted, setDataProductPosted] = useState(data);
  return (
    <>
      <Text style={PeopleStyle.LabelActivities}>Product Posted</Text>
      <View style={PeopleStyle.ParentFollowers}>
        <View style={PeopleStyle.ContainerSearch}>
          <View style={PeopleStyle.BodySearch}>
            <FastImage source={icons.loop} style={PeopleStyle.IconLoop} />
            <TextInput
              keyboardShouldPersistTaps
              style={PeopleStyle.InputSearch}
              placeholder="Search something..."
              underlineColorAndroid="transparent"
              // selection={{ start: 100, end: 1 }}
              onSelectionChange={(event) =>
                console.log(event.nativeEvent.selection)
              }
            />
          </View>
        </View>
        <View style={PeopleStyle.ContentContainerFlatList}>
          {dataProductPosted.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ReviewDetail', {
                    id: item.id,
                  })
                }
                key={index}>
                <View style={PeopleStyle.ContainerProductPosted}>
                  <FastImage source={item.img} style={PeopleStyle.ImageProduct} />
                  <View style={PeopleStyle.ContainerProductTitle}>
                    <Text style={PeopleStyle.LabelTitle}>{item.title}</Text>
                    <Text style={PeopleStyle.LabelCategory}>
                      {item.category}
                    </Text>
                  </View>
                </View>
                <View style={PeopleStyle.FooterProduct}>
                  <View style={PeopleStyle.Rating}>
                    <FastImage source={icons.star} style={PeopleStyle.IconStar} />
                    <Text style={PeopleStyle.LabelFooterProduct}>
                      {item.avgRating}
                    </Text>
                    <Text style={PeopleStyle.LabelFooterProduct}>
                      ({kFormatter(item.reviews)} reviews)
                    </Text>
                  </View>
                  <View style={PeopleStyle.Viewer}>
                    <FastImage source={icons.eye} style={PeopleStyle.IconEye} />
                    <Text style={PeopleStyle.LabelFooterProduct}>
                      {kFormatter(item.viewer)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default ProductPosted;
