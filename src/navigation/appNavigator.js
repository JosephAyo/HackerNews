import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authentication from '@screens/Authentication/Authentication';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Feed from '@screens/Feed/Feed';
import Settings from '@screens/Settings/Settings';
import FeedIcon from '@assets/icons/feed';
import SettingsIcon from '@assets/icons/settings';
import {Colors} from '@styles/index';
import {View} from 'react-native';
import styles from './style';
import generalStyles from '@styles/generalStyles';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
import About from '@screens/About/About';
import NewsStory from '@screens/NewsStory/NewsStory';
import StartUp from '@screens/StartUp/StartUp';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = ({mode}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      barStyle={[styles.tarBar, generalStyles(mode).background]}
      activeColor={Colors.PRIMARY}
      shifting={true}
      sceneAnimationEnabled={false}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, focused}) => {
            return focused ? (
              <View style={styles.tabBarItem}>
                <FeedIcon color={color} />
              </View>
            ) : (
              <FeedIcon color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, focused}) => {
            return focused ? (
              <View style={styles.tabBarItem}>
                <SettingsIcon color={color} />
              </View>
            ) : (
              <SettingsIcon color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

function MainAppStack({mode}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Startup" component={StartUp} />
      <Stack.Screen name="Auth" component={Authentication} />
      <Stack.Screen name="HackerNews">
        {props => <MyTabs {...props} mode={mode} />}
      </Stack.Screen>
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="NewsStory" component={NewsStory} />
    </Stack.Navigator>
  );
}

const mapStateToProps = state => ({
  mode: state.themesReducer.mode,
});

export default connect(mapStateToProps)(MainAppStack);
