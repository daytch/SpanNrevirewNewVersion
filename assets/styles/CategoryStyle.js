import {StyleSheet} from 'react-native';
import {
  SIZES,
  COLORS,
  FONTS,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../constants';

const CategoryStyle = StyleSheet.create({
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
  LabelNew: {
    ...FONTS.h2,
    color: COLORS.white,
    marginLeft: 20,
    marginTop: 0,
  },
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: COLORS.gray2,
    width: wp('25%'),
  },
  activeTab: {
    width: wp('25%'),
    height: hp('5%'),
    color: COLORS.gray,
  },
  tab: {
    width: wp('25%'),
    height: hp('9%'),
  },
  indicator: {
    backgroundColor: COLORS.primary,
  },
  selectedTabTextStyle: {
    ...FONTS.bodyMedium6,
    color: COLORS.primary,
    margin: 8,
  },
  label: {
    ...FONTS.bodyMedium6,
    lineHeight: 13,
    color: COLORS.disabled,
  },
  selectedContainerTab: {
    color: COLORS.white,
  },
  ContainerTab: {
    color: COLORS.gray,
  },
  selectedIconTabBar: {
    tintColor: COLORS.primary,
    maxWidth: wp('8%'),
    maxHeight: hp('3%'),
    resizeMode: 'contain',
  },
  IconTabBar: {
    maxWidth: wp('8%'),
    // maxHeight: hp('3%'),
    height: hp('5%'),
    resizeMode: 'contain',
    padding: SIZES.padding4,
  },
  TabView: {
    height: hp('15%'),
    // paddingTop: SIZES.padding4,
  },
  IconProduct: {
    width: wp('20%'),
    height: wp('20%'),
  },
  ContainerRender: {
    // padding: SIZES.padding5,
    width: wp('24%'),
    alignItems: 'center',
  },
  Title: {
    ...FONTS.titleHomeReviews,
    fontSize: 9,
    lineHeight: 10,
    marginTop: -7,
  },
});

export default CategoryStyle;
