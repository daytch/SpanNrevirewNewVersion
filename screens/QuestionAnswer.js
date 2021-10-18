import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {icons, COLORS} from '../constants';
import QuestionAnswerStyle from '../assets/styles/QuestionAnswerStyle';
import CheckBox from '@react-native-community/checkbox';
import {launchImageLibrary} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

const QuestionAnswer = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const richText = useRef();
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
    console.log(e);
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
  return (
    <>
      <SafeAreaView style={QuestionAnswerStyle.SafeArea}>
        <View style={QuestionAnswerStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage source={icons.back} style={QuestionAnswerStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={QuestionAnswerStyle.LabelNew}>Your Review</Text>
        </View>
      </SafeAreaView>
      <ScrollView style={QuestionAnswerStyle.RootContainer}>
        <View style={QuestionAnswerStyle.ContainerReg}>
          <View style={QuestionAnswerStyle.ContainerTnC}>
            <CheckBox
              style={QuestionAnswerStyle.CheckBox}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              onCheckColor={COLORS.primary}
              onTintColor={COLORS.primary}
            />
            <Text style={QuestionAnswerStyle.LabelTnC}>
              Answer Anonimously{' '}
            </Text>
          </View>

          <View style={QuestionAnswerStyle.ContainerSubmit}>
            <TouchableOpacity style={QuestionAnswerStyle.ButtonSubmit}>
              <Text style={QuestionAnswerStyle.LabelSubmit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={QuestionAnswerStyle.ContainerComment}>
          <Text style={QuestionAnswerStyle.LabelAnswer}>
            What's the most embarrassing thing that's ever happened to you?
          </Text>

          <View style={QuestionAnswerStyle.ContainerEditor}>
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
              editorStyle={QuestionAnswerStyle.Editor}
              onChange={(e) => onChangeEditor(e)}
              placeholder="Write your answer here..."
              containerStyle={QuestionAnswerStyle.ContainerRichEditor}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default QuestionAnswer;
