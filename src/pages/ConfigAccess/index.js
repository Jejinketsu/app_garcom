import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import CheckBox from '@react-native-community/checkbox'

import Styles from "./style";
import bg from "../../assets/bg_config.png"

export default function ConfigAccess(){
    const [url, setUrl] = useState("");
    const [ID, setID] = useState("");
    const [secret, setSecret] = useState("");
    const [isIzettle, setIzettle] = useState(false);
    
    return(
        <View style={Styles.container}>
            <ImageBackground source={bg} style={Styles.BGconfig}>
                <View style={Styles.info_box}>
                    <Text style={Styles.title_text}>Configuração de Acesso</Text>
                    <View style={Styles.input_grid}>
                        <View style={{ flex: 2, marginRight: 10 }}>
                            <Text style={Styles.input_label}>Endereço URL <Text style={ {color: "#D00"} }>*</Text></Text>
                            <TextInput
                                style={Styles.input_area}
                                placeholder={"Ex:  https://erp-acologiahem.sass.moober.app"}
                                placeholderTextColor={"rgba(160, 159, 159, 0.8)"}
                                onChangeText={setUrl}
                                />
                            <Text style={Styles.input_label}>Client ID <Text style={ {color: "#D00"} }>*</Text></Text>
                            <TextInput
                                style={Styles.input_area}
                                placeholder={"Ex:  giebAIBDAIW2ud#I$@B5iadEIF"}
                                placeholderTextColor={"rgba(160, 159, 159, 0.8)"}
                                onChangeText={setID}
                                />
                            <Text style={Styles.input_label}>Client Secret <Text style={ {color: "#D00"} }>*</Text></Text>
                            <TextInput
                                style={Styles.input_area}
                                placeholder={"Ex:  @fhubws5FBW93NS3widHS39"}
                                placeholderTextColor={"rgba(160, 159, 159, 0.8)"}
                                onChangeText={setSecret}
                            />
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <View style={Styles.check_box}>
                                <CheckBox
                                    style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                    tintColors={ { true: "#BF815E", false: "#BF815E" } }
                                    disabled={false}
                                    value={isIzettle}
                                    onValueChange={setIzettle}
                                />
                                <Text style={Styles.input_label}>Use Maquininha Izettle</Text>
                            </View>

                            <TouchableOpacity
                                style={Styles.button}
                                onPress={() => {return null}}
                            >
                                <Text style={Styles.text_button}>Login Izettle</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={Styles.button}
                                onPress={() => {return null}}
                            >
                                <Text style={Styles.text_button}>Configurar Maquininha</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => {return null}}
                    >
                        <Text style={Styles.text_button}>Avançar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );

}