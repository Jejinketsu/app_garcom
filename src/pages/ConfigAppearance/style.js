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
    info_box: {
        height: "80%",
        width: "80%",
        backgroundColor: 'rgba(89, 25, 2, 0.8)',
        alignItems: "center", 
        justifyContent: "space-between",
        borderRadius: 15,
    },
    title_text: {
        marginVertical: 10,
        fontSize: 30,
        fontWeight: "bold",
        color: "#BF815E",
    },
    input_grid:{
        width: "90%",
        flexDirection: "row",
    },
    input_label: {
        color: "#BF815E",
        fontSize: 18,
        fontWeight: "bold",
    },
    input_area: {
        width: "100%",
        borderBottomWidth: 2,
        borderBottomColor: "#BF815E",
        marginBottom: 20,
        fontWeight: "bold",
        fontSize: 18,
        color: "rgba(190, 190, 190, 1)"
    },

    button: {
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#BF815E",
        padding: 10,
        margin: 10,
        height: 70,
        width: 180,
    },
    text_button: {
        textAlign: "center",
        fontSize: 20,
        textTransform: "uppercase",
        color: "#BF815E",
        fontWeight: "bold"
    },
    buttons: {
        flexDirection: "row"   
    }
})