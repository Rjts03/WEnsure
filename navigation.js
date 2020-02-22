
import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient'
import Home from './Screens/Home';
import Rewards from './Screens/Rewards';
import Articles from './Screens/Articles';
import Summary from './Screens/Summary';
import Profile from './Screens/Profile';
import PolicyDetail from './Screens/PolicyDetail';

const gradientHeader = {
    headerBackground: () => (
        <LinearGradient
            colors={['green', 'lightgreen']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),
    headerTintColor: 'white',
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const renderRightButton = (tintColor, navigation) => (
    <TouchableHighlight
        underlayColor="#ededed"
        onPress={() => {navigation.navigate('Rewards')}}
        style={styles.rightBtn}
    >
        <Ionicons name="md-ribbon" size={28} color={'white'} />
    </TouchableHighlight>
);

const HomeStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerRight: ({tintColor}) => renderRightButton(tintColor, navigation),
                ...gradientHeader,
            }}
        />
        <Stack.Screen
            name="Insurance Policy Detail"
            component={PolicyDetail}
            initialParams={{id: null}}
            options={{...gradientHeader}}
        />
        <Stack.Screen
            name="Rewards"
            component={Rewards}
            options={{...gradientHeader,}}
        />
    </Stack.Navigator>
);

const ReadStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Articles" component={Articles} options={{...gradientHeader,}} />
    </Stack.Navigator>
);

const SummaryStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Summary" component={Summary} options={{...gradientHeader,}} />
    </Stack.Navigator>
);

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{...gradientHeader,}} />
    </Stack.Navigator>
);

const tabScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'md-home';
      } else if (route.name === 'Read') {
        iconName = 'md-list-box';
      } else if (route.name === 'Summary') {
          iconName = 'md-cash';
      } else if (route.name === 'Profile') {
          iconName = 'md-person';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

const tabBarOptions = {
    activeTintColor: 'lightgreen',
    inactiveTintColor: 'gray',
};

const Navigator = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <Tab.Navigator screenOptions={tabScreenOptions} tabBarOptions={tabBarOptions}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Read" component={ReadStack} />
                <Tab.Screen name="Summary" component={SummaryStack} />
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
);

export default Navigator;

const styles = StyleSheet.create({
    rightBtn: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 50
    },
});