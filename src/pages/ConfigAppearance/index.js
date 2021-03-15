import React from "react";
import { useState } from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";

import Styles from "./style";
import bg from "../../assets/bg_config.png"

export default function ConfigAppearance(){
    const { main_color, set_main_color} = useState("");
    
    return(
        <View style={Styles.container}>
            <ImageBackground source={bg} style={Styles.BGconfig}>
                <View style={Styles.info_box}>
                    <Text style={Styles.title_text}>Configuração de Aparência</Text>
                    <View style={Styles.input_grid}>
                        <View style={{ flex: 2, marginRight: 10, alignItems: "flex-start"}}>
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
                            onPress={() => {return null}}
                            >
                            <Text style={Styles.text_button}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.button}
                            onPress={() => {return null}}
                            >
                            <Text style={Styles.text_button}>Avançar</Text>
                        </TouchableOpacity>
                    
                    </View>

                </View>
            </ImageBackground>
        </View>
    )

}