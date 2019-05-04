import React from 'react'
import { SafeAreaView } from 'react-native'
import RootStack from 'src/navigation/RootStack'
import { Provider } from './appState'

export default class extends React.Component {
  state = {
    isTabBarVisible: true,
  }

  toggleTabBar = () => this.setState(({ isTabBarVisible}) => ({
    isTabBarVisible: !isTabBarVisible,
  }))

  render () {
    const state = {
      ...this.state,
      toggleTabBar: this.toggleTabBar,
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider value={state}>
          <RootStack />
        </Provider>
      </SafeAreaView>
    )
  }
}