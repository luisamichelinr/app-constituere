import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Botao from "../components/Botao";



export default function Home({ navigation }) {

    return (
        <ImageBackground source={require("../assets/telaInicial.png")} resizeMode="cover" style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={require("../assets/logoMenor.png")} />
                </View>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', '#000000']}
                    style={styles.transicaoGradiente}
                />
                <View style={styles.main}>
                    <Text style={styles.texto}>Vivendo o direito de um novo jeito</Text>
                    <View style={styles.botao}>
                        <Botao texto={"Acesse a plataforma"} acao={() => navigation.navigate("Login")}/>

                    </View>
                </View>


            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flex: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingHorizontal: 40,
        paddingVertical: 60,
    },
    main: {
        flex: 3,
        width: '100%',
        backgroundColor: "black",
        height: "100%",
        paddingHorizontal: 40,
        paddingBottom: 100,
        justifyContent: "space-between",

    },
    texto: {
        color: "white",
        fontWeight: "bold",
        fontSize: 45,
        fontFamily: "Inter_900Black",
        maxWidth: "90%"
    },
    logo: {
        width: 90,
        height: 75,
    },
    botao: {
        alignItems: "flex-end",
    },
    transicaoGradiente: {
        width: '100%',
        height: 200,
    },
});
