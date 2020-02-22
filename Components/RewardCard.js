import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RewardCard = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardCenter}>
                <Text style={styles.reward}>50</Text>
            </View>

            <View style={styles.cardBottom}>
                <View>
                    <Text>Credited On 05/02/2020</Text>
                </View>
            </View>
        </View>
    )
}

export default RewardCard;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        padding: 8,
        margin: 4,
        marginTop: 8,
        borderRadius: 8,
        borderWidth: 0.4
    },
    cardCenter: {
        flex: 1,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardBottom: {
        flex: 1,
    },
    reward: {
        fontSize: 36
    }
});
