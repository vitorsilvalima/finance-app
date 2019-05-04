import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Home from 'src/screens/Home'
import TabBar from 'src/components/TabBar'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

const createIcon = (IconComponent, name) => ({ focused }) => (
  focused ? <IconComponent name={name} size={20} color="red" />
    : <IconComponent name={name} size={20} color="black" />
)


const TabStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: createIcon(SimpleLineIcon, 'wallet'),
    },
  },
  Graph: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: createIcon(SimpleLineIcon, 'graph'),
    },
  },
  Config: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: createIcon(AntDesignIcon, 'adduser'),
    },
  },
}, {
  tabBarComponent: TabBar,
})

export default TabStack
