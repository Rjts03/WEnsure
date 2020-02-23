import React, {useState, useEffect} from 'react'
import { View, Text, FlatList} from 'react-native'
import PolicyCard from '../Components/PolicyCard'
import FloatingButton from '../Components/FloatingButton'
import { getAllPoliciesByUser } from '../utils/request'
import config from '../config'
const {uid} = config

const Home = props => {
    const {navigation} = props;

    const [policies, setPolicies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllPoliciesByUser(uid, setPolicies, setError, setIsLoading)
    }, [])

    const renderCard = ({item, index}) => {
        return <PolicyCard info={item} index={index} {...props} />;
    }

    const navigateToAddPolicy = async () => {
        navigation.navigate('Add Policy', {uid})
    }
    if (isLoading) {
        return <Text>Loading...</Text>
    }else if (error) {
        return <Text>{error.msg}</Text>
    }
    return (
        <View style={{flex: 1, padding: 8}}>
            <FlatList
                data={policies}
                renderItem={renderCard}
                keyExtractor={(item, index) => `${item.id}_${index}`}
                numColumns={2}
            />
            <FloatingButton onPress={navigateToAddPolicy} />
        </View>
    )
}

export default Home
