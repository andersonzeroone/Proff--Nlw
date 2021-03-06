import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container:{
        padding:40,
        backgroundColor:'#34CB79'
    },
    toBar:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize:18,
        lineHeight:32,
        maxHeight:160,
        marginVertical:40
    }
})

export default styles;