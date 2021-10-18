import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {icons, COLORS} from '../constants';
import ReviewNewStyle from '../assets/styles/ReviewNewStyle';
import CheckBox from '@react-native-community/checkbox';
import {launchImageLibrary} from 'react-native-image-picker';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {reviews} from '../shared/api';
import Spinner from 'react-native-loading-spinner-overlay';
import FastImage from 'react-native-fast-image';
// import SweetAlert from 'react-native-sweet-alert';

const ReviewNew = ({route, navigation}) => {
  const {category, title, id, img} = route.params;
  console.log(route.params);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [content, setContent] = useState('');
  const richText = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRatng] = useState([false, false, false, false, false]);

  function handleCustomAction() {}
  function onPressAddImage() {
    console.log('Test Insert Image');
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },

      mediaType: 'photo',
      includeBase64: true,
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
        // console.log('response', res.base64);
        richText.current?.insertImage(`data:${res.type};base64,${res.base64}`);
      }
    });
  }
  function onEditorInitialized() {}
  function onChangeEditor(e) {
    setContent(e);
  }
  function onPressStar(idx) {
    switch (idx) {
      case 0:
        setRatng([true, false, false, false, false]);
        break;
      case 1:
        setRatng([true, true, false, false, false]);
        break;
      case 2:
        setRatng([true, true, true, false, false]);
        break;
      case 3:
        setRatng([true, true, true, true, false]);
        break;
      default:
        setRatng([true, true, true, true, true]);
        break;
    }
  }
  function onSubmit() {
    setIsLoading(true);
    let ratingz = rating.filter((x) => x === true).length;
    if (!content) {
      setIsLoading(false);
      alert('Content cannot empty!.');
    }
    let dt = JSON.stringify({
      description: content,
      rate: ratingz,
      productId: id,
      isAnonymous: toggleCheckBox ? 1 : 0,
    });
    reviews
      .insertReview(dt)
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
      });
  }
  return (
    <>
      <Spinner visible={isLoading} />
      <SafeAreaView style={ReviewNewStyle.SafeArea}>
        <View style={ReviewNewStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage source={icons.back} style={ReviewNewStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={ReviewNewStyle.LabelNew}>Your Review</Text>
        </View>
      </SafeAreaView>
      <ScrollView style={ReviewNewStyle.RootContainer}>
        <View style={ReviewNewStyle.ContainerReg}>
          <View style={ReviewNewStyle.ContainerTnC}>
            <CheckBox
              style={ReviewNewStyle.CheckBox}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              onCheckColor={COLORS.primary}
              onTintColor={COLORS.primary}
            />
            <Text style={ReviewNewStyle.LabelTnC}>Answer Anonimously </Text>
          </View>

          <View style={ReviewNewStyle.ContainerSubmit}>
            <TouchableOpacity
              style={ReviewNewStyle.ButtonSubmit}
              onPress={() => onSubmit()}>
              <Text style={ReviewNewStyle.LabelSubmit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={ReviewNewStyle.ContainerComment}>
          <View style={ReviewNewStyle.ContainerRating}>
            {rating.map((item, index) => {
              return item ? (
                <TouchableOpacity
                  key={index}
                  onPress={() => onPressStar(index)}>
                  <FastImage
                    source={icons.star}
                    style={ReviewNewStyle.IconStar}
                    key={index}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  key={index}
                  onPress={() => onPressStar(index)}>
                  <FastImage
                    source={icons.star_white}
                    style={ReviewNewStyle.IconStar}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={ReviewNewStyle.ContainerTitle}>
            <FastImage
              source={{uri: img}}
              style={ReviewNewStyle.ImageTitle}
              defaultSource={require('../assets/images/default.png')}
            />
            <View style={ReviewNewStyle.TextTitle}>
              <Text style={ReviewNewStyle.Title}>{title}</Text>
              <Text style={ReviewNewStyle.Category}>{category}</Text>
            </View>
          </View>

          <View style={ReviewNewStyle.ContainerEditor}>
            <RichToolbar
              editor={richText}
              actions={[
                actions.insertImage,
                actions.setBold,
                actions.setItalic,
                actions.insertBulletsList,
                actions.insertOrderedList,
                // actions.insertLink,
                // actions.keyboard,
                actions.setStrikethrough,
                actions.setUnderline,
                // actions.removeFormat,
                // actions.insertVideo,
                actions.checkboxList,
                actions.undo,
                actions.redo,
              ]}
              customAction={() => handleCustomAction}
              onPressAddImage={() => onPressAddImage()}
            />

            <RichEditor
              ref={richText}
              // initialContentHTML={
              //   'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'
              // }
              editorInitializedCallback={() => onEditorInitialized()}
              editorStyle={ReviewNewStyle.Editor}
              onChange={(e) => onChangeEditor(e)}
              placeholder="Write your answer here..."
              containerStyle={ReviewNewStyle.ContainerRichEditor}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ReviewNew;
