import {StyleSheet} from 'react-native';
import {COLORS, FONTS, widthPercentageToDP as wp} from '../constants';

const BottomModalStyle = StyleSheet.create({
  Modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  ContentModal: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  ContentModalTitle: {
    ...FONTS.bodyMedium4,
    color: COLORS.black3,
    marginBottom: 12,
  },
  ContentModalMenu: {
    ...FONTS.bodyMedium4,
    color: COLORS.black2,
    marginBottom: 12,
    marginTop: 12,
  },
  ContainerMenu: {
    borderBottomColor: COLORS.gray5,
    borderBottomWidth: 1,
    width: wp('75%'),
    alignItems: 'center',
  },
  ContainerClose: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: wp('100%'),
    paddingLeft: 22,
  },
});

export default BottomModalStyle;
