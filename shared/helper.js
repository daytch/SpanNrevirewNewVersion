import React from 'react';
import FastImage from 'react-native-fast-image';
import {images} from '../constants';

export const getInitials = (name) => {
  let initials = name.split(' ');

  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = name.substring(0, 2);
  }

  return initials.toUpperCase();
};

export const checkImageURL = (url, styles) => {
  console.log('url : ' + url);
  return fetch(url)
    .then((res) => {
      if (res.status === 404) {
        return (
          <FastImage source={images.defaultImg} style={styles ? styles : null} />
        );
      } else {
        return (
          <FastImage
            source={{
              uri: 'https://api.snapnreview.com/Img/Reviews/testImage/user55_1619318989712.png',
            }}
            style={styles ? styles : null}
          />
        );
      }
    })
    .catch(() => {
      return (
        <FastImage source={images.defaultImg} style={styles ? styles : null} />
      );
      // throw err;
    });
};

export const errorHandling = (error, navigation) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.response.status === 401 || error.response.status === 403) {
    navigation.navigate('Login');
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
};

const helper = {getInitials, checkImageURL,errorHandling};

export default helper;
