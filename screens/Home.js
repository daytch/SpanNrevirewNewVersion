import React, {useState, useEffect} from 'react';
import {
  Text,
  // View,
  useWindowDimensions,
  SafeAreaView,
  // TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {HomeReviews, HomeQuestion} from '../shared/components';
import HomeStyle from '../assets/styles/HomeStyle';

function useMergeState(initialState) {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState) =>
    setState((prevState) => Object.assign({}, prevState, newState));
  return [state, setMergedState];
}

const Home = ({navigation}) => {
  const layout = useWindowDimensions();
  const [data, setData] = useMergeState([]);
  const ReviewsRoute = () => <HomeReviews datas={data} />;

  const QuestionsRoute = () => <HomeQuestion />;

  const [currentPage, setCurrentPage] = useMergeState(1);
  // const [totalPage, settotalPage] = useMergeState(0);
  // const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes] = useMergeState([
    {key: 'reviews', title: 'Reviews'},
    {key: 'questions', title: 'Questions'},
  ]);

  useEffect(() => {
    // getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderScene = SceneMap({
    reviews: ReviewsRoute,
    questions: QuestionsRoute,
  });

  return (
    <SafeAreaView style={HomeStyle.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={HomeStyle.TabIndicator}
            renderLabel={({route}) => (
              <Text
                style={
                  route.key === props.navigationState.routes[index].key
                    ? HomeStyle.selectedTabTextStyle
                    : HomeStyle.label
                }>
                {route.title}
              </Text>
            )}
            style={HomeStyle.Tab}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
