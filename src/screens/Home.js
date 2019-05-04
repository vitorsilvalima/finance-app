import React from "react";
import { SafeAreaView, Text, FlatList, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TAB_BAR_HEIGHT } from "src/helpers/style";
import { withAppState } from 'src/appState'

const data = new Array(40).fill(0)
class HomeScreen extends React.Component {
  state = {}
  ref = React.createRef()
  height = 0
  // static navigationOptions = ({navigation}) => {
  //   const { tabBarVisible = true } = navigation.state.params || {};

  //   return ({
  //     tabBarVisible,
  //   })
  //   return {}
  // }

  onLayout = event => {
    if (this.height > 0) return

    let { width, height } = event.nativeEvent.layout
    this.height = height
  }

  onScroll = (event) => {
    const scrollOffsetY = event.nativeEvent.contentOffset.y;

    const shouldShowTabBar = scrollOffsetY > this.height ? false : true
    const direction = scrollOffsetY > this.height ? 'down' : 'up'

    if (this.props.isTabBarVisible !== shouldShowTabBar) {
      this.props.toggleTabBar()
    }
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 24}}>
        <Text style={{ fontWeight: '600', fontSize: 30 }}>Contas</Text>
        <View style={{ flex: 1, backgroundColor: '#4850FF', borderRadius: 24, marginVertical: 24, }}>

        </View>
        <View style={{ flex: 2 }} ref={this.ref}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12, color: '#989BB0' }}>Transactions</Text>
          <FlatList
            onScroll={this.onScroll}
            data={data}
            onLayout={this.onLayout}
            renderItem={({ item }) => <View style={{ flexDirection: 'row' }}>
              <MaterialIcons size={40} name="food" color="black" />
              <View style={{ marginLeft: 15, flexDirection: 'column', borderBottomColor: 'black', borderBottomWidth: 1, flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                  <Text style={{ fontWeight: '600', fontSize: 14}}>Nome da transction</Text>
                  <Text style={{ fontWeight: '600', fontSize: 14}}>R$ 68</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{ fontSize: 12}}>7:42 pm</Text>
                  <Text style={{ fontSize: 12}}>tipo</Text>
                </View>
              </View>
            </View>}
          />
        </View>
      </View>
    );
  }
}

export default withAppState(HomeScreen)