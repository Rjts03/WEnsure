import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PolicyCard = props => {
    const {info, index, navigation} = props;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Insurance Policy Detail', {id: '4343'})} style={styles.cardContainer}>
            <View style={styles.cardTop}>
                <Text>23298934</Text>
                <Text>Created On: 01/01/2020</Text>
            </View>

            <View style={styles.cardBottom}>
                <View>
                    <Text>Due amount</Text>
                    <Text>Rs. 2000</Text>
                </View>

                <View>
                    <Text>Due date</Text>
                    <Text>31/02/2020</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PolicyCard;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        padding: 8,
        margin: 4,
        marginTop: 8,
        borderRadius: 8,
        borderWidth: 0.8,
        borderColor: 'darkgreen'
    },
    cardTop: {
        flex: 1,
        borderBottomWidth: 0.5
    },
    cardBottom: {
        flex: 1
    }
});
