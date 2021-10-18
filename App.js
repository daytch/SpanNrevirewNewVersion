import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Login,
  Forgot,
  Register,
  Category,
  Question,
  CameraScreen,
  ReviewDetail,
  ReviewProductImage,
  ReviewAddImage,
  ReviewNew,
  ReviewSlideImage,
  QuestionCategory,
  QuestionDetail,
  QuestionAnswer,
  ProfileEdit,
  Setting,
  QuestionNew,
} from './screens';
import {Navbar} from './shared/components';
import APIKit from './shared/APIKit.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <APIKit /> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Login'}>
        <Stack.Screen name="Home" component={Navbar} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
        <Stack.Screen
          name="ReviewProductImage"
          component={ReviewProductImage}
        />
        <Stack.Screen name="ReviewAddImage" component={ReviewAddImage} />
        <Stack.Screen name="ReviewNew" component={ReviewNew} />
        <Stack.Screen name="ReviewSlideImage" component={ReviewSlideImage} />
        <Stack.Screen name="QuestionCategory" component={QuestionCategory} />
        <Stack.Screen name="QuestionDetail" component={QuestionDetail} />
        <Stack.Screen name="QuestionAnswer" component={QuestionAnswer} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="QuestionNew" component={QuestionNew} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
