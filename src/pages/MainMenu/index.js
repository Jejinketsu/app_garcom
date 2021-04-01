import React from "react";
import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./style";

export default function MainMenu(props){

    const [products, setProducts] = useState([
        {
            id: "1",
            img_url: "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-estrogonofe-de-carne.jpg",
            name: "Estrogonorfe de Carne",
            value: 18.9,
            description: "ad astra abyssosque Mussum ipsum, calcildes vidis litrus abertus. Quem num gosta di mim que vá caçá sua turmis! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit."
        },
        {
            id: "2",
            img_url: "https://i0.wp.com/viciados.net/wp-content/uploads/2020/10/bc2.jpg?fit=1201%2C900&ssl=1",
            name: "Comida de Emergência",
            value: 4.2,
            description: "ad astra abyssosque Mussum ipsum, calcildes vidis litrus abertus. Quem num gosta di mim que vá caçá sua turmis! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit."
        },
        {
            id: "3",
            img_url: "https://www.cozinhatecnica.com/wp-content/uploads/2020/02/cuscuz-de-milho-scaled-e1582211347651.jpg",
            name: "Cuscuz",
            value: 4.2,
            description: "ad astra abyssosque"
        },
    ]);
    
    function openSideMenu(sideType) {
        props.navigation.setParams(sideType);

        props.navigation.openDrawer();
    }

    return(
        <View style={styles.container}>
            <View style={styles.section_list}>
                <Text style={styles.title_section}>Selecione uma categoria</Text>
            </View>
            <View style={styles.section_products}>
                <View style={styles.header}>
                    <Text style={styles.header_text}>Almoço e Jantar</Text>
                    <Text style={styles.header_text}>Total: R$ 0,00</Text>
                </View>
                <View style={styles.product_cards_section}>
                    <View style={styles.cards_bg}>
                        <FlatList
                            style={styles.products_list}
                            data={products}
                            keyExtractor={product => product.id}
                            showsHorizontalScrollIndicator={false}
                            numColumns={3}
                            renderItem={({ item: product }) => (
                                <View style={styles.card_container}>
                                    <Image key={product.id} style={styles.product_image} source={{ uri: product.img_url}} />
                                    <Text style={styles.product_name}>{product.name}</Text>
                                    <Text style={styles.product_value}>R$ {(Math.round((product.value + Number.EPSILON) * 100)/ 100).toFixed(2)}</Text>
                                    <TouchableOpacity
                                        style={styles.see_more_button}
                                        onPress={() => openSideMenu({
                                            side_menu: "detail",
                                            info: product,
                                        })}
                                    >
                                        <Text style={styles.see_more_text}>Veja Mais</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.button_bg}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => openSideMenu({
                                side_menu: "cart",
                            })}
                        >
                            <Icon name="shopping-cart" size={30} color="#BF815E" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )

}