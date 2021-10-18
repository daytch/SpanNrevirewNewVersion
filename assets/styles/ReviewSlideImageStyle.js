import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../constants';

const ReviewSlideImageStyle = StyleSheet.create({
  SafeArea: {
    backgroundColor: COLORS.black,
  },
  ContainerImage: {
    flex: 1,
  },
  Container: {
    backgroundColor: COLORS.black,
    padding: SIZES.padding4,
    flexDirection: 'row',
  },
  Contents: {
    flex: 1,
    width: wp('100%'),
    backgroundColor: COLORS.black,
    justifyContent: 'space-around',
    flexDirection: 'column',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  ImageBack: {
    width: 25,
    height: 24,
  },
  Label: {
    ...FONTS.h4,
    color: COLORS.white,
    marginLeft: wp('5%'),
    marginTop: 2,
  },
  Footer: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: hp('10%'),
  },
  ContainerTgl: {
    flexDirection: 'column',
    marginLeft: 7,
  },
  LabelUser: {
    color: COLORS.grayLine,
  },
  LabelLike: {
    color: COLORS.primary,
    marginLeft: 2,
  },
  IconEye: {
    width: 22,
    height: 17,
    marginRight: 5,
  },
  ContainerViews: {
    flexDirection: 'row',
  },
  ContainerLikes: {
    flexDirection: 'row',
    backgroundColor: COLORS.gray3,
    borderRadius: 5,
    width: wp('17%'),
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconLove: {
    width: 17,
    height: 15,
    marginRight: 5,
    tintColor: COLORS.primary,
    // color: COLORS.primary,
  },
  PropUser: {
    flexDirection: 'row',
  },
  SlideShow: {
    // marginTop: hp('10%') * -1,
  },
  Kosong: {
    // height: hp('5%'),
  },
});

export default ReviewSlideImageStyle;
