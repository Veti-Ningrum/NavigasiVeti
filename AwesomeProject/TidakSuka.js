import * as React from 'react';
import { View, Text, StyleSheet, Button}  from 'react-native';
import { style } from './style';

const TidakSuka = ({navigation}) => {
    return (
        <View>
            <Text style={style.tulisanku}>dicuekin</Text>
            <Text style={style.tulisanku}>dimarahi</Text>
            <Text style={style.tulisanku}>dibantah</Text>
            <Text style={style.tulisanku}>dibentak</Text>
            <Text style={style.tulisanku}>disekak</Text>

            <Text> Screen </Text>
            <Button title="Kesukaan"
            onPress={()=>navigation.navigate('Kesukaan')}/>

            <Text> Hobi Screen </Text>
            <Button title="Go to Home"
            onPress={()=>navigation.navigate('Home')}/>

        </View>
    );
};

export default TidakSuka;