import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    resume_box: {
        flex: 3,
    },
    total_box: {
        flex: 1,
        borderTopColor: "#BF815E",
        borderTopWidth: 3,
        alignItems: "center"
    },
    top_text:{
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        margin: 10
    },
    line: {
        backgroundColor: "#BF815E",
        height: 3,
        width: "90%",
        alignSelf: "center",
    },
    cart_list: {
        flex: 1,
        width: "90%",
        alignSelf: "center"
    },
    item_box: {
        flex: 1,
        marginBottom: 20,
    },
    value_text:{
        fontSize: 22,
        color: "#BF815E",
        fontWeight: "bold",
    },
    name_text: {
        fontSize: 22,
        fontWeight: "bold",
    },
    composition_box: {
        flex: 2.5,
    },
    composition_text: {
        fontSize: 18,
        marginBottom: 10
    },
    total_text: {
        fontSize: 15
    },
    total_value_text: {
        fontSize: 15,
        color: "#BF815E",
        fontWeight: "bold",
        margin: 2
    },
    control_box: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    final_total_text:{
        fontSize: 25,
    },
    final_value_text: {
        fontSize: 30,
        color: "#000"
    },
    pay_buttom: {
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#BF815E",
        borderRadius: 10,
        height: "40%",
        maxHeight: 70,
        width: "30%",
        maxWidth: 180,
    },
    pay_buttom_text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#BF815E"
    },
});