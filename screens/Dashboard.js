import {StyleSheet, Text, View} from "react-native";
import Header from "../components/Header";
import CardDashboard from "../components/CardDashboard";

export default function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.main}>
                <View style={styles.saudacao}>
                    <Text style={styles.ola}>Olá, </Text>
                    <Text style={styles.nome}>Nome do Sobrenome</Text>
                </View>
                <View style={styles.resumo}>
                    <Text style={styles.titulo}>Resumo</Text>
                    <View style={styles.cards}>
                        <CardDashboard
                            texto={"Processos Ativos"}
                            numero={"3"}
                            icone={require("../assets/processosAtivos.png")}
                        />
                        <CardDashboard
                            texto={"Próximas Reuniões"}
                            numero={"1"}
                            icone={require("../assets/proximasReunioes.png")}
                        />
                        <CardDashboard
                            texto={"Processos"}
                            numero={"12"}
                            icone={require("../assets/processos.png")}
                        />
                        <CardDashboard
                            texto={"Avisos"}
                            numero={"20"}
                            icone={require("../assets/notificacoesAmarelo.png")}
                        />

                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        paddingVertical: 50,
        paddingHorizontal: 30,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 30,
    },
    saudacao: {
        flexDirection: "row",
    },

    ola: {
        fontSize: 25,
        fontFamily: "Inter_700Bold"
    },

    nome: {
        fontSize: 25,
        fontFamily: "Inter_700Bold",
        color: "#0047AB"
    },
    resumo: {
        width: "100%",
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        boxShadow: '5px 10px 2px 0px rgba(0, 0, 0, 0.08)',
        flexDirection: 'column',
        gap: 16
    },
    titulo: {
        fontSize: 20,
        fontFamily: "Inter_800ExtraBold",
    },
    cards: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    }
})