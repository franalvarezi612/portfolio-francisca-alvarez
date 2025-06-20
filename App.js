import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./components/NavBar";
import Main from "./screens/Main";
import AboutMeScreen from "./screens/AboutMeScreen";
import ProyectsScreen from "./screens/ProyectsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" />
				<Stack.Navigator
					initialRouteName="Main"
					screenOptions={{
						header: (props) => <NavBar {...props} />,
					}}
				>
					<Stack.Screen name="Main" component={Main} />
					<Stack.Screen name="AboutMe" component={AboutMeScreen} />
					<Stack.Screen name="Proyects" component={ProyectsScreen} />
				</Stack.Navigator>
			</SafeAreaView>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "flex-start",
	},
});
