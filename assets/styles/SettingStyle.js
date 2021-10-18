import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES, widthPercentageToDP as wp} from '../constants';

const SettingStyle = StyleSheet.create({
  SafeArea: {
    backgroundColor: COLORS.primary,
  },
  Container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding4,
    flexDirection: 'row',
  },
  ImageBack: {
    width: 25,
    height: 24,
  },
  LabelHeader: {
    ...FONTS.h2,
    color: COLORS.white,
    marginLeft: 20,
    marginTop: 0,
    lineHeight: 25,
  },

  ContainerPhoto: {
    flexDirection: 'row',
    // marginTop: 5,
    padding: SIZES.padding2,
    justifyContent: 'space-between',
    backgroundColor: COLORS.grayLight,
    borderBottomColor: COLORS.grayLine,
    borderBottomWidth: 1,
  },
  Photo: {
    flexDirection: 'row',
  },
  PhotoLabel: {
    alignSelf: 'center',
    marginLeft: 10,
    color: COLORS.black,
    ...FONTS.bodyMedium3,
  },
  IconArrow: {
    width: 12,
    height: 17,
  },
  IconPencil: {
    width: 23,
    height: 17,
    marginTop: 10,
  },

  Label: {
    ...FONTS.bodyMedium3,
    color: COLORS.black,
    // lineHeight: 18,
    // alignSelf: 'center',
  },
  Input: {
    ...FONTS.bodyLight4,
    color: COLORS.black,
    lineHeight: 18,
  },
  InputBio: {
    // flex: 1,
    ...FONTS.bodyLight4,
    color: COLORS.black,
    lineHeight: 18,
    width: wp('87%'),
  },
  IconSosmed: {
    width: 25,
    height: 25,
    marginTop: 10,
    alignSelf: 'center',
  },
  SosmedLabel: {
    ...FONTS.bodyLight4,
    color: COLORS.disabled,
    alignSelf: 'flex-end',
    // padding: SIZES.padding,
    marginTop: 7,
    marginLeft: 15,
  },
  ButtonSosmed: {
    borderColor: COLORS.grayLine,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    alignContent: 'center',
    padding: SIZES.padding,
    width: wp('23%'),
  },
  LabelConnect: {
    color: COLORS.grayLine,
  },
  ButtonSosmedActive: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    alignContent: 'center',
    padding: SIZES.padding,
    width: wp('23%'),
  },
  LabelConnectActive: {
    color: COLORS.primary,
  },
  ContainerSosmed: {
    flexDirection: 'column',
    // marginTop: 5,
    padding: SIZES.padding4,
    backgroundColor: COLORS.grayLight,
    borderBottomColor: COLORS.grayLine,
    borderBottomWidth: 1,
  },
  Sosmed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.padding,
  },
  ButtonSignOut: {
    padding: SIZES.padding,
    width: wp('35%'),
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    marginTop: wp('20%'),
    alignSelf: 'center',
  },
  LabelNotif: {...FONTS.h4, color: COLORS.white},
  ContainerAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  IconClose: {
    width: 17,
    height: 17,
    tintColor: COLORS.disabled,
    marginLeft: 10,
  },
  IconCheck: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
  },
  InputPassword: {
    alignSelf: 'stretch',
    // marginLeft: (SIZES.width * 5) / 100,
    borderWidth: 1,
    width: wp('75%'),
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
});

export default SettingStyle;
