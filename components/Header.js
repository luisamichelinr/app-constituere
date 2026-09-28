import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function Header({ navigation }) {

    const lidarComSair = () => {
        if (navigation) {
            navigation.replace("Login");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logoMaior.png')}
                    resizeMode="contain"
                />

                <View style={styles.acoesDireita}>

                    <TouchableOpacity style={styles.botaoNotificacao} activeOpacity={0.7}>
                        <Ionicons
                            name="notifications-outline"
                            size={35}
                            color="white"
                        />
                        <View style={styles.badgeNotificacao} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botaoSair}
                        onPress={lidarComSair}
                    >
                        <Ionicons
                            name="log-out-outline"
                            size={35}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        backgroundColor: "#2A2929",
        width: "100%",
        paddingHorizontal: 30,
        justifyContent: "flex-end",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 15
    },
    logo: {
        width: 160,
        height: 60,
    },
    acoesDireita: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    botaoNotificacao: {
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        position: "relative", // Necessário para posicionar a bolinha vermelha por cima
    },
    badgeNotificacao: {
        position: "absolute",
        top: 4,
        right: 4,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#0047AB",
    },
    botaoSair: {
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
    },
});
