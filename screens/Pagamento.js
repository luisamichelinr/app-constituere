import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import Botao from "../components/Botao";
import CardValores from "../components/CardValores";

export default function PagamentoAberto({ navigation }) {

    const [filtro, setFiltro] = useState("aberto");

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


                <ScrollView horizontal={true} contentContainerStyle={styles.resumo}>
                     <CardValores valor={"1.000,00"} titulo={"Em aberto"} />
                        <CardValores valor={"1.000"} titulo={"Em aberto"} />
                        <CardValores valor={"1.000"} titulo={"Em aberto"} />


                </ScrollView>


                {/* ABAS */}
                <View style={styles.abas}>

                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() => setFiltro("aberto")}
                    >
                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "aberto" && styles.abaAtiva
                            ]}
                        >
                            Em Aberto
                        </Text>

                        {filtro === "aberto" && (
                            <View style={styles.linhaAtiva} />
                        )}
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() => setFiltro("vencer")}
                    >
                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "vencer" && styles.abaAtiva
                            ]}
                        >
                            A Vencer
                        </Text>

                        {filtro === "vencer" && (
                            <View style={styles.linhaAtiva} />
                        )}
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() => setFiltro("pagos")}
                    >
                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "pagos" && styles.abaAtiva
                            ]}
                        >
                            Pagos
                        </Text>

                        {filtro === "pagos" && (
                            <View style={styles.linhaAtiva} />
                        )}
                    </TouchableOpacity>

                </View>


                {/* EM ABERTO */}
                {filtro === "aberto" && (
                    <View style={styles.cardPagamento}>

                        <View style={styles.topoCard}>

                            <View style={styles.iconeDocumentoVermelho}>
                                <Ionicons
                                    name="document-outline"
                                    size={28}
                                    color="#FF4D55"
                                />
                            </View>

                            <View style={styles.infoProcesso}>
                                <Text style={styles.honorario}>
                                    Honorário
                                </Text>

                                <Text style={styles.processo}>
                                    Processo Nº 0000001
                                </Text>
                            </View>

                        </View>


                        <View style={styles.informacoes}>

                            <View style={styles.blocoInformacao}>

                                <View style={styles.infoTitulo}>
                                    <Ionicons
                                        name="calendar-outline"
                                        size={19}
                                        color="#0047AB"
                                    />

                                    <Text style={styles.infoTexto}>
                                        Vencimento
                                    </Text>
                                </View>

                                <Text style={styles.infoValor}>
                                    02/08/2026
                                </Text>
                            </View>


                            <View style={styles.blocoInformacao}>
                                <Text style={styles.infoTexto}>
                                    Valor
                                </Text>

                                <Text style={styles.valorVermelho}>
                                    R$ 1.000,00
                                </Text>
                            </View>

                        </View>

                        <Botao texto={"Pagar agora"} />

                    </View>
                )}


                {/* A VENCER */}
                {filtro === "vencer" && (
                    <View style={styles.cardPagamento}>

                        <View style={styles.topoCard}>

                            <View style={styles.iconeDocumentoAmarelo}>
                                <Ionicons
                                    name="document-outline"
                                    size={28}
                                    color="#E6B000"
                                />
                            </View>

                            <View style={styles.infoProcesso}>
                                <Text style={styles.honorario}>
                                    Honorário
                                </Text>

                                <Text style={styles.processo}>
                                    Processo Nº 0000001
                                </Text>
                            </View>

                        </View>


                        <View style={styles.informacoes}>

                            <View style={styles.blocoInformacao}>

                                <View style={styles.infoTitulo}>
                                    <Ionicons
                                        name="calendar-outline"
                                        size={19}
                                        color="#0047AB"
                                    />

                                    <Text style={styles.infoTexto}>
                                        Vencimento
                                    </Text>
                                </View>

                                <Text style={styles.infoValor}>
                                    02/08/2026
                                </Text>
                            </View>


                            <View style={styles.blocoInformacao}>
                                <Text style={styles.infoTexto}>
                                    Valor
                                </Text>

                                <Text style={styles.valorAmarelo}>
                                    R$ 1.000,00
                                </Text>
                            </View>

                        </View>

                        <Botao texto={"Pagar agora"} />

                    </View>
                )}


                {/* PAGOS */}
                {filtro === "pagos" && (
                    <View style={styles.cardPagamento}>

                        <View style={styles.topoCard}>

                            <View style={styles.iconeDocumentoVerde}>
                                <Ionicons
                                    name="document-outline"
                                    size={28}
                                    color="#59A83B"
                                />
                            </View>

                            <View style={styles.infoProcesso}>
                                <Text style={styles.honorario}>
                                    Honorário
                                </Text>

                                <Text style={styles.processo}>
                                    Processo Nº 0000001
                                </Text>
                            </View>

                        </View>


                        <View style={styles.informacoes}>

                            <View style={styles.blocoInformacao}>
                                <Text style={styles.infoTexto}>
                                    Forma de pagamento
                                </Text>

                                <Text style={styles.infoValor}>
                                    Pix
                                </Text>
                            </View>


                            <View style={styles.blocoInformacao}>
                                <Text style={styles.infoTexto}>
                                    Valor
                                </Text>

                                <Text style={styles.valorVerde}>
                                    R$ 1.000,00
                                </Text>
                            </View>

                        </View>

                    </View>
                )}

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
        width: '100%',
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


    /* RESUMO */

    resumo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },


    coluna: {
        flex: 1,
        alignItems: "center",
    },

    /* ABAS */

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


    /* CARD */

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


    /* INFORMAÇÕES */

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