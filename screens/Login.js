import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image, ImageBackground
} from "react-native";
import Botao from "../components/Botao";


export default function Login({ navigation }) {

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [senha, setSenha] = useState("");

    const entrar = () => {
        console.log("CPF/CNPJ:", cpfCnpj);
        console.log("Senha:", senha);

        navigation.navigate("Dashboard");

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/logoMaior.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.titulo}>Entre na sua conta!</Text>
                <Text style={styles.texto}>Consulte seu login e senha com seu advogado</Text>
            </View>

            <View style={styles.main}>

                <Text style={styles.label}>
                    CPF/CNPJ
                </Text>

                <TextInput
                    style={styles.input}
                    value={cpfCnpj}
                    onChangeText={setCpfCnpj}
                    keyboardType="numeric"
                    autoCapitalize="none"
                />

                <Text style={styles.labelSenha}>
                    Senha
                </Text>

                <TextInput
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />

                <View style={styles.areaBotao}>
                    <Botao
                        texto="Entrar"
                        acao={entrar}
                    />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        flex: 2,
        backgroundColor: "#1E1E1E",
        paddingHorizontal: 40,
        paddingVertical: 70,
        flexDirection: "column",


    },

    main: {
        flex: 3,
        padding: 70,
    },

    logo: {
        width: 200,
        height: 75,
    },

    titulo: {
        paddingLeft: 10,
        color: "#FFFFFF",
        fontSize: 45,
        fontFamily: "Inter_700Bold",
        width: "80%",
        paddingTop: 80,
        marginBottom: 10,
    },

    texto: {
      paddingLeft: 10,
      color: "#FFFFFF",
      fontFamily: "Inter_400Regular_Italic",
        fontSize: 18,
    },

    label: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: "Inter_700Bold",
    },

    labelSenha: {
        fontSize: 17,
        fontFamily: "Inter_700Bold",
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 10,
    },

    input: {
        width: "100%",
        height: 44,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: "#000000",
        borderColor: "#0047ab",
        borderWidth: 1,
    },

    areaBotao: {
        alignItems: "center",
        marginTop: 45,
    },

});