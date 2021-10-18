import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons, COLORS} from '../constants';
import QuestionNewStyle from '../assets/styles/QuestionNewStyle';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-custom-dropdown';
import countries from '../shared/countries.json';

let data = countries;

const QuestionNew = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <>
      <SafeAreaView style={QuestionNewStyle.SafeArea}>
        <View style={QuestionNewStyle.Container}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <FastImage source={icons.back} style={QuestionNewStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={QuestionNewStyle.LabelNew}>New Question</Text>
        </View>
      </SafeAreaView>
      <View style={QuestionNewStyle.RootContainer}>
        <View style={QuestionNewStyle.ContainerCategory}>
          <Text style={QuestionNewStyle.Label}>Category</Text>
          <DropDownPicker
            dropDownMaxHeight={250}
            items={data}
            // defaultValue={this.state.country}
            containerStyle={QuestionNewStyle.DropdownContainer}
            style={QuestionNewStyle.Input}
            itemStyle={QuestionNewStyle.DropdownItem}
            dropDownStyle={QuestionNewStyle.Dropdown}
            // onChangeItem={item => this.setState({
            //     country: item.value
            // })}
          />
        </View>

        <View style={QuestionNewStyle.ContainerQuestion}>
          <Text style={QuestionNewStyle.Label}>Question</Text>
          <TextInput
            style={QuestionNewStyle.TextArea}
            numberOfLines={15}
            multiline={true}
            placeholder="Write your question"
          />
        </View>

        <View style={QuestionNewStyle.ContainerReg}>
          <View style={QuestionNewStyle.ContainerTnC}>
            <CheckBox
              style={QuestionNewStyle.CheckBox}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              onCheckColor={COLORS.primary}
              onTintColor={COLORS.primary}
            />
            <Text style={QuestionNewStyle.LabelTnC}>
              Answer Anonimously (Hide Your Name)
            </Text>
          </View>
        </View>

        <TouchableOpacity style={QuestionNewStyle.ButtonSubmit}>
          <Text style={QuestionNewStyle.LabelSubmit}>Ask Question</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default QuestionNew;
