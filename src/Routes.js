import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import ConfigAccess from "./pages/ConfigAccess";
import ConfigAppearance from "./pages/ConfigAppearance";
import InitMenu from "./pages/InitMenu";
import MainMenu from "./pages/MainMenu/drawerNavigation";
import PayPage from "./pages/PayPage";

const AppStack = createStackNavigator();

export default function Routes() {

    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="ConfigAccess" component={ConfigAccess} />
                <AppStack.Screen name="ConfigAppearance" component={ConfigAppearance} />
                <AppStack.Screen name="InitMenu" component={InitMenu} />
                <AppStack.Screen name="MainMenu" component={MainMenu} />
                <AppStack.Screen name="PayPage" component={PayPage} />
            </AppStack.Navigator>
        </NavigationContainer>
    )

}