import React from 'react';
import {
    Text
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ListScreen from './ListScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import SomethingScreen from './SomethingScreen';
import LoginScreen from './LoginScreen';



const ListStack = createStackNavigator(
    {
        ListScreen
    },{
        defaultNavigationOptions: ({navigation}) => ({
            title: 'List'
        })
    }

);

const HomeStack = createStackNavigator(
    {
        HomeScreen
    },{
        defaultNavigationOptions:({navigation}) => ({
            title:'Home'
        })
    }
);

const SettingStack = createStackNavigator(
    {
        SettingScreen,
        SomethingScreen
    },{
        defaultNavigationOptions: ({navigation}) =>({
            title: 'Setting'
        }),
        initialRouteName: 'SettingScreen'
    }
)


const TabNavigator = createBottomTabNavigator(
    {
        List: ListStack,
        Home: HomeStack,
        Setting: SettingStack
    },
    {
        defaultNavigationOptions : ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {

                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Home'){
                    icon = "🌈";
                } else if(routeName === 'Setting'){
                    icon = "🌙"
                } else if(routeName === 'List'){
                    icon = "🌙"
                }
                
                return <Text style={{color:focused && "#46c3ad" || "#888"}}>{icon}</Text>
 
            }
        }),
        lazy: false,
        tabBarOptions:{
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);

const AppStack = createStackNavigator(
    {
        LoginScreen:LoginScreen,
        TabNavigator:{
            screen:TabNavigator,
            navigationOptions: ({navigation}) => ({
                header: null,
            }),
        }
    }
)


export default createAppContainer(AppStack);