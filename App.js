import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Products} from './src/views';


const App = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={Products}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
