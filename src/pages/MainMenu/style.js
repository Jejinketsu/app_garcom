import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    section_list: {
        flex: 1,
        backgroundColor: "#591902",
    },
    title_section: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: "#BF815E",
        textAlign: "center",
    },
    header: {
        minHeight: 50,
        maxHeight: "10%",
        width: "100%",
        flex: 1,
        flexDirection: "row",
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "space-between",

        backgroundColor: "#fff",

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,

        elevation: 50,
    },
    header_text: {
        fontSize: 23,
        fontWeight: "bold",
    },
    section_products: {
        flex: 3,
    },
    product_cards_section:{
        flexDirection: "row",
    },
    cards_bg: {
        flex: 10, 
        height: "100%", 
    },
    button_bg: {
        justifyContent: "center",
        height: "100%",
    },  
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#591902",
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        height: "60%",
        width: 40
    },
    products_list: {
        flex: 1,
    },
    card_container: {
        width: 200,
        height: 200,
        margin: 10,

        borderColor: "#BF815E",
        borderWidth: 3,
        borderRadius: 15,
    },
    product_image: {
        height: 90,
        width: "100%",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    product_name: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 8,
        marginTop: 8,
    },
    product_value: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#BF815E",
        marginLeft: 8,
        marginTop: 3
    },
    see_more_button: {
        alignSelf: "flex-end",
        margin: 8,
        backgroundColor: "#591902",
        borderRadius: 15,
        padding: 6,

        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        
        shadowOpacity: 0.25,
        shadowRadius: 4.65,

        elevation: 20
    },
    see_more_text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#BF815E",
    }
})