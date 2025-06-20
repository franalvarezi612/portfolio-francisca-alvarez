import { View, Text, StyleSheet } from 'react-native';

const Proyectos = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Proyectos</Text>
            <Text style={styles.text}>
                Aquí encontrarás una lista de mis proyectos más destacados.
            </Text>
            <Text style={styles.text}>
                Cada proyecto refleja mi pasión por el desarrollo y mi compromiso con la calidad.
            </Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#000000',
        marginBottom: 10,
        textAlign: 'center',
    },
});
export default Proyectos;