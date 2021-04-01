import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-between",
    },
    product_image: {
        backgroundColor: "#000",
        height: 160,
        width: "100%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    product_name: {
        marginTop: 5,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    product_value: {
        fontSize: 21,
        textAlign: "center",
        fontWeight: "bold",
        color: "#BF815E",
        marginTop: 3,
        marginBottom: 10, 
    },
    description_box: {
        height: "35%",
        justifyContent: "space-between",
    },
    text_box: {
        width: "80%",
        alignSelf: "center",
    },
    product_description: {
        fontFamily: "Roboto",
        fontSize: 21,
    },
    line: {
        height: 2,
        width: "80%",
        alignSelf: "center",
        backgroundColor: "#BF815E",
    },
    control_box: {
        flexDirection: "row",
        width: "80%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        margin: 10        
    },
    minus_buttom: {
        width: 50,
        borderWidth: 2,
        backgroundColor: "#591902",
        borderColor: "#BF815E",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: "center",
    },
    minus_buttom_text: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#BF815E",
    },
    cont_background: {
        width: 55,
        borderColor: "#BF815E",
        borderWidth: 2,
        justifyContent: "center",
    },
    cont_text: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    plus_buttom: {
        width: 50,
        borderWidth: 2,
        backgroundColor: "#591902",
        borderColor: "#BF815E",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
    },
    plus_buttom_text: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#BF815E",
    },
    add_cart_button: {
        borderWidth: 3,
        borderColor: "#BF815E",
        borderRadius: 10,
        height: 55,
        width: "50%",
        justifyContent: "center"
    },
    add_cart_text: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#BF815E",
    }
})