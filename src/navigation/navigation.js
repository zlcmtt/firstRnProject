import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const commonOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
        height: 30, // Specify the height of your custom header
    },
    headerLeft: null
}
import Home from '../views/Home'
import HomeDetails from '../views/HomeDetails'
import { HomeDetailsNavigation } from './Home'
const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={commonOptions} />
            <Stack.Screen name="HomeDetails" component={HomeDetails} options={Object.assign(JSON.parse(JSON.stringify                (commonOptions)),HomeDetailsNavigation)} />
        </Stack.Navigator>
);
}
export default MyStack