import React from 'react';
import { Platform,Text,Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';
import SideMenu from './SideMenu';
import Icon from 'react-native-vector-icons';
import Colors from '../constants/Colors';
var { height, width } = Dimensions.get('window');


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Portal from '../screens/HooptyPortal';
import Schedule from '../screens/Schedule';
import Stats from '../screens/stats';
import Payment from '../screens/Payment';
import Method from '../screens/PaymentMethod';
import WorkOrder from '../screens/WorkOrder';



// const HomeScreenNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Settings: {
//    screen: SettingsScreen
//   }
// });


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    return <Text style={{textAlign: 'center', fontSize: 13, marginBottom: 1, marginBottom:20, color: focused ? '#db2b2b' : '#757e8dff' }}>Explore</Text>;
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        'compass-outline'
      }
    />
  ),
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      height: 90,
    },
    style: {
      height:90,
      backgroundColor: '#F7F7F8'
    },
  }
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    return <Text style={{textAlign: 'center', fontSize: 13, marginBottom: 1, marginBottom:20, color: focused ? '#db2b2b' : '#757e8dff' }}>Garage</Text>;
  },tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'file-document-box-outline'}
    />
  ),
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      height: 90,
    },
    style: {
      height:90,
      backgroundColor: '#F7F7F8'
    },
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    return <Text style={{textAlign: 'center', fontSize: 13, marginBottom: 1, marginBottom:20, color: focused ? '#db2b2b' : '#757e8dff' }}>Support</Text>;
  },
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon
    //   focused={focused}
    //   name={'question'}
    //   style={{padding:20}}
    // />
    <Icon.SimpleLineIcons
        name={'question'}
        size={24}
        style={{marginBottom:-20}}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  ),
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      height: 90,
    },
    style: {
      height:90,
      backgroundColor: '#F7F7F8'
    },
  }
};

const HomeScreenNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

export default createDrawerNavigator({
  HomeNavigator: {
    screen: HomeScreenNavigator
  },
  Portal: {
    screen: Portal
  },
  Schedule: {
    screen: Schedule
  },
  Stats: {
    screen: Stats
  },
  Payment: {
    screen: Payment
  },
  Method: {
    screen: Method
  },
  WorkOrder: {
    screen: WorkOrder
  }

}, {
  // define customComponent here
  contentComponent: SideMenu,
  drawerWidth: width * .88,
  drawerType : "slide",
  overlayColor: '00FFFFF'
});


const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#f50057',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        Header
      </Text>
    </View>
    {/* <DrawerItems {...props} /> */}
  </View>
)
