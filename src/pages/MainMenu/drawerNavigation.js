import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainMenu from "./index";
import SideMenu from "./components/sideMenuRoot";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return (
        <Drawer.Navigator 
            drawerPosition={'right'}
            drawerContent={props => <SideMenu {...props} />}
            drawerContentOptions={{
                activeBackgroundColor: "#fff",
            }}
            drawerStyle={
                {width: "45%"}
            }
        >
            <Drawer.Screen name="MainMenu" component={MainMenu} />
        </Drawer.Navigator>
    );

}