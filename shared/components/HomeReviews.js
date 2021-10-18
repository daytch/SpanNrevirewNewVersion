import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons, kFormatter} from '../../constants';
import {launchImageLibrary} from 'react-native-image-picker';
import HomeReviewStyle from '../../assets/styles/HomeReviewStyle';
import {useNavigation} from '@react-navigation/native';
import {reviews} from '../shared/api';

const HomeReviews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getData() {
    let dt = JSON.stringify({
      categoryId: 5,
      search: '',
      order: 'upvoted',
      take: 20,
      skip: 0, //currentPage === 1 ? currentPage : currentPage + 1,
    });
    reviews
      .getAllProduct(dt)
      .then((e) => {
        let response = e.data;
        let datas = [];
        if (response) {
          response.map((item) => {
            var d = {
              id: item.id,
              title: item.title,
              aveRating: item.aveRating,
              rating: item.rating,
              views: item.views,
              image: item.image,
            };
            datas.push(d);
          });
          // setData([...data, datas]);
          setData(datas);
          console.log(JSON.stringify(data));
        }
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          navigation.navigate('Login');
        }
        // alert(error.message);
      });
  }

  const navigation = useNavigation();
  const selectFile = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        // alert(res.customButton);
      } else {
        console.log('response', JSON.stringify(res));
        // resourcePath = res;
      }
    });
  };

  return (
    <>
      <View style={HomeReviewStyle.container}>
        <View style={HomeReviewStyle.Body}>
          <TouchableOpacity onPress={() => navigation.navigate('Category')}>
            <FastImage
              style={HomeReviewStyle.IconHumburger}
              source={icons.humburger}
            />
          </TouchableOpacity>

          <View style={HomeReviewStyle.ContainerSearch}>
            <View style={HomeReviewStyle.BodySearch}>
              <TouchableOpacity>
                <FastImage
                  source={icons.loop}
                  style={HomeReviewStyle.IconLoop}
                />
              </TouchableOpacity>
              <TextInput
                keyboardShouldPersistTaps
                style={HomeReviewStyle.InputSearch}
                placeholder="Search something..."
                underlineColorAndroid="transparent"
                // selection={{ start: 100, end: 1 }}
                onSelectionChange={(event) =>
                  console.log(event.nativeEvent.selection)
                }
              />
            </View>
          </View>

          {/* <TouchableOpacity onPress={() => navigation.navigate('CameraDepan')}> */}
          <TouchableOpacity onPress={() => selectFile()}>
            {/* <RadialGradient
              style={HomeReviewStyle.RadialGradient}
              colors={['#FFFFFF', '#FBFBFC', '#F0F0F3', '#E3E4E9']}
              stops={[0.1, 0.4, 0.3, 0.75]}
              center={[100, 100]}> */}
            <View style={HomeReviewStyle.RadialGradient}>
              <FastImage source={icons.cam} style={HomeReviewStyle.IconCam} />
            </View>
            {/* </RadialGradient> */}
          </TouchableOpacity>

          <TouchableOpacity>
            <FastImage source={icons.sort} style={HomeReviewStyle.IconSort} />
          </TouchableOpacity>
        </View>

        <View style={HomeReviewStyle.ContainerList}>
          <FlatList
            columnWrapperStyle={HomeReviewStyle.FlatWrapper}
            contentContainerStyle={HomeReviewStyle.FlatContainer}
            data={data}
            keyExtractor={(item) => item.id}
            horizontal={false}
            numColumns={2}
            renderSeparatorView={() => {
              return <View style={HomeReviewStyle.FlatSeparator} />;
            }}
            renderItem={({item}) => (
              <View style={HomeReviewStyle.ContainerRender}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ReviewDetail', {
                      id: item.id,
                    })
                  }
                  style={HomeReviewStyle.ContainerImage}>
                  {item.image ? (
                    <FastImage
                      source={{uri: `${item.image}`}}
                      resizeMode={'contain'}
                      style={HomeReviewStyle.IconProduct}
                    />
                  ) : null}
                </TouchableOpacity>

                <View style={HomeReviewStyle.ContainerTitle}>
                  <Text numberOfLines={1} style={HomeReviewStyle.LabelTitle}>
                    {item.title}
                  </Text>
                </View>
                <View style={HomeReviewStyle.ContainerFooter}>
                  <View style={HomeReviewStyle.ContainerCounter}>
                    <FastImage
                      source={icons.star}
                      style={HomeReviewStyle.IconStar}
                    />
                    <Text style={HomeReviewStyle.LabelRating}>
                      {item.aveRating.toFixed(1)} ({kFormatter(item.rating)})
                    </Text>
                  </View>
                  <View style={HomeReviewStyle.ContainerView}>
                    <FastImage
                      source={icons.eye}
                      style={HomeReviewStyle.IconEye}
                    />
                    <Text style={HomeReviewStyle.LabelView}>
                      {kFormatter(item.views)}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            // onEndReachedThreshold={0}
            // onEndReached={(e) => getData()}
          />
        </View>
      </View>
    </>
  );
};

export default HomeReviews;
