import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, StatusBar, FlatList, View} from 'react-native';
import api from './services/api';

// Não Possui valor semântico (significado)
// Não Possui estilização própria
// Todos os componentes possuem por padrão "display : flex"

// View: div, footer, header, mais, aside, Section
// Text: p, span, strong, h1, h2, h3

export default function App(){
    const [projects, setProjects] = useState([]);
    
     useEffect(() => {
    api.get('projects').then(response => {
     setProjects(response.data);
     console.log("Proj", projects);
    });
  }, []) ;

    return(
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>            
            <SafeAreaView style={styles.container}>
            <FlatList
            data={projects}
            keyExtractor={project => project.id}
            renderItem={({item : project}) => (
                <Text style={styles.project}>
                    {project.title}
                </Text>
            )}
            />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#7159c1',

    },
    project : {
        color: '#FFF',
        fontSize: 32,
        fontWeight : 'bold',
    }
});