import React, { Component, useEffect, useState } from 'react';
import { Button} from 'react-native-elements';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { registerUser } from '../utils/request';
import config from '../config'
const {uid} = config

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

const Register = (props) => {

    const [data, setData] = useState({});
    const [status, setStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    let valueChanged = (type, e) => {
        setData({...data, [type]: e});
    }

    React.useEffect(() => {
        checkRegisterStatus()
    }, [])

    const checkRegisterStatus = async () => {
        if (uid) props.setRegistered(true);
    }

    const register = () => {
        setIsLoading(true)
        const body = {
            name: data.name,
            uid: data.aadhar,
            occupation: data.occupation,
            organization: data.organization,
            secure_pin: data.securePin,
            contact: {
                phone_no: data.mobile,
                address: data.address || 'n/a'
            },
            insurance_reason: data.insuranceReason || 'n/a',
            death_wish: data.deathWish || 'n/a',
            email: data.email,
            password: data.password || data.securePin
        }

        registerUser(body)
    }

    return (
      <View style={{ flex: 1, width: '100%', alignItems: "center", justifyContent: 'center',  paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{color: 'green', fontSize: 28}}>WEnsure</Text>
        <Text style={{color: 'darkgreen', fontSize: 22, marginBottom: 40}}>We Ensure You Save!</Text>
        <TextInput onChangeText = {(e) => valueChanged('name', e)} returnKeyType = { "next" } style={registerStyle.inputStyle} placeholder='Name'/>
        <TextInput maxLength={12} value = {data.aadhar}  onChangeText = {(e) => valueChanged('aadhar', e)} returnKeyType = { "next" }  keyboardType='numeric' style={registerStyle.inputStyle} placeholder='Aadhar ID'/>
        <TextInput onChangeText = {(e) => valueChanged('occupation', e)}  returnKeyType = { "next" } style={registerStyle.inputStyle} placeholder='Occupation'/>
        <TextInput onChangeText = {(e) => valueChanged('organization', e)} returnKeyType = { "next" }  style={registerStyle.inputStyle} placeholder='Organization'/>
        <TextInput maxLength={10} onChangeText = {(e) => valueChanged('mobile', e)} returnKeyType = { "next" }  keyboardType='numeric' style={registerStyle.inputStyle} placeholder='Mobile No.'/>
        <TextInput onChangeText = {(e) => valueChanged('email', e)} returnKeyType = { "next" }  style={registerStyle.inputStyle} placeholder='Email'/>
        <TextInput maxLength={6} onChangeText = {(e) => valueChanged('securePin', e)} returnKeyType = { "next" }  keyboardType='numeric' style={registerStyle.inputStyle} placeholder='Secure Pin' secureTextEntry={true}/>
        {status && <Text style={{fontSize: 26, color: 'darkgreen'}}>Registered Successfully</Text>}
        <Button onPress={register} buttonStyle={{marginTop: 20, backgroundColor: 'green'}} title="Let's start saving"/>
    </View>
    );
}

export default Register