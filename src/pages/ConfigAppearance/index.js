import React from "react";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";

import Styles from "./style";
import bg from "../../assets/bg_config.png"

export default function ConfigAppearance(){

    const navigation = useNavigation();
    const route = useRoute();

    const [ main_color, set_main_color ] = useState("");

    function navigateToInit(){
        navigation.navigate("InitMenu", {})
    }

    function navigateBack(){
        navigation.goBack();
    }
    
    return(
        <View style={Styles.container}>
            <ImageBackground source={bg} style={Styles.BGconfig}>
                <View style={Styles.info_box}>
                    <Text style={Styles.title_text}>Configuração de Aparência</Text>
                    <View style={Styles.input_grid}>
                        <View style={{ flex: 2 }}>
                            <Text style={Styles.input_label}>Cor Principal <Text style={ {color: "#D00"} }>*</Text></Text>
                            <TextInput
                                style={Styles.input_area}
                                placeholder={"Ex:  oranged"}
                                placeholderTextColor={"rgba(160, 159, 159, 0.8)"}
                                onChangeText={set_main_color}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            
                        </View>
                    </View>

                    <View style={Styles.buttons}>
                        
                        <TouchableOpacity
                            style={Styles.button}
                            onPress={() => {navigateBack()}}
                            >
                            <Text style={Styles.text_button}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.button}
                            onPress={() => {navigateToInit()}}
                            >
                            <Text style={Styles.text_button}>Avançar</Text>
                        </TouchableOpacity>
                    
                    </View>

                </View>
            </ImageBackground>
        </View>
    )

}