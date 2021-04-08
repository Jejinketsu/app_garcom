import React from "react";
import { Text, View } from "react-native";

import Cart from "./SideMenuCart/sideMenuCart";
import Detail from "./SideMenuDetails/sideMenuDetails";

export default function SideMenuRoot(props){

    let params;

    for (element of props.state.routes) {
        if (element.name == "MainMenu") params = element.params;
    }
    
    if (params != undefined){
        return params.side_menu === "detail" ? <Detail params={params}/> : <Cart params={params}/>;
    } else {
        return <Cart />;
    }

}