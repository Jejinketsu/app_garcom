import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import Styles from "./style"
import bg from "../../assets/bg_config.png"

export default function InitMenu(){
    
    return(
        <View style={Styles.container}>
            <ImageBackground source={bg} style={Styles.BGconfig}>
                <View style={Styles.content}>
                    <Text style={Styles.logo_text}>Logo</Text>

                    <Text style={Styles.hint_text}>Carregar Produtos do inventário</Text>
                    
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => {return null}}
                        >
                        <Text style={Styles.text_button}>Iniciar Vendas</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )

}