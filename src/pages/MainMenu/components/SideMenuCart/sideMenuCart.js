import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

export default function sideMenuCart(itens){

    const [cart, setCart] = useState(itens.params);

    const [itens_cont, setItens_cont] = useState(cart.length);
    const [value, setValue] = useState(total_cart(cart));

    function total_cart(cart){
        let value = 0.0;
        for (element of cart){
            value += element.value * element.quantity;
        }
        return value;
    }

    function formatCurrencyValue(value){
        return (Math.round((value + Number.EPSILON) * 100)/ 100).toFixed(2)
    }

    return(
        <View style={styles.container}>
            <View style={styles.resume_box}>
                <Text style={styles.top_text}>
                    Meu Pedido - {itens_cont} Produto(s)
                </Text>
                <View style={styles.line} />
                
                <FlatList 
                    style={styles.cart_list}
                    data={cart}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item: item }) => (
                        <View style={styles.item_box}>
                            <Text>
                                <Text style={styles.value_text}>{item.quantity}x </Text>
                                <Text style={styles.name_text}>{item.name} - </Text> 
                                <Text style={styles.value_text}>R$ {formatCurrencyValue(item.value)}</Text>
                            </Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={styles.composition_box}>
                                        <Text style={styles.composition_text}>{item.composition}</Text>
                                    <Text>
                                        <Text style={styles.total_text}>Total: </Text>
                                        <Text style={styles.total_value_text}>R$ {formatCurrencyValue(item.quantity * item.value)}</Text>
                                    </Text>
                                </View>
                                <View style={styles.control_box}>
                                    
                                    <TouchableOpacity
                                        onPress={() => {}}
                                    >
                                        <Icon name={"edit"} size={40} color={"#000"}/>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {}}
                                    >
                                        <Icon name={"trash"} size={40} color={"#000"}/>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={styles.total_box}>
                <Text style={styles.final_total_text}>Total:</Text>
                <Text style={styles.final_value_text}>R$ {formatCurrencyValue(value)}</Text>
                <TouchableOpacity
                    style={styles.pay_buttom}
                    onPress={() => {}}
                >
                    <Text style={styles.pay_buttom_text}>Pedir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}