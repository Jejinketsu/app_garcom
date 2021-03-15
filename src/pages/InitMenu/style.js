import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    BGconfig: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        justifyContent: "center",
        alignItems: "center"
    },
    logo_text: {
        textAlign: "center",
        fontSize: 80,
        color: "#FFF",
        fontWeight: "bold",
        margin: 10
    },
    button: {
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#591902",
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowOffset: {
            width: 50,
            height: 50
        },
        padding: 10,
        margin: 10,
        height: 60,
        width: 250,
    },
    text_button: {
        textAlign: "center",
        color: "#BF815E",
        fontWeight: "bold",
        fontSize: 35,
    },
    hint_text: {
        color: "#fff", 
        fontWeight: "bold",
        fontSize: 15
    }
})