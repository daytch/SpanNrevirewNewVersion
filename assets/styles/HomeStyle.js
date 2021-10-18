import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  TabIndicator: {
    backgroundColor: COLORS.primary,
    height: 5,
    borderRadius: 3,
  },
  Tab: {marginTop: -3, backgroundColor: COLORS.gray},
  QuestionRoute: {
    flex: 1,
    backgroundColor: COLORS.gray,
    flexDirection: 'column',
  },
  selectedTabTextStyle: {
    ...FONTS.bodyBold2,
    color: COLORS.primary,
    margin: 8,
  },
  label: {
    ...FONTS.bodyBold2,
    color: '#4D4D4D',
    margin: 8,
  },
  ButtonRegister: {
    padding: SIZES.padding,
    width: SIZES.width - SIZES.width * 0.5,
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
  LabelNotif: {...FONTS.h4, color: COLORS.white},
});

export default HomeStyle;
