import * as React from 'react';
import { View, Text, StyleSheet, Button}  from 'react-native';
import { style } from './style';

const About = ({navigation}) => {
    return (
        <View>
            <Text style={style.tulisanku}>Nama : Veti Ningrum</Text>
            <Text style={style.tulisanku}>NIM : 20510010</Text>
            <Text style={style.tulisanku}>Prodi : S1 - Sistem Informasi</Text>

            <Text> Pergi ke halaman Hobi </Text>
            <Button title="Hobi"
            onPress={()=>navigation.navigate('Hobi')}/>

            <Text> Pergi ke halaman suka </Text>
            <Button title="Kesukaan"
            onPress={()=>navigation.navigate('Kesukaan')}/>

            <Text> Pergi ke halaman Rumah </Text>
            <Button title="Go to home"
            onPress={()=>navigation.navigate('Home')}/>

        </View>
    );
};

export default About;