import { View, Button } from 'react-native';

const NavBar = () => {
    return (
        <View
            style={styles.container}>
            <Button
            title='Inicio'
            onPress={() => alert('Inicio presionado')}>
            </Button>
            <Button
            title='Sobre mí'
            onPress={() => alert('Sobre mí presionado')}>
            </Button>
            <Button
            title='Proyectos'
            onPress={() => alert('Proyectos presionado')}>
            </Button>
        </View>
    )
    }

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end   ',
        padding: 10,
        backgroundColor: '#fff',
    },
}

export default NavBar;