import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'red'
    },
    bagian1: {
        flex:1,
        flexDirection:'row',
        backgroundColor:'white'
    },
    bagian11:   {
        flex:1,
        backgroundColor:'#e57373', //mocca sedang
        borderWidth:1
    },        
    bagian12:   {
        flex:5,
        backgroundColor:'#af4448' // mocca gelap
    },
    bagian2:    {
        flex:10,
        backgroundColor:'#ffa4a2' // mocca terang
    },
    tulisanku: {
        marginTop:15,
        paddingVertical:18,
        borderWidth:1,
        fontSize:25,
        color:'brown',
        marginHorizontal:15,
        textAlign:'center',
    }
    
});

export {style};