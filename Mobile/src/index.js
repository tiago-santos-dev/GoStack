import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, StatusBar, FlatList, View, TouchableOpacity} from 'react-native';
import api from './services/api';

// Não Possui valor semântico (significado)
// Não Possui estilização própria
// Todos os componentes possuem por padrão "display : flex"

// View: div, footer, header, mais, aside, Section
// Text: p, span, strong, h1, h2, h3

export default function App(){
    const [projects, setProjects] = useState([]);

    async function handleAddProject(){
        const response = await api.post('projects', {
            title : `Project-${Date.now()}`,
            owner : "Tiago",
        });
        const project = response.data;
        setProjects([...projects, project]);
        console.log("1", project);
    };
    
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

                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={handleAddProject}
                >
                  <Text style={styles.buttonText}> Adicionar Projeto</Text>
                </TouchableOpacity>
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
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent:'center',
        alignItems: 'center',
      },
    
      buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
      }
});