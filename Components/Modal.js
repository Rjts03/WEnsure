import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Overlay} from 'react-native-elements'
import {Ionicons} from '@expo/vector-icons';

const Modal = props => {
    const {show, setShow, children} = props;
    return (
        <Overlay
            animationType="fade"
            width={'80%'}
            height={'60%'}
            borderRadius={20}
            isVisible={show}
            onBackdropPress={() => setShow(false)}
        >
            <Ionicons
                onPress={() => setShow(false)}
                style={styles.cross}
                size={24}
                name={'md-close-circle-outline'}
                color={'red'}
            />
            {children}
        </Overlay>
    )
}

export default Modal

const styles = StyleSheet.create({
    cross: {position: 'absolute', right: 9, top: 7}
})