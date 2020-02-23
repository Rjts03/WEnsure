import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';
import { getPolicyById } from '../utils/request';

const PolicyDetail = props => {
    const {navigation, route} = props;
    
    const [details, setDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getPolicyById(route.params.pid, setDetails, setError, setIsLoading)
    }, [])

    if (isLoading) {
        return <Text>loading...</Text>
    }else if(error) {
        return <Text>{error}</Text>
    }
    return (
        <View style={{flex: 1, margin: 12}}>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>
                    {'Policy Number: \t'}
                    <Text style={styles.value}>{details.policy_id}</Text>
                </Text>
                <Text style={styles.title}>
                    {'Policy Type: \t'}
                    <Text style={styles.value}>{details.insurance_type}</Text>
                </Text>
                <Text style={styles.title}>
                    {'Policy Provider: \t'}
                    <Text style={styles.value}>ICICI Lombard</Text>
                </Text>
                <Text style={styles.title}>
                    {'Premium Type: \t'}
                    <Text style={styles.value}>{details.premium_type}</Text>
                </Text>
                <Text style={styles.title}>
                    {'Premium Date: \t'}
                    <Text style={styles.value}>{details.premium_payment_date}</Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => {}}
                    title="View all Transactions"
                    type='outline'
                    titleStyle={{color: 'green'}}
                    containerStyle={{marginHorizontal: 4, borderColor: 'green'}}
                />

                <Button
                    title="Pay next Installment"
                    titleStyle={{color: 'green'}}
                    type='outline'
                    containerStyle={{marginHorizontal: 4, borderColor: 'green'}}
                    onPress={() => navigation.navigate('Pay')}
                />
            </View>
        </View>
    )
}

export default PolicyDetail

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 36,
    },
    title: {
        fontSize: 18,
        color: 'grey',
        borderBottomWidth: 0.6,
        borderColor: 'lightgrey',
        paddingBottom: 4
    },
    value: {fontSize: 24, color: '#000'},
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})