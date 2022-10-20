import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import {style} from './style';


const App = () => {
  return (
      <View style={style.container}>
        <View style={style.bagian1}>
        <View style={style.bagian11}></View>
        <View style={style.bagian12}></View>
        <View style={style.bagian11}></View>
        <View style={style.bagian11}></View>
        <View style={style.bagian11}></View>
      </View>
      <View style={style.bagian2}>
        <Text style={style.tulisanku}>Veti Comel </Text>
      </View>
      <View style={style.bagian1}>
          <View style={style.bagian11}></View>
          <View style={style.bagian12}>
              <TextInput style={{backgroundColor:'white', color:'brown'}}></TextInput>
          </View>
          <View style={style.bagian11}></View>
      </View>
    </View>
  );
}

export default App;

//const Teks = () => {
//  return(
    
//  )
//}