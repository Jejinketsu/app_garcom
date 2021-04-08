import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

export default function sideMenuCart(list){
    
    const [itens_cont, setItens_cont] = useState(3);
    const [value, setValue] = useState(56.7);

    const [cart, setCart] = useState([
        {
            id: "1",
            name: "Estrogonorfe de Carne",
            value: 18.90,
            quantity: 1,
            composition: "Carne ao molho, Macarrão, Arroz",
        },
        {
            id: "2",
            name: "Estrogonorfe de Carne",
            value: 18.90,
            quantity: 1,
            composition: "Carne ao molho, Macarrão, Arroz",
        },
        {
            id: "3",
            name: "Estrogonorfe de Carne",
            value: 18.90,
            quantity: 1,
            composition: "Carne ao molho, Macarrão, Arroz",
        }
    ]);

    function formatCurrencyValue(value){
        return (Math.round((value + Number.EPSILON) * 100)/ 100).toFixed(2)
    }

    return(
        <View style={styles.container}>
            <View style={styles.resume_box}>
                <Text>
                    Meu Pedido - {itens_cont} Produto(s)
                </Text>
                <View style={styles.line} />
                
                <FlatList 
                    style={styles.cart_list}
                    data={cart}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: item }) => (
                        <View style={styles.item_box}>
                            <Text>
                                <Text style={styles.value_text}>{item.quantity}x </Text>
                                <Text style={styles.name_text}>{item.name} - </Text> 
                                <Text style={styles.value_text}>R$ {formatCurrencyValue(item.value)}</Text>
                            </Text>
                            <View style={{ flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.composition_text}>{item.composition}</Text>
                                    <Text style={styles.total_text}>R$ {formatCurrencyValue(item.quantity * item.value)}</Text>
                                </View>
                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <Icon name={"edit"} size={30} color={"#000"}/>
                                    <Icon name={"trash"} size={30} color={"#000"}/>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={styles.total_box}>
                <Text style={styles.total_text}>Total:</Text>
                <Text style={styles.value_text}>R$ {formatCurrencyValue(value)}</Text>
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