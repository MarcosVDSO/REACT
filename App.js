import React from "react";
import {Text} from 'react-native'
import Primeiro from './componentes/primeiro'
import { View, StyleSheet} from "react-native";
import Padrao, { Comp1, Comp2 } from './componentes/Multi'
import MinMax from "./componentes/MinMax";
import Aleatorio from "./componentes/Aleatorio";
/*
function App() {
  const jsx = <Text>Primeiro componente</Text>
  return jsx
}
export default App; */

// simplificando este código acima

export default () => (
  <View style = {style.App}>
    <Aleatorio min={10} max={50}/>   
    <Aleatorio min={15} max={1000}/>   
    <Aleatorio min={10} max={87848}/>   
    <Aleatorio min={10} max={575}/>   
    <MinMax min={3} max={20}/>
    <Comp1/>
    <Comp2/>
    <Padrao/>
    <Primeiro/>
  </View>
  )

const style = StyleSheet.create({
  App: {
    backgroundColor: '#FF6961',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center',
    padding: 20

  }
})
