import React from "react";
import { Text } from "react-native";

export default (props) => {
    const {min, max} = props
    const delta = max - min + 1
    const resultado = parseInt(Math.random()*delta)+min

    return (<Text> O resultado é {resultado}</Text>)
}