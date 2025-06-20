import { View, Text, StyleSheet } from "react-native";

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>¡Bienvenido a mi aplicación!</Text>
            <Text style={styles.text}>Aquí encontrarás información sobre mí y mis proyectos.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    text: {
        fontSize: 18,
        color: '#000000',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default Main;