import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../constants';

const QuestionCategoryStyle = StyleSheet.create({
  SafeArea: {
    backgroundColor: COLORS.primary,
  },
  Parent: {flex: 1, flexDirection: 'column'},
  Container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding4,
    flexDirection: 'row',
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
    ...FONTS.h2,
    color: COLORS.white,
    marginLeft: 20,
    marginTop: 0,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    alignContent: 'center',
  },
  Body: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    // alignContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 7,
    marginHorizontal: 15,
  },
  ContainerSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerList: {
    flex: 1,
    backgroundColor: COLORS.gray,
    alignContent: 'center',
    width: wp('100%'),
  },
  BodySearch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    marginTop: 10,
    marginRight: 0,
  },
  IconLoop: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  InputSearch: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  RadialGradient: {
    overflow: 'hidden',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    // height: 50,
    marginTop: 10,
    width: 45,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconSort: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginTop: 15,
  },
  IconHumburger: {
    padding: 13,
    marginTop: 18,
    marginStart: 10,
    marginRight: 7,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  FlatWrapper: {justifyContent: 'space-between'},
  FlatContainer: {marginLeft: 5},
  FlatSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CEDCCE',
  },
  ContainerRender: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 7,
    marginHorizontal: 15,
    backgroundColor: COLORS.white,
    marginBottom: 5,
  },
  SeparatorLine: {
    borderBottomColor: COLORS.grayLine,
    borderBottomWidth: 1,
  },
  ContainerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  FwIcon: {
    width: 20,
    height: 15,
  },
  AnswersText: {
    ...FONTS.bodyMedium5,
    color: COLORS.blackRedSoft,
    marginLeft: 7,
  },
  FooterColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FooterColumnRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('43%'),
  },
  EyeIcon: {
    width: 20,
    height: 17,
  },
  CategoryTitle: {
    width: wp('85%'),
    ...FONTS.bodyMedium4,
    color: COLORS.black,
  },
});

export default QuestionCategoryStyle;
