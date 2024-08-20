
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Aplicativo RIT</Text>
            <Button
                title="Mostrar Patrocinadores"
                onPress={() => navigation.navigate('Patrocinadores')}
            />
            <Button
                title="Mostrar Igrejas"
                onPress={() => navigation.navigate('Igrejas')}
            />
            <Button
                title="Doações"
                onPress={() => navigation.navigate('Doações')}
            />
        </View>
    );
};

const PatrocinadoresScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}><a href="https://patrocinadores.ongrace.com/seja-um-patrocinador">Patrocinadores</a></Text>
            {/* Aqui você pode listar os patrocinadores */}
        </View>
    );
};

const IgrejasScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}><a href="https://ongrace.com/buscar-igrejas/">Lista de Igrejas</a></Text>
            {/* Aqui você pode listar as igrejas */}
        </View>
    );
};

const DoaçõesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}><a href="https://ongrace.com/doacao-iigd-pix/">Informações sobre Doações</a></Text>
            
            {/* Aqui você pode adicionar informações sobre doações */}
        </View>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Patrocinadores" component={PatrocinadoresScreen} />
                <Stack.Screen name="Igrejas" component={IgrejasScreen} />
                <Stack.Screen name="Doações" component={DoaçõesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f8f9fa', // Cor de fundo suave
  },
  title: {
      fontSize: 24,
      marginBottom: 10,
  },
  buttonContainer: {
      width: '100%', // Largura total para melhor centralização
      alignItems: 'stretch', // Centraliza os botões na horizontal
  },
  spacing: {
      height: 80, // Espaço entre os botões
      width: 90,
  },
});
