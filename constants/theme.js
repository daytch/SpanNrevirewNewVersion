import {Dimensions, Platform, PixelRatio} from 'react-native';
let {width, height} = Dimensions.get('window');

if (Platform.OS !== 'ios') {
  // Code for Android
  let scale = Dimensions.get('screen').scale / Dimensions.get('window').scale;
  const screen_height = Dimensions.get('window').height * scale;
  const screen_width = Dimensions.get('window').width * scale;
  width = screen_width;
  height = screen_height;
}

export const widthPercentageToDP = (widthPercent) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

export const heightPercentageToDP = (heightPercent) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

export const listenOrientationChange = (that) => {
  Dimensions.addEventListener('change', (newDimensions) => {
    // Retrieve and save new dimensions
    width = newDimensions.window.width;
    height = newDimensions.window.height;

    // Trigger screen's rerender with a state update of the orientation variable
    that.setState({
      orientation: width < height ? 'portrait' : 'landscape',
    });
  });
};

export const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};

export const kFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};

export const COLORS = {
  // base colors
  primary: '#BC0141',
  primary10: '#BC014110',
  white: '#FFFFFF',
  black: '#4D4D4D',
  black1: '#404041',
  black2: '#606060',
  black3: '#B3B3B3',
  gray: '#f9f9f9',
  gray2: '#F0F0F0',
  gray3: '#DBDBDB',
  gray4: '#E7E7E7',
  gray5: '#CCCCCC',
  grayLight: '#FAFAFA',
  disabled: '#808080',
  blackRedSoft: '#808080',
  pink: '#f4dee5',
  grayLine: '#C8C8C8',
  pink1: '#f3dee5',
  pink2: '#BE0141',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding0: 8,
  padding: 10,
  padding2: 12,
  padding3: 14,
  padding4: 16,
  padding5: 18,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,
  body7: 8,
  body8: 6,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  titleHomeReviews: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 20,
    color: COLORS.black,
  },
  descHomeReviews: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    lineHeight: 20,
    color: COLORS.blackRedSoft,
  },

  largeTitle: {
    fontFamily: 'Poppins-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Poppins-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-Light', fontSize: SIZES.body4, lineHeight: 20},
  body5: {fontFamily: 'Poppins-Light', fontSize: SIZES.body5, lineHeight: 18},

  body6: {fontFamily: 'Poppins-Light', fontSize: SIZES.body3, lineHeight: 22},

  bodyMedium1: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  bodyMedium2: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body2,
    lineHeight: 34,
  },
  bodyMedium3: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body3,
    lineHeight: 32,
  },
  bodyMedium4: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body4,
    lineHeight: 30,
  },
  bodyMedium5: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body5,
    lineHeight: 26,
  },
  bodyMedium6: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body6,
    lineHeight: 24,
  },
  bodyMedium7: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.body7,
    lineHeight: 20,
  },

  bodySemiBold4: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.body4,
    lineHeight: 25,
  },

  bodyBold1: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  bodyBold2: {fontFamily: 'Poppins-Bold', fontSize: 25, lineHeight: 34},
  bodyBold3: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.body3,
    lineHeight: 32,
  },
  bodyBold4: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.body4,
    lineHeight: 30,
  },
  bodyBold5: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.body5,
    lineHeight: 25,
  },
  bodyLight4: {
    fontFamily: 'Poppins-Light',
    fontSize: SIZES.body4,
    lineHeight: 30,
  },
  bodyLight5: {
    fontFamily: 'Poppins-Light',
    fontSize: SIZES.body5,
    lineHeight: 15,
  },
  bodyLight6: {
    fontFamily: 'Poppins-Light',
    fontSize: SIZES.body6,
    lineHeight: 13,
  },
  bodyRegular5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 15,
    color: COLORS.black,
  },

  bodyMyriadSemiBold3: {
    fontFamily: 'Myriad Pro Semibold',
    fontSize: SIZES.body3,
    lineHeight: 32,
  },
};

const appTheme = {
  COLORS,
  SIZES,
  FONTS,
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
  kFormatter,
};

export default appTheme;
