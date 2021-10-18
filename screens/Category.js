/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CategoryStyle from '../assets/styles/CategoryStyle';
import FastImage from 'react-native-fast-image';
import {
  TabBarVertical,
  TabViewVertical,
  SceneMap,
} from 'react-native-vertical-tab-view';
import { icons, images } from '../constants';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const data = [
  {
    id: 1,
    title: 'TV',
    image: images.kamera,
  },
  {
    id: 2,
    title: 'Speaker & Microphone',
    image: images.microwave,
  },
  {
    id: 3,
    title: 'Media Player',
    image: images.laptop,
  },
  {
    id: 4,
    title: 'Lighting',
    image: images.stick,
  },
  {
    id: 5,
    title: 'Electrical',
    image: images.kamera,
  },
  {
    id: 6,
    title: 'Cooler',
    image: images.smartwatch,
  },
  {
    id: 7,
    title: 'Telephone',
    image: images.laptop,
  },
  {
    id: 8,
    title: 'Vacuum Cleaner',
    image: images.stick,
  },
  {
    id: 9,
    title: 'TV',
    image: images.kamera,
  },
  {
    id: 10,
    title: 'Speaker & Microphone',
    image: images.microwave,
  },
  {
    id: 11,
    title: 'Media Player',
    image: images.laptop,
  },
  {
    id: 12,
    title: 'Lighting',
    image: images.stick,
  },
  {
    id: 13,
    title: 'Electrical',
    image: images.kamera,
  },
  {
    id: 14,
    title: 'Cooler',
    image: images.smartwatch,
  },
  {
    id: 15,
    title: 'Telephone',
    image: images.laptop,
  },
  {
    id: 16,
    title: 'Vacuum Cleaner',
    image: images.stick,
  },
  {
    id: 17,
    title: 'TV',
    image: images.kamera,
  },
  {
    id: 18,
    title: 'Speaker & Microphone',
    image: images.microwave,
  },
  {
    id: 19,
    title: 'Media Player',
    image: images.laptop,
  },
  {
    id: 20,
    title: 'Lighting',
    image: images.stick,
  },
  {
    id: 21,
    title: 'Electrical',
    image: images.kamera,
  },
  {
    id: 22,
    title: 'Cooler',
    image: images.smartwatch,
  },
  {
    id: 23,
    title: 'Telephone',
    image: images.laptop,
  },
  {
    id: 24,
    title: 'Vacuum Cleaner',
    image: images.stick,
  },
  {
    id: 25,
    title: 'TV',
    image: images.kamera,
  },
  {
    id: 26,
    title: 'Speaker & Microphone',
    image: images.microwave,
  },
  {
    id: 27,
    title: 'Media Player',
    image: images.laptop,
  },
  {
    id: 28,
    title: 'Lighting',
    image: images.stick,
  },
  {
    id: 29,
    title: 'Electrical',
    image: images.kamera,
  },
  {
    id: 30,
    title: 'Cooler',
    image: images.smartwatch,
  },
  {
    id: 31,
    title: 'Telephone',
    image: images.laptop,
  },
  {
    id: 32,
    title: 'Vacuum Cleaner',
    image: images.stick,
  },
];

function useMergeState(initialState) {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState) =>
    setState((prevState) => Object.assign({}, prevState, newState));
  return [state, setMergedState];
}

