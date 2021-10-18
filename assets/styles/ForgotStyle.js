import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const ForgotStyle = StyleSheet.create({
  SafeArea: {
    backgroundColor: COLORS.primary,
  },
  containerHeader: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding4,
    flexDirection: 'row',
  },
  ForgotText: {
    ...FONTS.h2,
    color: COLORS.white,
    marginLeft: 20,
    marginTop: 0,
  },
  ContainerBody: {backgroundColor: COLORS.white, flex: 1},
  Input: {
    alignSelf: 'stretch',
    marginTop: (SIZES.height * 1.5) / 100,
    marginLeft: (SIZES.width * 5) / 100,
    borderWidth: 1,
    width: (SIZES.width * 90) / 100,
    padding: SIZES.padding,
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
  ContainerSubmit: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginTop: (SIZES.height * 6) / 100,
  },
  ButtonSubmit: {
    padding: SIZES.padding,
    width: SIZES.width - SIZES.width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
  LabelSubmit: {...FONTS.h4, color: COLORS.white},
  LabelEmail: {
    ...FONTS.body6,
    marginTop: (SIZES.height * 1.5) / 100,
    marginLeft: (SIZES.width * 5) / 100,
  },
  LabelForgot: {
    ...FONTS.body2,
    marginTop: (SIZES.height * 2.5) / 100,
    marginLeft: (SIZES.width * 5) / 100,
  },
  LoginImage: {
    width: 25,
    height: 24,
  },
});

export default ForgotStyle;
