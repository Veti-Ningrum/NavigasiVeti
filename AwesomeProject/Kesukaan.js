import * as React from 'react';
import { View, Text, StyleSheet, Button}  from 'react-native';
import { style } from './style';

const Kesukaan = ({navigation}) => {
    return (
        <View>
            <Text style={style.tulisanku}>Uang</Text>
            <Text style={style.tulisanku}>Emas</Text>
            <Text style={style.tulisanku}>Tidur "lagi"</Text>
            <Text style={style.tulisanku}>Berlian</Text>
            <Text style={style.tulisanku}>Kucing</Text>

            <Text> Screen </Text>
            <Button title="Tidak Suka"
            onPress={()=>navigation.navigate('TidakSuka')}/>

            <Text> Veti Screen </Text>
            <Button title="Go to Home"
            onPress={()=>navigation.navigate('Home')}/>

        </View>
    );
};

export default Kesukaan;