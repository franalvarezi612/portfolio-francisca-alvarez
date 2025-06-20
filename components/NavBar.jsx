import { View, Pressable, Text, StyleSheet, Image } from 'react-native';

const NavBar = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/icono-porfolio.png')}
                style={styles.image}
            />
            <Pressable
                style={[styles.button, { marginLeft: 'auto' }]}
                onPress={() => alert('Inicio presionado')}>
                <Text style={styles.buttonText}>Inicio</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => alert('Sobre mí presionado')}>
                <Text style={styles.buttonText}>Sobre mí</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => alert('Proyectos presionado')}>
                <Text style={styles.buttonText}>Proyectos</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center', // Para una mejor alineación vertical
    },
    button: {
        justifyContent: 'flex-end',
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },
    image: {
        width: 45,
        height: 45,
        resizeMode: 'contain', 
    }
});

export default NavBar;