import { View, Text, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre mí</Text>
            <Text style={styles.text}>
                Soy un apasionado desarrollador de software con experiencia en React Native. Me encanta crear aplicaciones móviles que mejoren la vida de las personas.
            </Text>
            <Text style={styles.text}>
                En mi tiempo libre, disfruto aprendiendo nuevas tecnologías y contribuyendo a proyectos de código abierto.
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
export default AboutMeScreen;