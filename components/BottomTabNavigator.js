import React, {Component} from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";

import Home from "../screens/FeedScreens";
import Dicas from "../screens/DicasScreens";
import Receitas from "../screens/ReceitasScreens";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === "Home") {
                                iconName = "home";
                            } else if (route.name === "Dicas") {
                                iconName = "bulb";
                            } else if (route.name === "Receitas") {
                                iconName = "book";
                            }

                            // Você pode devolver qualquer componente que desejar aqui!
                            return (
                                <Ionicons
                                    
                                />
                            );
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: "#FFFFFF",
                        inactiveTintColor: "#FFFFFF",
                        
                        style: {
                            backgroundColor: "#005400",
                            paddingTop: 10,
                        },
                        labelStyle: {
                            fontSize: 18,
                            fontWeight: "bold",
                            marginBottom: 13,
                            
                        },
                        tabStyle: {
                         
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#005400",
                            
                            borderBottomWidth: 0,
                        },
                        iconStyle: {
                            marginBottom: 5,
                            
                        },
                    }}
                >
                    <Tab.Screen name="Home" component={Home} options={{headerShown:false}}  />
                    <Tab.Screen name="Dicas" component={Dicas} options={{headerShown:false}}/>
                    <Tab.Screen name="Receitas" component={Receitas} options={{headerShown:false}}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

