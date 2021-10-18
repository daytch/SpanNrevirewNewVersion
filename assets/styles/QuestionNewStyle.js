import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../constants';

const QuestionNewStyle = StyleSheet.create({
  SafeArea: {
    backgroundColor: COLORS.primary,
  },
  Container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding4,
    flexDirection: 'row',
  },
  RootContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    zIndex: 1,
  },
  ContainerReg: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginTop: 0,
    zIndex: 1,
  },
  ContainerCategory: {
    padding: SIZES.padding4,
    zIndex: 100,
  },
  ContainerQuestion: {
    zIndex: 1,
    paddingLeft: SIZES.padding4,
    paddingRight: SIZES.padding4,
  },
  ContainerTnC: {
    flexDirection: 'row',
    zIndex: 1,
  },
  ButtonSubmit: {
    padding: 7,
    width: wp('43%'),
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginTop: hp('5%'),
    alignSelf: 'center',
  },
  CheckBox: {
    marginTop: (SIZES.height * 3) / 100,
    marginLeft: (SIZES.width * 5) / 100,
    width: wp('5%'),
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
    zIndex: 1,
  },
  ImageBack: {
    width: 25,
    height: 24,
  },
  LabelSubmit: {...FONTS.h4, color: COLORS.white},
  LabelTnC: {
    ...SIZES.h4,
    color: COLORS.primary,
    marginTop: (SIZES.height * 3.4) / 100,
    marginLeft: (SIZES.width * 4) / 100,
    zIndex: 1,
  },
  LabelNew: {
    ...FONTS.h2,
    color: COLORS.white,
    marginLeft: 20,
    marginTop: -5,
    zIndex: 1,
  },
  Label: {
    ...FONTS.bodyMedium4,
    color: COLORS.black,
    zIndex: 1,
  },
  Input: {
    alignSelf: 'stretch',
    padding: SIZES.padding0,
    backgroundColor: 'white',
    borderColor: '#C8C8C8',
    borderWidth: 1,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    zIndex: 99,
  },
  TextArea: {
    zIndex: 1,
    backgroundColor: 'white',
    borderColor: '#C8C8C8',
    borderWidth: 1,
    borderRadius: 6,
    shadowColor: '#000',
    height: hp('15%'),
    justifyContent: 'flex-start',
    paddingLeft: SIZES.padding0,
  },
  Dropdown: {
    backgroundColor: COLORS.grayLight,
  },
  DropdownItem: {
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
    color: COLORS.black,
  },
  DropdownContainer: {
    zIndex: 99999,
    height: hp('5%'),
  },
  QuestionRoute: {flex: 1, backgroundColor: COLORS.gray},
  selectedTabTextStyle: {
    ...FONTS.bodyBold2,
    color: COLORS.primary,
    margin: 8,
  },
  ContainerRating: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1,
    marginBottom: 35,
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  ContainerEditor: {
    // flex: 1,
    marginTop: 10,
    width: wp('100%'),
  },
  IconStar: {
    marginRight: 3.5,
    width: 35,
    height: 35,
  },
  ContainerRichEditor: {minHeight: hp('100%')},
});

export default QuestionNewStyle;
