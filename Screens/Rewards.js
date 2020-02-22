import React from 'react'
import { View, Text, FlatList } from 'react-native'
import RewardCard from '../Components/RewardCard';

const Rewards = props => {
    const renderCard = ({item, index}) => {
        return <RewardCard index={index} {...props} />;
    }
    return (
        <View style={{flex: 1, padding: 8}}>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
                renderItem={renderCard}
                keyExtractor={(item, index) => `${item.id}_${index}`}
                numColumns={2}
            />
        </View>
    )
}

export default Rewards
