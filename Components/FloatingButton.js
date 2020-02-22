import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const FloatingButton = () => {
    return (
        <TouchableHighlight underlayColor={"green"} onPress={() => {}} style={styles.floatingBtn}>
            <Ionicons name={"md-add"} color="white" size={40} />
        </TouchableHighlight>
    )
}

export default FloatingButton


const styles = StyleSheet.create({
    floatingBtn: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: 'lightgreen',
        elevation: 10,
    }
})