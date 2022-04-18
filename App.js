// In App.js in a new project

import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const ChildScreen1 = ({route}) => {
  return <View style={{flex: 1, backgroundColor: 'green'}} />;
};

export const ChildScreen2 = ({route}) => {
  return <View style={{flex: 1, backgroundColor: 'red'}} />;
};

const ScreenTab = createMaterialTopTabNavigator();
export const ExploreScreen = () => {
  return (
    <ScreenTab.Navigator>
      <ScreenTab.Screen name="Child 1" component={ChildScreen1} />
      <ScreenTab.Screen name="Child 2" component={ChildScreen2} />
    </ScreenTab.Navigator>
  );
};

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Tab.Navigator>
          <Tab.Screen name="Feed" component={ExploreScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;
