import React from "react";
import { SafeAreaView, Text, FlatList, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const data = new Array(40).fill(0)
export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <View style={{ flex: 1, padding: 24}}>
          <Text style={{ fontWeight: '600', fontSize: 30 }}>Contas</Text>
          <View style={{ flex: 1, backgroundColor: 'blue', borderRadius: 24, marginVertical: 24, }}>

          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12, color: '#989BB0' }}>Transactions</Text>
            <FlatList
              data={data}
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
      </SafeAreaView>
    );
  }
}