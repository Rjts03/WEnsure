import React, { Component, useEffect, useState } from 'react';
import { Button} from 'react-native-elements';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const registerStyle = StyleSheet.create({
    inputStyle: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#E8E7E7',
        width: '100%',
        padding: 7,
    }
})

export function RegisterScreen(props){

    const [data, setData] = useState({});

    let valueChanged = (type, e) => {
        setData({...data, [type]: e});
    }

    return (
      <View style={{ flex: 1, width: '100%', alignItems: "center", justifyContent: 'center',  paddingTop: 60, paddingLeft: 20, paddingRight: 20 }}>
        <TextInput onChangeText = {(e) => valueChanged('name', e)} returnKeyType = { "next" } style={registerStyle.inputStyle} placeholder='Name'/>
        <TextInput maxLength={12} value = {data.aadhar}  onChangeText = {(e) => valueChanged('aadhar', e)} returnKeyType = { "next" }  keyboardType='numeric' style={registerStyle.inputStyle} placeholder='Aadhar ID'/>
        <TextInput onChangeText = {(e) => valueChanged('occupation', e)}  returnKeyType = { "next" } style={registerStyle.inputStyle} placeholder='Occupation'/>
        <TextInput onChangeText = {(e) => valueChanged('organization', e)} returnKeyType = { "next" }  style={registerStyle.inputStyle} placeholder='Organization'/>
        <TextInput maxLength={10} onChangeText = {(e) => valueChanged('mobile', e)} returnKeyType = { "next" }  keyboardType='numeric' style={registerStyle.inputStyle} placeholder='Mobile No.'/>
        <TextInput onChangeText = {(e) => valueChanged('email', e)} returnKeyType = { "next" }  style={registerStyle.inputStyle} placeholder='Email'/>
        <TextInput maxLength={6} onChangeText = {(e) => valueChanged('securePin', e)} returnKeyType = { "next" }  keyboardType='numeric' style={registerStyle.inputStyle} placeholder='Secure Pin' secureTextEntry={true}/>
        <Button buttonStyle={{marginTop: 20}} title="Let's start saving"/>
    </View>
    );
}
