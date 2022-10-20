import * as React from 'react';
import { View, Text, StyleSheet, Button}  from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={{backgroundColor:'yellow'}}>
            <Text style={{color:'blue'}}> Pergi ke halaman About </Text>
            <Button title="Go to About"
            onPress={()=>navigation.navigate('About')}/>
            
            <Text style={{color:'blue'}}> Pergi ke halaman Hobi </Text>
            <Button title="Go to Hobi"
            onPress={()=>navigation.navigate('Hobi')}/>

            <Text style={{color:'blue'}}> Pergi ke halaman Kesukaan </Text>
            <Button title="Go to Kesukaan"
            onPress={()=>navigation.navigate('Kesukaan')}/>

            <Text style={{color:'blue'}}> Pergi ke halaman Tidak Suka </Text>
            <Button title="Go to Tidak Suka"
            onPress={()=>navigation.navigate('TidakSuka')}/>

            

        </View>
    );
};

export default Home;