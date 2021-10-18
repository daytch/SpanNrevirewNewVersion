import React, {useState} from 'react';
import {Text, View, FlatList, SafeAreaView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {icons, images, urls} from '../constants';
import ReviewAddImageStyle from '../../assets/styles/ReviewAddImageStyle';
import {launchImageLibrary} from 'react-native-image-picker';
import {COLORS} from '../constants/theme';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import {MMKV} from 'react-native-mmkv';
import FastImage from 'react-native-fast-image';

const ReviewAddImage = ({route, navigation}) => {
  const {category, title, id, img} = route.params;
  console.log(route.params);
  const [data] = useState([
    {
      id: 1,
      likes: 5200,
      image: images.kamera,
    },
    {
      id: 2,
      likes: 500,
      image: images.microwave,
    },
    {
      id: 3,
      likes: 15496,
      image: images.laptop,
    },
    {
      id: 4,
      likes: 9875,
      image: images.stick,
    },
    {
      id: 5,
      likes: 798,
      image: images.kamera,
    },
    {
      id: 6,
      likes: 129,
      image: images.smartwatch,
    },
    {
      id: 7,
      likes: 1200,
      image: images.laptop,
    },
    {
      id: 8,
      likes: 2125,
      image: images.stick,
    },
    {
      id: 9,
      likes: 1200,
      image: images.laptop,
    },
    {
      id: 10,
      likes: 2125,
      image: images.stick,
    },
  ]);
  const [box1, setBox1] = useState({uri: null, isHideImg: true, file: null});
  const [box2, setBox2] = useState({uri: null, isHideImg: true, file: null});
  const [box3, setBox3] = useState({uri: null, isHideImg: true, file: null});
  const [box4, setBox4] = useState({uri: null, isHideImg: true, file: null});
  const [box5, setBox5] = useState({uri: null, isHideImg: true, file: null});
  const [box6, setBox6] = useState({uri: null, isHideImg: true, file: null});
  const [box7, setBox7] = useState({uri: null, isHideImg: true, file: null});
  const [box8, setBox8] = useState({uri: null, isHideImg: true, file: null});
  const [box9, setBox9] = useState({uri: null, isHideImg: true, file: null});
  const [box10, setBox10] = useState({uri: null, isHideImg: true, file: null});
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function tambahSatu(idx) {
    return idx + 1;
  }

  function removeImage(idx) {
    console.log(idx);
    switch (idx) {
      case 1:
        setBox1({isHideImg: true, uri: null});
        break;
      case 2:
        setBox2({isHideImg: true, uri: null});
        break;
      case 3:
        setBox3({isHideImg: true, uri: null});
        break;
      case 4:
        setBox4({isHideImg: true, uri: null});
        break;
      case 5:
        setBox5({isHideImg: true, uri: null});
        break;
      case 6:
        setBox6({isHideImg: true, uri: null});
        break;
      case 7:
        setBox7({isHideImg: true, uri: null});
        break;
      case 8:
        setBox8({isHideImg: true, uri: null});
        break;
      case 9:
        setBox9({isHideImg: true, uri: null});
        break;
      case 10:
        setBox10({isHideImg: true, uri: null});
        break;
    }
  }

  function uploadImage(idx) {
    console.log('test upload');
    console.log(idx);
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
        // console.log('response', JSON.stringify(res));
        switch (idx) {
          case 1:
            setBox1({isHideImg: false, uri: res.uri, file: res});
            break;
          case 2:
            setBox2({isHideImg: false, uri: res.uri, file: res});
            break;
          case 3:
            setBox3({isHideImg: false, uri: res.uri, file: res});
            break;
          case 4:
            setBox4({isHideImg: false, uri: res.uri, file: res});
            break;
          case 5:
            setBox5({isHideImg: false, uri: res.uri, file: res});
            break;
          case 6:
            setBox6({isHideImg: false, uri: res.uri, file: res});
            break;
          case 7:
            setBox7({isHideImg: false, uri: res.uri, file: res});
            break;
          case 8:
            setBox8({isHideImg: false, uri: res.uri, file: res});
            break;
          case 9:
            setBox9({isHideImg: false, uri: res.uri, file: res});
            break;
          case 10:
            setBox10({isHideImg: false, uri: res.uri, file: res});
            break;
        }
      }
    });
  }

  function renderBox(index) {
    let idx = tambahSatu(index);
    let comp;
    switch (idx) {
      case 1:
        comp = (
          <>
            <FastImage
              source={{uri: box1.uri}}
              style={
                box1.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box1.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close1}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box1.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 2:
        comp = (
          <>
            <FastImage
              source={{uri: box2.uri}}
              style={
                box2.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box2.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close2}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box2.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 3:
        comp = (
          <>
            <FastImage
              source={{uri: box3.uri}}
              style={
                box3.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box3.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close3}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box3.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 4:
        comp = (
          <>
            <FastImage
              source={{uri: box4.uri}}
              style={
                box4.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box4.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close4}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box4.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 5:
        comp = (
          <>
            <FastImage
              source={{uri: box5.uri}}
              style={
                box5.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box5.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close5}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box5.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 6:
        comp = (
          <>
            <FastImage
              source={{uri: box6.uri}}
              style={
                box6.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box6.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close1}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box6.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 7:
        comp = (
          <>
            <FastImage
              source={{uri: box7.uri}}
              style={
                box7.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box7.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close2}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box7.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 8:
        comp = (
          <>
            <FastImage
              source={{uri: box8.uri}}
              style={
                box8.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box8.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close3}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box8.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 9:
        comp = (
          <>
            <FastImage
              source={{uri: box9.uri}}
              style={
                box9.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box9.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close4}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box9.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 10:
        comp = (
          <>
            <FastImage
              source={{uri: box10.uri}}
              style={
                box10.isHideImg
                  ? ReviewAddImageStyle.Hide
                  : ReviewAddImageStyle.ImageUpload
              }
            />
            <TouchableOpacity
              style={box10.isHideImg ? ReviewAddImageStyle.Hide : ''}
              onPress={() => removeImage(idx)}>
              <FastImage
                source={icons.x_sign}
                style={ReviewAddImageStyle.Close5}
              />
            </TouchableOpacity>
            {/* For Empty Image */}
            <View
              style={
                box10.isHideImg
                  ? ReviewAddImageStyle.EmptyImage
                  : ReviewAddImageStyle.Hide
              }>
              <TouchableOpacity onPress={() => uploadImage(idx)}>
                <FastImage
                  source={icons.cam_plus}
                  style={ReviewAddImageStyle.CamPlus}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
    }
    return comp;
  }
  function setUploadImage(image) {
    if (image) {
      return {
        uri: image?.file?.uri,
        name: image?.file?.fileName,
        type: image?.file?.type,
      };
    } else {
      return null;
    }
  }
  function submitImages() {
    setIsLoading(true);
    console.log('submitImages');
    let formData = new FormData();
    formData.append('category', category);
    formData.append('productId', id);
    console.log('box2 => ' + JSON.stringify(box2));
    if (box1.uri && box1.file) {
      formData.append('image1', setUploadImage(box1));
    }
    if (box2.uri && box2.file) {
      formData.append('image2', setUploadImage(box2));
    }
    if (box3.uri && box3.file) {
      formData.append('image3', setUploadImage(box3));
    }
    if (box4.uri && box4.file) {
      formData.append('image4', setUploadImage(box4));
    }
    if (box5.uri && box5.file) {
      formData.append('image5', setUploadImage(box5));
    }
    if (box6.uri && box6.file) {
      formData.append('image6', setUploadImage(box6));
    }
    if (box7.uri && box7.file) {
      formData.append('image7', setUploadImage(box7));
    }
    if (box8.uri && box8.file) {
      formData.append('image8', setUploadImage(box8));
    }
    if (box9.uri && box9.file) {
      formData.append('image9', setUploadImage(box9));
    }
    if (box10.uri && box10.file) {
      formData.append('image10', setUploadImage(box10));
    }
    formData.append('isAnonymous', toggleCheckBox ? 1 : 0);
    console.log(formData);

    let token = MMKV.getString('token');
    axios({
      url: urls.api + '/user/uploadProductImages',
      method: 'POST',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'x-access-token': token,
      },
    })
      .then((res) => {
        setIsLoading(false);
        let d = res.data;
        if (d.isSuccess) {
          navigation.navigate('ReviewDetail', {
            id: id,
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          navigation.navigate('Login');
        }
        // alert(error.message);
      });
    // reviews
    //   .uploadProductImages(formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (error.response.status === 401 || error.response.status === 403) {
    //       navigation.navigate('Login');
    //     }
    //     // alert(error.message);
    //   });
  }

  return (
    <>
      <Spinner visible={isLoading} />
      <SafeAreaView style={ReviewAddImageStyle.SafeArea}>
        <View style={ReviewAddImageStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage
              source={icons.back}
              style={ReviewAddImageStyle.ImageBack}
            />
          </TouchableOpacity>
          <Text style={ReviewAddImageStyle.Label}>Add Image</Text>
        </View>
      </SafeAreaView>

      <View style={ReviewAddImageStyle.Contents}>
        <View style={ReviewAddImageStyle.ContainerTitle}>
          <FastImage
            source={{uri: img}}
            style={ReviewAddImageStyle.ImageTitle}
            defaultSource={require('../assets/images/default.png')}
          />
          <View style={ReviewAddImageStyle.TextTitle}>
            <Text style={ReviewAddImageStyle.Title}>{title}</Text>
            <Text style={ReviewAddImageStyle.Category}>{category}</Text>
          </View>
        </View>

        <View style={ReviewAddImageStyle.ContainerImages}>
          <Text style={ReviewAddImageStyle.TextUpload}>Upload Image</Text>
          <View style={ReviewAddImageStyle.ImageBox}>
            <FlatList
              contentContainerStyle={ReviewAddImageStyle.FlatContainer}
              data={data}
              keyExtractor={(item) => item.id}
              horizontal={false}
              numColumns={5}
              renderSeparatorView={() => {
                return <View style={ReviewAddImageStyle.FlatSeparator} />;
              }}
              renderItem={({item, index}) => renderBox(index)}
            />
          </View>
        </View>

        <View style={ReviewAddImageStyle.ContainerAnonim}>
          <CheckBox
            style={ReviewAddImageStyle.CheckBox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            onCheckColor={COLORS.primary}
            // onFillColor={COLORS.primary}
            onTintColor={COLORS.primary}
          />
          <Text style={ReviewAddImageStyle.TextAnonim}>
            Submit Anonymously (Hide Your Name)
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => submitImages()}
          style={ReviewAddImageStyle.ButtonSubmit}>
          <Text style={ReviewAddImageStyle.TextSubmit}>Submit Images</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default ReviewAddImage;
