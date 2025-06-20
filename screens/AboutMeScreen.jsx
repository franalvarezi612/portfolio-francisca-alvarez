import { View, Text, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre mí</Text>
            <Text style={styles.text}>
                Soy una apasionada por el desarrollo de software, por el deporte y por conocer el mundo
            </Text>
            <Text style={styles.text}>
                En mi tiempo libre, disfruto compartiendo con mis seres queridos, haciendo el deporte que más me gusta (Running) y aprendiendo nuevas tecnologías.
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