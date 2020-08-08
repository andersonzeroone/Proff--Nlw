import React, {useState} from 'react';
import { View, ScrollView }from 'react-native';
import Pageheader from '../../components/PageHeader';
import TeacherItem , {Teacher}from '../../components/TeacherItem';
import AsyncStorage  from '@react-native-community/async-storage';
import { useFocusEffect} from '@react-navigation/native';
import styles from './styles';

function Favorites(){

    const [favorites, setFavorites] = useState([]);

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then( res => {
            if(res){
                const favoritedTeachers =  JSON.parse(res);
                setFavorites(favoritedTeachers);
            }
        })    
    }

    useFocusEffect(()=>{
       loadFavorites();     
    })
    return(
        <View style={styles.container}>
            <Pageheader title="Meus proffs favoritos"/>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:16
                }}
            >
                {favorites.map((teacher: Teacher) =>{
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}
            </ScrollView>    
        </View>
    )
}
export default Favorites;