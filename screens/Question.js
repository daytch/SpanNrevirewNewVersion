import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons, COLORS} from '../constants';
import RegisterStyle from '../assets/styles/QuestionStyle';
import CheckBox from '@react-native-community/checkbox';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

const Question = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const richText = useRef();
  const [isEditorRendered, setIsEditorRendered] = useState(false);
  function handleCustomAction() {}
  function onEditorInitialized() {
    console.log(isEditorRendered);
    setIsEditorRendered(true);
  }
  return (
    <>
      <SafeAreaView style={RegisterStyle.SafeArea}>
        <View style={RegisterStyle.Container}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <FastImage source={icons.back} style={RegisterStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={RegisterStyle.LabelNew}>Your Answer</Text>
        </View>
      </SafeAreaView>
      <ScrollView style={RegisterStyle.RootContainer}>
        <View style={RegisterStyle.ContainerReg}>
          <View style={RegisterStyle.ContainerTnC}>
            <CheckBox
              style={RegisterStyle.CheckBox}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              onCheckColor={COLORS.primary}
              onTintColor={COLORS.primary}
            />
            <Text style={RegisterStyle.LabelTnC}>Answer Anonimously </Text>
          </View>

          <View style={RegisterStyle.ContainerSubmit}>
            <TouchableOpacity style={RegisterStyle.ButtonRegister}>
              <Text style={RegisterStyle.LabelNotif}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={RegisterStyle.ContainerComment}>
          <Text style={RegisterStyle.LabelAgree}>
            What's the most embarrassing thing that's ever happened to you?
          </Text>
          <View>
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
            />

            <RichEditor
              ref={richText}
              initialContentHTML={
                'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'
              }
              editorInitializedCallback={() => onEditorInitialized()}
              style={RegisterStyle.Editor}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Question;
