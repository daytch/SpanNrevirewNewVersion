import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../constants';

const ReviewNewStyle = StyleSheet.create({
  SafeArea: {
    backgroundColor: COLORS.primary,
  },
  Container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding4,
    flexDirection: 'row',
  },
  RootContainer: {flex: 1, flexDirection: 'column'},
  ContainerReg: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  ContainerSubmit: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: wp('5%'),
  },
  ContainerTnC: {flexDirection: 'row'},
  Editor: {
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    minWidth: wp('100%'),
    width: wp('100%'),
  },
  ContainerComment: {
    flexDirection: 'column',
    // alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  ButtonSubmit: {
    padding: 7,
    width: wp('35%'), //SIZES.width - SIZES.width * 0.5,
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    marginTop: hp('2%'),
    alignSelf: 'flex-end',
  },
  CheckBox: {
    marginTop: (SIZES.height * 3) / 100,
    marginLeft: (SIZES.width * 5) / 100,
    width: (SIZES.width * 1) / 100,
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
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
    // alignSelf: 'flex-end',
    // marginTop: (SIZES.height * 3.4) / 100,
  },
  LabelAgree: {
    ...FONTS.bodyMedium3,
  },
  LabelNew: {
    ...FONTS.h2,
    color: COLORS.white,
    marginLeft: 20,
    marginTop: -5,
  },
  Label: {
    ...FONTS.bodyMedium3,
    color: COLORS.black,
    marginTop: (SIZES.height * 1.5) / 100,
    marginLeft: (SIZES.width * 0.5) / 10,
  },
  Input: {
    alignSelf: 'stretch',
    marginLeft: (SIZES.width * 5) / 100,
    borderWidth: 1,
    width: (SIZES.width * 90) / 100,
    padding: SIZES.padding0,
    backgroundColor: 'white',
    borderColor: '#C8C8C8',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  Dropdown: {
    marginLeft: (SIZES.width * 5) / 100,
    width: (SIZES.width * 90) / 100,
    backgroundColor: '#fafafa',
  },
  DropdownItem: {
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
  },
  DropdownContainer: {height: 40},
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
  ContainerTitle: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  ImageTitle: {
    width: 65,
    height: 65,
    alignSelf: 'stretch',
  },
  Title: {
    ...FONTS.bodyMedium2,
    marginLeft: 10,
  },
  Category: {
    ...FONTS.bodyRegular5,
    color: COLORS.grayLine,
    marginLeft: 10,
  },
  ContainerImages: {
    marginTop: 3,
    flexDirection: 'column',
  },
});

export default ReviewNewStyle;
