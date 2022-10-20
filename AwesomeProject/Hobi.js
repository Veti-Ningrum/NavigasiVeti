import * as React from 'react';
import { View, Text, StyleSheet, Button}  from 'react-native';
import { style } from './style';

const Hobi = ({navigation}) => {
    return (
        <View>
            <Text style={style.tulisanku}>Makan</Text>
            <Text style={style.tulisanku}>Rebahan</Text>
            <Text style={style.tulisanku}>Tidur</Text>
            <Text style={style.tulisanku}>Shopping</Text>
            <Text style={style.tulisanku}>Merawat Kucing</Text>

            <Text> Hobi Screen </Text>
            <Button title="Go to Home"
            onPress={()=>navigation.navigate('Home')}/>

        </View>
    );
};

export default Hobi;