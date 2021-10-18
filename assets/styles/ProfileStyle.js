import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../constants';

const ProfileStyle = StyleSheet.create({
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
    width: 20,
    height: 20,
    marginTop: hp('1%'),
  },
  ContainerProfile: {
    flexDirection: 'row',
    padding: SIZES.padding4,
  },
  ContainerTextName: {
    padding: SIZES.padding,
    justifyContent: 'space-between',
  },
  Name: {
    ...FONTS.bodyMedium3,
    fontSize: 17,
    lineHeight: 18,
    color: COLORS.black1,
  },
  Country: {
    ...FONTS.bodyLight5,
    color: COLORS.black,
  },
  EditProfile: {
    ...FONTS.bodyRegular5,
    color: COLORS.primary,
    marginBottom: hp('1%') * -1,
  },
  AboutMe: {
    padding: SIZES.padding4,
    ...FONTS.bodyLight5,
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.black,
    marginTop: 20 * -1,
  },
  LabelActivities: {
    ...FONTS.bodyBold3,
    padding: SIZES.padding4,
    color: COLORS.black,
    marginTop: hp('2.5%') * -1,
  },
  ParentActivity: {
    marginTop: hp('3%') * -1,
    flexDirection: 'column',
    padding: SIZES.padding4,
  },
  ContainerDetail: {
    borderColor: COLORS.grayLine,
    borderRadius: 5,
    borderWidth: 1,
    width: wp('29.3%'),
    height: hp('7%'),
    margin: 3,
    justifyContent: 'space-between',
    padding: SIZES.padding4,
    paddingBottom: SIZES.padding4,
  },
  ContainerDetailActive: {
    borderColor: COLORS.primary,
    borderRadius: 5,
    borderWidth: 1,
    width: wp('29.3%'),
    height: hp('7%'),
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding0,
  },
  ContainerAct: {
    flexDirection: 'row',
  },
  ActivityIcon: {
    width: 20,
    height: 23,
  },
  ActivityIconActive: {
    width: 20,
    height: 23,
  },
  ContainerAtas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TitleAct: {
    ...FONTS.bodyLight6,
    fontSize: 9,
    alignSelf: 'flex-end',
    marginTop: 0,
    color: COLORS.disabled,
  },
  Jumlah: {
    ...FONTS.bodyMyriadSemiBold3,
    fontSize: 22,
    lineHeight: 23,
    color: COLORS.disabled,
  },
  TitleActActive: {
    ...FONTS.bodyLight6,
    fontSize: 9,
    alignSelf: 'flex-end',
    marginTop: 0,
    color: COLORS.primary,
  },
  JumlahActive: {
    ...FONTS.bodyMyriadSemiBold3,
    fontSize: 22,
    lineHeight: 23,
    color: COLORS.primary,
  },

  ParentFollowers: {
    padding: SIZES.padding,
    marginTop: hp('3%') * -1,
  },
  // ContainerSearch: {justifyContent: 'center', alignItems: 'center', margin: 10},
  BodySearch: {
    // padding: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 40,
    borderRadius: 10,
    margin: 10,
  },
  IconLoop: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    tintColor: COLORS.disabled,
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
  ContainerFlatlist: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 12,
  },
  ContainerUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 7,
  },
  ContainerUsername: {
    flexDirection: 'column',
  },
  ButtonFollowing: {
    padding: SIZES.padding,
    width: wp('20%'),
    alignItems: 'center',
    borderRadius: 6,
    borderColor: COLORS.pink2,
    borderWidth: 1,
    // backgroundColor: COLORS.white,
  },
  ButtonFollow: {
    padding: SIZES.padding,
    width: wp('20%'),
    alignItems: 'center',
    borderRadius: 6,
    borderColor: COLORS.disabled,
    borderWidth: 1,
    // backgroundColor: COLORS.white,
  },
  LabelNotif: {...FONTS.bodyRegular5, color: COLORS.disabled},
  LabelNotifActive: {...FONTS.bodyRegular5, color: COLORS.primary},
  LabelName: {...FONTS.bodyMedium4, lineHeight: 20, color: COLORS.black1},
  LabelCountry: {...FONTS.bodyLight6, lineHeight: 16, color: COLORS.black1},

  ContainerProductPosted: {
    flexDirection: 'row',
    padding: SIZES.padding0,
    // marginTop: hp('1.3%') * -1,
  },
  FooterProduct: {
    marginTop: wp('1.5%') * -1,
    paddingLeft: SIZES.padding0,
    borderBottomColor: COLORS.grayLine,
    borderBottomWidth: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  ImageProduct: {
    width: 50,
    height: 50,
    borderRadius: 5,
    padding: SIZES.padding0,
  },
  ContainerProductTitle: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  LabelCategory: {
    ...FONTS.descHomeReviews,
    color: COLORS.grayLine,
  },
  LabelTitle: {
    ...FONTS.bodyMedium5,
    lineHeight: 18,
  },
  IconStar: {
    width: 15,
    height: 15,
  },
  IconEye: {
    width: 21,
    height: 17,
  },
  Rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('17%'),
  },
  LabelFooterProduct: {
    ...FONTS.bodyMedium5,
    alignSelf: 'center',
    marginLeft: 7,
    color: COLORS.black,
  },
  ContainerReviewer: {
    padding: SIZES.padding,
    flexDirection: 'row',
  },
  CommentContainerStar: {
    flexDirection: 'column',
    marginLeft: 7,
  },
  ContainerStars: {
    flexDirection: 'row',
  },
  CommentContainerName: {
    flexDirection: 'row',
    marginTop: 3,
  },
  UserNameComment: {
    ...FONTS.bodyLight5,
    color: COLORS.black,
  },
  UserTitleComment: {
    ...FONTS.bodyLight5,
    color: COLORS.blacksoft,
  },
  FlatList: {},
  ContentContainerFlatList: {
    // flex: 1,
  },
  ContainerFollowers: {
    padding: 10,
    flexDirection: 'row',
  },
  ImgMore: {
    width: 85,
    height: 55,
    borderRadius: 5,
  },
  ContainerImageMore: {
    flexDirection: 'row',
    paddingLeft: SIZES.padding0,
  },
  TextDescription: {
    marginTop: 0, //hp('0.5%')*-1,
    color: COLORS.black,
    padding: SIZES.padding0,
  },
  ContainerQuestionPosted: {
    flexDirection: 'column',
    borderBottomColor: COLORS.grayLine,
    borderBottomWidth: 1,
  },
  ContainerQuestionPostedFooter: {
    // flexDirection: 'row',
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ContainerQPAnswer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ContainerQPViews: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('43%'),
  },
  AnswersText: {
    ...FONTS.bodyMedium5,
    color: COLORS.blackRedSoft,
    marginLeft: 7,
  },
  FwIcon: {
    width: 20,
    height: 15,
  },
  ContainerQAHeader: {
    flexDirection: 'row',
    padding: SIZES.padding0,
  },
  Title: {
    paddingLeft: SIZES.padding0,
  },
  See: {
    color: COLORS.disabled,
    opacity: 0.5,
  },
});

export default ProfileStyle;
