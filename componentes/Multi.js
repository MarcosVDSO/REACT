import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'

export default function () {
    return <Text style = {Estilo.fontG}>Compontente #Oficial</Text>
}
export function Comp1() {
    return <Text style = {Estilo.fontG}>Compontente #02</Text>
}
export function Comp2() {
    return <Text style = {Estilo.fontG}>Compontente #03</Text>
}