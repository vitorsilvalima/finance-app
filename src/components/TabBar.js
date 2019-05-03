import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

const MiddleButtom = () => (
  <TouchableOpacity style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
    <AntDesignIcon name="plus" size={40} color="white" />
  </TouchableOpacity>
)

class TabBar extends Component {
  renderIcon = ({ route, focused }) => {
    const { onTabPress, renderIcon } = this.props

    return (
      <TouchableOpacity
        style={{ padding: 15 }}
        onPress={() => onTabPress({ route })}
        key={route.key}
      >
        {renderIcon({ route, focused })}
      </TouchableOpacity>
    )
  }

  render () {
    const {
      navigation,
    } = this.props

    const { routes } = navigation.state
    const length = Math.ceil(routes.length / 2)
    const leftRoutes = routes.slice(0, length)
    const rightRoutes = routes.slice(length)

    return (<View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.9)',
      position: 'absolute',
      bottom: 0,
    }}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
      }}>
        {
          leftRoutes.map((route, index) => {
            const focused = index === navigation.state.index
            const scene = { route, focused }

            return this.renderIcon(scene)
          })
        }
      </View>
      <MiddleButtom />
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
      }}>
        {
          rightRoutes.map((route, index) => {
            const focused = (index + length) === navigation.state.index
            const scene = { route, focused }

            return this.renderIcon(scene)
          })
        }
      </View>
    </View>)

  }
}
export default TabBar