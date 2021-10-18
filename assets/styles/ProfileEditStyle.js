import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../constants';

const ProfileEditStyle = StyleSheet.create({
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
  ContainerBio: {
    flexDirection: 'row',
    padding: SIZES.padding4,
    justifyContent: 'space-between',
    backgroundColor: COLORS.grayLight,
    borderBottomColor: COLORS.grayLine,
    borderBottomWidth: 1,
  },
  ContainerBioInput: {
    width: wp('80%'),
  },
  ContainerPhoto: {
    flexDirection: 'row',
    padding: SIZES.padding4,
    justifyContent: 'space-between',
    backgroundColor: COLORS.grayLight,
    borderBottomColor: COLORS.grayLine,
    borderBottomWidth: 1,
    zIndex: 1,
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
  IconPencil: {
    width: 23,
    height: 17,
  },

  DropdownItem: {
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
    width: wp('65%'),
  },
  Dropdown: {
    width: wp('65%'),
    backgroundColor: '#fafafa',
  },
  DropdownContainer: {
    width: wp('65%'),
    zIndex: 99999,
    height: hp('5%'),
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
  ContainerAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  Label: {
    ...FONTS.bodyMedium3,
    color: COLORS.black,
    lineHeight: 18,
    zIndex: 1,
  },
  Input: {
    ...FONTS.bodyLight4,
    color: COLORS.black,
    lineHeight: 18,
  },
  InputBio: {
    ...FONTS.bodyLight4,
    color: COLORS.black,
    lineHeight: 18,
    width: wp('87%'),
    zIndex: 1,
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
});

export default ProfileEditStyle;
