import React, {useState} from 'react';
import {images} from '../constants';

const Followers = [
  {
    id: 1,
    name: 'Udin',
    country: 'Indonesia',
    img: images.user1,
    isFollower: false,
    isFollowing: false,
  },
  {
    id: 2,
    name: 'Jarjit',
    country: 'India',
    img: images.user2,
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 3,
    name: 'Mac',
    country: 'Singapore',
    img: images.user1,
    isFollower: false,
    isFollowing: true,
  },
  {
    id: 4,
    name: 'Unyil',
    country: 'Indonesia',
    img: images.user3,
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 1,
    name: 'Udin',
    country: 'Indonesia',
    img: images.user1,
    isFollower: false,
    isFollowing: false,
  },
  {
    id: 2,
    name: 'Jarjit',
    country: 'India',
    img: images.user2,
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 3,
    name: 'Mac',
    country: 'Singapore',
    img: images.user1,
    isFollower: false,
    isFollowing: true,
  },
  {
    id: 4,
    name: 'Unyil',
    country: 'Indonesia',
    img: images.user3,
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 1,
    name: 'Udin',
    country: 'Indonesia',
    img: images.user1,
    isFollower: false,
    isFollowing: false,
  },
  {
    id: 2,
    name: 'Jarjit',
    country: 'India',
    img: images.user2,
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 3,
    name: 'Mac',
    country: 'Singapore',
    img: images.user1,
    isFollower: false,
    isFollowing: true,
  },
  {
    id: 4,
    name: 'Unyil',
    country: 'Indonesia',
    img: images.user3,
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 1,
    name: 'Udin',
    country: 'Indonesia',
    img: images.user1,
    isFollower: false,
    isFollowing: false,
  },
  {
    id: 2,
    name: 'Jarjit',
    country: 'India',
    img: images.user2,
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 3,
    name: 'Mac',
    country: 'Singapore',
    img: images.user1,
    isFollower: false,
    isFollowing: true,
  },
  {
    id: 4,
    name: 'Unyil',
    country: 'Indonesia',
    img: images.user3,
    isFollower: true,
    isFollowing: false,
  },
];
const Followings = [
  {
    id: 1,
    name: 'Udin',
    country: 'Indonesia',
    img: images.user1,
    isFollower: false,
    isFollowing: false,
  },
  {
    id: 2,
    name: 'Jarjit',
    country: 'India',
    img: images.user2,
    isFollower: true,
    isFollowing: false,
  },
  {
    id: 3,
    name: 'Mac',
    country: 'Singapore',
    img: images.user1,
    isFollower: false,
    isFollowing: true,
  },
  {
    id: 4,
    name: 'Unyil',
    country: 'Indonesia',
    img: images.user3,
    isFollower: true,
    isFollowing: false,
  },
];
const ProductPosted = [
  {
    id: 1,
    title: 'PS 5 Limited Edition',
    category: 'Electronic / Games / Console',
    img: images.ps5,
    avgRating: 4.5,
    reviews: 156,
    viewer: 354,
  },
  {
    id: 2,
    title: 'Camera Canon D4',
    category: 'Electronic / Camera / Travel',
    img: images.kamera,
    avgRating: 4.5,
    reviews: 151,
    viewer: 314,
  },
  {
    id: 3,
    title: 'SmartWatch ABC',
    category: 'Electronic / Watch / Accesories',
    img: images.smartwatch,
    avgRating: 4,
    reviews: 121,
    viewer: 219,
  },
];
const ProductReviewed = [
  {
    id: 1,
    avatar: images.user3,
    title: 'PS 5 Limited Edition X',
    category: 'Electronic / Games / Console',
    img: [images.ps5, images.s5, images.s5, images.s5, images.s5],
    avgRating: 3.6,
    username: 'Mary Anne',
    date: '2021-06-30',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    avatar: images.user1,
    title: 'iPhone 12 Pro Max',
    category: 'Electronic / Handphone / Apple',
    img: [images.ip12pro, images.ip12pro1, images.ip12],
    avgRating: 4.5,
    username: 'John Doe',
    date: '2021-07-01',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
const QuestionPosted = [
  {
    id: 1,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    answer: 564,
    views: 354,
  },
  {
    id: 2,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    answer: 5641,
    views: 1549,
  },
  {
    id: 3,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    answer: 15,
    views: 56,
  },
  {
    id: 4,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    answer: 24000,
    views: 35004,
  },
  {
    id: 5,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    answer: 5604,
    views: 31254,
  },
];
const QuestionAnswered = [
  {
    id: 1,
    username: 'John Doe',
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: images.user1,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: '2021-05-01',
  },
  {
    id: 2,
    username: 'Eleanor',
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: images.user2,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: '2021-05-01',
  },
  {
    id: 3,
    username: 'Elizabeth',
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: images.user3,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: '2021-05-01',
  },
  {
    id: 4,
    username: 'Tony',
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: images.user1,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: '2021-05-01',
  },
  {
    id: 5,
    username: 'Udin',
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: images.user3,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: '2021-05-01',
  },
];

const People = ({route, navigation}) => {
  console.log(route.params?.isFromSearch);

  const [data] = useState({
    Followers: Followers,
    Followings: Followings,
    ProductPosted: ProductPosted,
    ProductReviewed: ProductReviewed,
    QuestionPosted: QuestionPosted,
    QuestionAnswered: QuestionAnswered,
  });

  return <people data={data} navigation={navigation} />;
};

export default People;
