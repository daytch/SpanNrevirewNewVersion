import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../constants';

const ReviewProductImageStyle = StyleSheet.create({
  SafeArea: {
    backgroundColor: COLORS.primary,
  },
  ContainerImage: {
    flex: 1,
  },
  Container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Contents: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: COLORS.grayLight,
    padding: SIZES.padding4,
    height: hp('40%'),
  },
  ImageBack: {
    width: 25,
    height: 24,
  },
  Label: {
    ...FONTS.h4,
    color: COLORS.white,
    marginLeft: wp('40%') * -1,
    marginTop: 0,
  },
  FlatContainer: {marginLeft: 5},
  FlatSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CEDCCE',
  },
  Likes: {
    backgroundColor: COLORS.black,
    borderRadius: 5,
    width: wp('12%'),
    height: hp('2.5%'),
    zIndex: 1,
    position: 'absolute',
    opacity: 0.7,
    marginLeft: wp('2.5%'),
    marginTop: hp('6.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  IconLove: {width: 12, height: 10},
  ContainerList: {
    // maxHeight: hp('15%'),
  },
  ContainerIconProduct: {
    flex: 1 / 3,
    aspectRatio: 1.53, //2,
    borderRadius: 5,
    alignSelf: 'stretch',
  },
  ScrollContainer: {
    flexGrow: 1,
  },
  IconProduct: {
    marginTop: 5,
    marginStart: 2,
    marginEnd: 2,
    flex: 1,
    aspectRatio: 1.53, //2,
    borderRadius: 5,
    alignSelf: 'stretch',
  },
  ContainerTitle: {marginStart: 5, marginEnd: 5},
  LabelTitle: {...FONTS.titleHomeReviews},
  TotalLike: {
    ...FONTS.descHomeReviews,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  SortWhite: {
    width: 25,
    height: 25,
  },
});

export default ReviewProductImageStyle;
