import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function SideMenuDetail(product){

    const [cont_product, setCont_product] = useState(1);

    function formatCurrencyValue(value){
        return (Math.round((value + Number.EPSILON) * 100)/ 100).toFixed(2)
    }

    return(
        <View style={styles.container}>
            <View>
                <Image style={styles.product_image} source={{ uri: product.params.info.img_url}} />
                <Text style={styles.product_name}>{product.params.info.name}</Text>
                <Text style={styles.product_value}>R$ {formatCurrencyValue(product.params.info.value)}</Text>
            </View>

            <View style={styles.description_box}>
                <View style={styles.line} />
                <View style={styles.text_box}>
                    <Text style={styles.product_description}>{product.params.info.description}</Text>
                </View>
                <View style={styles.line} />
            </View>

            <View style={styles.control_box}>
                <View style={{flexDirection: "row"}}>

                    <TouchableOpacity
                        style={styles.minus_buttom}
                        onPress={() => {}}
                        >
                        <Text style={styles.minus_buttom_text}>-</Text>
                    </TouchableOpacity>

                    <View style={styles.cont_background}>
                        <Text style={styles.cont_text}>{cont_product}</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.plus_buttom}
                        onPress={() => {}}
                        >
                        <Text style={styles.plus_buttom_text}>+</Text>
                    </TouchableOpacity>
                
                </View>

                <TouchableOpacity
                    style={styles.add_cart_button}
                    onPress={() => {}}
                >
                    <Text style={styles.add_cart_text}>ADICIONAR R$ {formatCurrencyValue(product.params.info.value)} AO CARRINHO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}