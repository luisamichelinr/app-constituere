import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import Header from "../components/Header";
import CardValores from "../components/CardValores";
import CardPagamento from "../components/CardPagamento";


export default function PagamentoAberto({ navigation }) {

    const [filtro, setFiltro] = useState("aberto");


    const resumoPagamentos = [
        {
            id: 1,
            titulo: "Vencido",
            valor: "700,00"
        },
        {
            id: 2,
            titulo: "Em aberto",
            valor: "1.000,00"
        },
        {
            id: 3,
            titulo: "Pago",
            valor: "200,00"
        }
    ];


    const pagamentos = [
        {
            id: 1,
            titulo: "Honorário",
            valor: "800,00",
            status: "vencido",
            data: "01/09/2026"
        },
        {
            id: 2,
            titulo: "Pró-labore",
            valor: "300,00",
            status: "aberto",
            data: "01/10/2026"
        },
        {
            id: 3,
            titulo: "Entrada",
            valor: "1.000,00",
            status: "pago",
            data: "01/07/2026"
        }
    ];


    const pagamentosFiltrados = pagamentos.filter((item) => {

        if (filtro === "pagos") {
            return item.status === "pago";
        }

        return item.status === filtro;

    });


    return (

        <View style={styles.container}>

            <Header navigation={navigation} />


            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.main}
                showsVerticalScrollIndicator={false}
            >



                <View>

                    <Text style={styles.titulo}>
                        Pagamentos
                    </Text>

                    <Text style={styles.subtitulo}>
                        Acompanhe seus pagamentos e cobranças
                    </Text>

                </View>


                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.resumo}
                    showsHorizontalScrollIndicator={false}
                >

                    {resumoPagamentos.map((item) => (

                        <CardValores
                            key={item.id}
                            valor={item.valor}
                            titulo={item.titulo}
                        />

                    ))}

                </ScrollView>




                <View style={styles.abas}>



                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() =>
                            setFiltro("vencido")
                        }
                    >

                        <Text
                            style={[
                                styles.textoAba,

                                filtro === "vencido" &&
                                styles.abaAtiva
                            ]}
                        >
                            Vencido
                        </Text>


                        {filtro === "vencido" && (

                            <View style={styles.linhaAtiva} />

                        )}

                    </TouchableOpacity>




                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() =>
                            setFiltro("aberto")
                        }
                    >

                        <Text
                            style={[
                                styles.textoAba,

                                filtro === "aberto" &&
                                styles.abaAtiva
                            ]}
                        >
                            A Vencer
                        </Text>


                        {filtro === "aberto" && (

                            <View style={styles.linhaAtiva} />

                        )}

                    </TouchableOpacity>




                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() =>
                            setFiltro("pagos")
                        }
                    >

                        <Text
                            style={[
                                styles.textoAba,

                                filtro === "pagos" &&
                                styles.abaAtiva
                            ]}
                        >
                            Pagos
                        </Text>


                        {filtro === "pagos" && (

                            <View style={styles.linhaAtiva} />

                        )}

                    </TouchableOpacity>

                </View>



                <View style={styles.listaPagamentos}>

                    {pagamentosFiltrados.map((item) => (

                        <CardPagamento
                            key={item.id}
                            titulo={item.titulo}
                            valor={item.valor}
                            status={item.status}
                            data={item.data}
                            navigation={navigation}
                        />

                    ))}

                </View>


            </ScrollView>

        </View>

    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    scroll: {
        flex: 1,
        width: "100%",
    },

    main: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        gap: 20,
        paddingBottom: 120,
    },



    titulo: {
        fontSize: 25,
        fontFamily: "Inter_700Bold",
        color: "#000000",
    },

    subtitulo: {
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        color: "#666666",
        marginTop: 3,
    },



    resumo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },


    coluna: {
        flex: 1,
        alignItems: "center",
    },



    abas: {
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#E2E2E2",
    },

    aba: {
        flex: 1,
        alignItems: "center",
        paddingBottom: 10,
        position: "relative",
    },

    textoAba: {
        fontSize: 15,
        fontFamily: "Inter_700Bold",
        color: "#999999",
    },

    abaAtiva: {
        color: "#0047AB",
    },

    linhaAtiva: {
        position: "absolute",
        bottom: -1,
        width: "70%",
        height: 3,
        backgroundColor: "#0047AB",
        borderRadius: 3,
    },



    listaPagamentos: {
        width: "100%",
        gap: 12,
    },



    cardPagamento: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 18,

        elevation: 3,

        shadowColor: "#000000",
        shadowOpacity: 0.08,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },

        gap: 20,
    },

    topoCard: {
        flexDirection: "row",
        alignItems: "center",
    },

    infoProcesso: {
        flex: 1,
    },

    iconeDocumentoVermelho: {
        width: 42,
        height: 42,
        borderRadius: 8,
        backgroundColor: "#FFE9EA",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    iconeDocumentoAmarelo: {
        width: 42,
        height: 42,
        borderRadius: 8,
        backgroundColor: "#FFF6D9",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    iconeDocumentoVerde: {
        width: 42,
        height: 42,
        borderRadius: 8,
        backgroundColor: "#E9F8E4",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    honorario: {
        fontSize: 18,
        fontFamily: "Inter_700Bold",
        color: "#222222",
    },

    processo: {
        fontSize: 13,
        color: "#999999",
        marginTop: 3,
        fontFamily: "Inter_400Regular_Italic",
    },



    informacoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
    },

    blocoInformacao: {
        flex: 1,
    },

    infoTitulo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
    },

    infoTexto: {
        fontSize: 14,
        color: "#777777",
        fontFamily: "Inter_400Regular",
        marginBottom: 5,
    },

    infoValor: {
        fontSize: 15,
        color: "#333333",
        fontFamily: "Inter_700Bold",
    },

    valorVermelho: {
        color: "#FF4D55",
        fontSize: 15,
        fontFamily: "Inter_700Bold",
    },

    valorAmarelo: {
        color: "#E6B000",
        fontSize: 15,
        fontFamily: "Inter_700Bold",
    },

    valorVerde: {
        color: "#59A83B",
        fontSize: 15,
        fontFamily: "Inter_700Bold",
    },

});