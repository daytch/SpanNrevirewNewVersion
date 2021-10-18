import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../constants';

const NotificationStyle = StyleSheet.create({
  SafeArea: {
    backgroundColor: COLORS.primary,
  },
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LabelNew: {
    ...FONTS.bodyBold2,
    color: COLORS.white,
  },
  More: {
    width: 27,
    height: 8,
    marginTop: hp('1%'),
  },
  ContainerRender: {
    padding: SIZES.padding,
    flexDirection: 'column',
    borderBottomColor: COLORS.grayLine,
    borderBottomWidth: 1,
  },
  Message: {
    ...FONTS.titleHomeReviews,
    color: COLORS.black,
    fontSize: SIZES.body4,
  },
  By: {
    ...FONTS.titleHomeReviews,
    color: COLORS.black,
    fontSize: SIZES.body4,
  },
  Username: {
    ...FONTS.bodyBold5,
    color: COLORS.black,
    fontSize: SIZES.body4,
  },
  ImgProduct: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  ContainerTitle: {
    flexDirection: 'column',
    marginLeft: wp('2%'),
  },
  ContainerImageDesc: {
    flexDirection: 'row',
    // padding: SIZES.padding,
  },
  Date: {
    ...FONTS.titleHomeReviews,
    color: COLORS.grayLine,
    fontSize: SIZES.body4,
  },
  ContainerMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UnreadMessage: {
    backgroundColor: COLORS.primary10,
  },
});

export default NotificationStyle;