const Category = ({ navigation, route }) => {

  const [currentPage, setCurrentPage] = useMergeState(1);
  const [totalPage, settotalPage] = useMergeState(0);
  const callFrom = useState(route.params?.from);
  // const [data, setData] = useState([]);
  // const index = useMergeState({
  //   index: 1,
  //   routes: [
  //     {key: 'reviews', title: 'Reviews'},
  //     {key: 'questions', title: 'Questions'},
  //   ],
  // });


const Screen1 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen2 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen3 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen4 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen5 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen6 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen7 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen8 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen9 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen10 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen11 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};
const Screen12 = () => {
  return (
    <FlatList
      columnWrapperStyle={CategoryStyle.FlatWrapper}
      contentContainerStyle={CategoryStyle.FlatContainer}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={3}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[CategoryStyle.ContainerRender, index % 3 === 1 ? { marginLeft: 2, marginRight: 2 } : index % 3 === 0 ? { marginLeft: 5 } : null]}>
          <FastImage
            source={item.image}
            resizeMode={'contain'}
            style={CategoryStyle.IconProduct}
          />
          <Text style={CategoryStyle.Title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />);
};


  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { title: 'Electronics', icon: icons.cam, key: '1' },
    { title: 'Sports', icon: icons.keyhole, key: '2' },
    { title: 'Arts', icon: icons.eye, key: '3' },
    { title: 'Movies', icon: icons.eye, key: '4' },
    { title: 'Healthcare', icon: icons.bell_yellow_selected, key: '5' },
    { title: 'Gadgets', icon: icons.user, key: '6' },
    { title: 'Electronics', icon: icons.cam, key: '7' },
    { title: 'Sports', icon: icons.keyhole, key: '8' },
    { title: 'Arts', icon: icons.eye, key: '9' },
    { title: 'Movies', icon: icons.eye, key: '10' },
    { title: 'Healthcare', icon: icons.bell_yellow_selected, key: '11' },
    { title: 'Gadgets', icon: icons.user, key: '12' },
  ]);

  // useEffect(() => {
  //   getData();
  // }, []);


  const renderScene = SceneMap({
    '1': Screen1,
    '2': Screen2,
    '3': Screen3,
    '4': Screen4,
    '5': Screen5,
    '6': Screen6,
    '7': Screen7,
    '8': Screen8,
    '9': Screen9,
    '10': Screen10,
    '11': Screen11,
    '12': Screen12,
  });
  // SceneMap({
  //   reviews: ReviewsRoute,
  //   questions: QuestionsRoute,
  // });

  const changeIndex = (idx) => {
    console.log(idx);
    setIndex(idx);
  };

  return (
    <>
      <SafeAreaView style={CategoryStyle.SafeArea}>
        <View style={CategoryStyle.Container}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <FastImage source={icons.back} style={CategoryStyle.ImageBack} />
          </TouchableOpacity>
          <Text style={CategoryStyle.LabelNew}>Categories</Text>
        </View>
      </SafeAreaView>
      {/* <SafeAreaView style={CategoryStyle.container}> */}
      <TabViewVertical
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={changeIndex}
        style={CategoryStyle.TabView}
        // initialLayout={{width: layout.width}}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBarVertical
            TabBarItem
            {...props}
            scrollEnabled
            indicatorStyle={CategoryStyle.indicator}
            style={CategoryStyle.tabbar}
            tabStyle={CategoryStyle.tab}
            // tabStyle={props.navigationState.routes[props.navigationState.index].key === routes.key ? CategoryStyle.activeTab : CategoryStyle.tab}
            labelStyle={CategoryStyle.label}
            renderIcon={({ route }) => {
              let a = '';
              switch (route.key) {
                case '1':
                  a = <FastImage source={icons.electronic} style={props.navigationState.routes[props.navigationState.index].key === '1' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '2':
                  a = <FastImage source={icons.sport} style={props.navigationState.routes[props.navigationState.index].key === '2' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '3':
                  a = <FastImage source={icons.art} style={props.navigationState.routes[props.navigationState.index].key === '3' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '4':
                  a = <FastImage source={icons.movie} style={props.navigationState.routes[props.navigationState.index].key === '4' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '5':
                  a = <FastImage source={icons.healthcare} style={props.navigationState.routes[props.navigationState.index].key === '5' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '6':
                  a = <FastImage source={icons.electronic} style={props.navigationState.routes[props.navigationState.index].key === '1' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '7':
                  a = <FastImage source={icons.sport} style={props.navigationState.routes[props.navigationState.index].key === '2' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '8':
                  a = <FastImage source={icons.art} style={props.navigationState.routes[props.navigationState.index].key === '3' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '9':
                  a = <FastImage source={icons.movie} style={props.navigationState.routes[props.navigationState.index].key === '4' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '10':
                  a = <FastImage source={icons.healthcare} style={props.navigationState.routes[props.navigationState.index].key === '5' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                case '11':
                  a = <FastImage source={icons.healthcare} style={props.navigationState.routes[props.navigationState.index].key === '5' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
                  break;
                default:
                  a = <FastImage source={icons.gadget} style={props.navigationState.routes[props.navigationState.index].key === '6' ? CategoryStyle.selectedIconTabBar : CategoryStyle.IconTabBar} />;
              }
              return a;
            }}
            renderLabel={({ route }) => (
              <View style={
                route.key ===
                  props.navigationState.routes[props.navigationState.index].key
                  ? CategoryStyle.selectedContainerTab
                  : CategoryStyle.ContainerTab
              }>
                <Text style={CategoryStyle.label}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  style={
                    route.key ===
                      props.navigationState.routes[props.navigationState.index].key
                      ? CategoryStyle.selectedTabTextStyle
                      : CategoryStyle.label
                  }>
                  {route.title}
                </Text>
              </View>
            )}
          />
        )}
      />
      {/* </SafeAreaView> */}
    </>
  );
};

export default Category;
