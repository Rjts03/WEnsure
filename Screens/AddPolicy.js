import React, { Component, useEffect, useState } from 'react';
import { Button} from 'react-native-elements';
import {View, StyleSheet, TextInput, Picker} from 'react-native';
import DatePicker from 'react-native-datepicker'

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

export function AddPolicyScreen(props){

    const [data, setData] = useState({});

    let valueChanged = (type, e) => {
        setData({...data, [type]: e});
    }

    return (
      <View style={{ flex: 1, width: '100%', alignItems: "center", paddingTop:140,  paddingLeft: 20, paddingRight: 20 }}>
        <TextInput onChangeText = {(e) => valueChanged('insurance_type', e)} returnKeyType = { "next" } style={registerStyle.inputStyle} placeholder='Insurance Type'/>
        <TextInput onChangeText = {(e) => valueChanged('insurance_provider', e)} returnKeyType = { "next" }  style={registerStyle.inputStyle} placeholder='Insurance provider'/>
        <Picker
            selectedValue={data['premium_pay_type']}
            style={registerStyle.inputStyle}
            placeholder = 'premium type'
            onValueChange = {(e) => valueChanged('premium_pay_type')}>
            <Picker.Item value='' label='Premium type' />
            <Picker.Item label="Quaterly" value="quarterly" />
            <Picker.Item label="Yearly" value="yearly" />
        </Picker>
        <DatePicker
        style={{width: '100%'}}
        date={data['premium_pay_date']}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={ {
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => valueChanged('premium_pay_date', date)}
      />
              <TextInput onChangeText = {(e) => valueChanged('premium_amount', e)} returnKeyType = { "next" }  keyboardType='numeric' style={registerStyle.inputStyle} placeholder='Premium amount'/>
        <Button buttonStyle={{marginTop: 20}} title="Let's start saving"/>
    </View>
    );
}
