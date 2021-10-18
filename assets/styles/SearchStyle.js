import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES, heightPercentageToDP as hp} from '../constants';

const SearchStyle = StyleSheet.create({
  SafeArea: {
    backgroundColor: COLORS.primary,
  },
  Container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ContainerSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    height: hp('3.5%'),
  },
  BodySearch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: hp('8%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    // marginTop: 10,
    // marginRight: 0,
  },
  IconLoop: {
    padding: 10,
    margin: 5,
    height: 18,
    width: 18,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  InputSearch: {
    flex: 1,
    alignItems: 'center',
    // padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  ContainerReg: {
    // flex: 1,
    // alignItems: 'flex-start',
    backgroundColor: COLORS.white,
  },
  ImageBack: {
    width: 23,
    height: 23,
    marginLeft: -5,
  },
  ContainerDetail: {
    // alignItems: 'center',
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: COLORS.disabled,
    // padding: SIZES.padding0,
  },
  FlatContainer: {
    padding: SIZES.padding4,
  },
  Header: {
    flexDirection: 'row',
  },
  LabelUsername: {
    ...FONTS.bodyMedium3,
    lineHeight: 24,
    color: COLORS.black,
  },
  LabelJoindate: {
    ...FONTS.titleHomeReviews,
    lineHeight: 15,
    fontSize: 11,
    color: COLORS.disabled,
  },
  ContainerCountry: {
    marginLeft: 5,
  },
  ContainerPosted: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 5,
  },
  ContainerReviewed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  LabelPosted: {
    ...FONTS.titleHomeReviews,
    lineHeight: 15,
    fontSize: 11,
  },
});

export default SearchStyle;
