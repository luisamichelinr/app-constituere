import React, {useEffect, useState} from "react";

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
import CardReuniao from "../components/CardReuniao";


export default function Reunioes({ navigation }) {

    const [filtro, setFiltro] = useState("proximas");

    const [reuniaoSelecionada, setReuniaoSelecionada] = useState(null);

    useEffect(() => {

        const fecharOpcoes = navigation.addListener("blur", () => {
            setReuniaoSelecionada(null);
        });

        return fecharOpcoes;

    }, [navigation]);


    function editarReuniao() {

        navigation.navigate("ReagendarReuniao")
    }


    function cancelarReuniao() {

        console.log(
            "Cancelar reunião:",
            reuniaoSelecionada
        );

        setReuniaoSelecionada(null);

    }


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
                        Reuniões
                    </Text>

                    <Text style={styles.subtitulo}>
                        Acompanhe e gerencie suas reuniões
                    </Text>

                </View>


                <Botao
                    texto={"Agendar reunião"}
                    acao={() =>
                        navigation.navigate("AgendarReuniao")
                    }
                />


                <View style={styles.abas}>

                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() =>
                            setFiltro("proximas")
                        }
                    >

                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "proximas" &&
                                styles.abaAtiva
                            ]}
                        >
                            Próximas
                        </Text>


                        {filtro === "proximas" && (

                            <View style={styles.linhaAtiva} />

                        )}

                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() =>
                            setFiltro("aConfirmar")
                        }
                    >

                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "aConfirmar" &&
                                styles.abaAtiva
                            ]}
                        >
                            A Confirmar
                        </Text>


                        {filtro === "aConfirmar" && (

                            <View style={styles.linhaAtiva} />

                        )}

                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() =>
                            setFiltro("realizadas")
                        }
                    >

                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "realizadas" &&
                                styles.abaAtiva
                            ]}
                        >
                            Realizadas
                        </Text>


                        {filtro === "realizadas" && (

                            <View style={styles.linhaAtiva} />

                        )}

                    </TouchableOpacity>

                </View>


                {filtro === "proximas" && (

                    <View style={styles.listaReunioes}>

                        <CardReuniao
                            titulo={"Andamento do Processo"}
                            dia={"03/08/2026 (Segunda-feira)"}
                            horario={"14:30"}
                            local={"Escritório"}
                            status={"Confirmada"}
                            acao={() =>
                                setReuniaoSelecionada({
                                    id: 1,
                                    titulo: "Andamento do Processo",
                                    dia: "03/08/2026 (Segunda-feira)",
                                    horario: "14:30",
                                    local: "Escritório",
                                    status: "Confirmada"
                                })
                            }
                        />

                    </View>

                )}


                {filtro === "aConfirmar" && (

                    <View style={styles.listaReunioes}>

                        <CardReuniao
                            titulo={"Reunião com advogado"}
                            dia={"03/08/2026 (Segunda-feira)"}
                            horario={"14:30"}
                            local={"Escritório"}
                            status={"A confirmar"}
                            acao={() =>
                                setReuniaoSelecionada({
                                    id: 2,
                                    titulo: "Reunião com advogado",
                                    dia: "03/08/2026 (Segunda-feira)",
                                    horario: "14:30",
                                    local: "Escritório",
                                    status: "A confirmar"
                                })
                            }
                        />

                    </View>

                )}


                {filtro === "realizadas" && (

                    <View style={styles.listaReunioes}>

                        <CardReuniao
                            titulo={"Consulta Inicial"}
                            dia={"03/08/2026 (Segunda-feira)"}
                            horario={"14:30"}
                            local={"Escritório"}
                            status={"Realizada"}
                        />

                    </View>

                )}

            </ScrollView>



            {reuniaoSelecionada !== null && (

                <View style={styles.overlay}>

                    <TouchableOpacity
                        style={styles.fundoOverlay}
                        activeOpacity={1}
                        onPress={() =>
                            setReuniaoSelecionada(null)
                        }
                    />


                    <View style={styles.opcoesReuniao}>



                        <View style={styles.topoOpcoes}>

                            <View>

                                <Text style={styles.tituloOpcoes}>
                                    Gerenciar reunião
                                </Text>

                                <Text style={styles.subtituloOpcoes}>
                                    {reuniaoSelecionada.titulo}
                                </Text>

                            </View>


                            <TouchableOpacity
                                style={styles.fechar}
                                onPress={() =>
                                    setReuniaoSelecionada(null)
                                }
                            >

                                <Ionicons
                                    name="close-outline"
                                    size={25}
                                    color="#444444"
                                />

                            </TouchableOpacity>

                        </View>


                        <View style={styles.resumoReuniao}>

                            <View style={styles.infoResumo}>

                                <Ionicons
                                    name="calendar-outline"
                                    size={19}
                                    color="#0047AB"
                                />

                                <Text style={styles.textoResumo}>
                                    {reuniaoSelecionada.dia}
                                </Text>

                            </View>


                            <View style={styles.infoResumo}>

                                <Ionicons
                                    name="time-outline"
                                    size={19}
                                    color="#0047AB"
                                />

                                <Text style={styles.textoResumo}>
                                    {reuniaoSelecionada.horario}
                                </Text>

                            </View>

                        </View>


                        <TouchableOpacity
                            style={styles.opcaoEditar}
                            onPress={editarReuniao}
                        >

                            <View style={styles.iconeEditar}>

                                <Ionicons
                                    name="create-outline"
                                    size={22}
                                    color="#0047AB"
                                />

                            </View>


                            <View style={styles.textosOpcao}>

                                <Text style={styles.tituloEditar}>
                                    Editar reunião
                                </Text>

                                <Text style={styles.descricaoOpcao}>
                                    Altere a data, horário ou informações
                                </Text>

                            </View>


                            <Ionicons
                                name="chevron-forward-outline"
                                size={20}
                                color="#999999"
                            />

                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.opcaoCancelar}
                            onPress={cancelarReuniao}
                        >

                            <View style={styles.iconeCancelar}>

                                <Ionicons
                                    name="close-circle-outline"
                                    size={22}
                                    color="#FF4D55"
                                />

                            </View>


                            <View style={styles.textosOpcao}>

                                <Text style={styles.tituloCancelar}>
                                    Cancelar reunião
                                </Text>

                                <Text style={styles.descricaoOpcao}>
                                    Cancele este agendamento
                                </Text>

                            </View>

                        </TouchableOpacity>

                    </View>

                </View>

            )}

        </View>
    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    scroll: {
        flex: 1,
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



    listaReunioes: {
        width: "100%",
        gap: 12,
    },


    overlay: {
        position: "absolute",

        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        justifyContent: "flex-end",

        zIndex: 100,
        elevation: 100,

    },


    fundoOverlay: {
        position: "absolute",

        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        backgroundColor: "rgba(0, 0, 0, 0.35)",
    },


    opcoesReuniao: {
        width: "100%",

        backgroundColor: "#FFFFFF",

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        paddingHorizontal: 25,
        paddingTop: 12,
        paddingBottom: 120,
    },



    topoOpcoes: {
        width: "100%",

        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",

        marginBottom: 18,
    },

    tituloOpcoes: {
        fontSize: 20,
        fontFamily: "Inter_800ExtraBold",
        color: "#222222",
    },

    subtituloOpcoes: {
        fontSize: 13,
        fontFamily: "Inter_400Regular",
        color: "#666666",

        marginTop: 3,
    },

    fechar: {
        width: 35,
        height: 35,

        borderRadius: 18,

        backgroundColor: "#F2F2F2",

        alignItems: "center",
        justifyContent: "center",
    },



    resumoReuniao: {
        width: "100%",

        backgroundColor: "#EEF5FF",

        borderRadius: 8,

        padding: 14,

        marginBottom: 18,

        gap: 8,
    },

    infoResumo: {
        flexDirection: "row",
        alignItems: "center",

        gap: 8,
    },

    textoResumo: {
        fontSize: 13,
        fontFamily: "Inter_400Regular",
        color: "#444444",
    },


    opcaoEditar: {
        width: "100%",

        minHeight: 65,

        flexDirection: "row",
        alignItems: "center",

        paddingVertical: 10,

        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
    },

    iconeEditar: {
        width: 42,
        height: 42,

        borderRadius: 8,

        backgroundColor: "#E5F0FF",

        alignItems: "center",
        justifyContent: "center",

        marginRight: 12,
    },

    tituloEditar: {
        fontSize: 14,
        fontFamily: "Inter_700Bold",
        color: "#0047AB",
    },


    opcaoCancelar: {
        width: "100%",

        minHeight: 65,

        flexDirection: "row",
        alignItems: "center",

        paddingVertical: 10,
    },

    iconeCancelar: {
        width: 42,
        height: 42,

        borderRadius: 8,

        backgroundColor: "#FFE9EA",

        alignItems: "center",
        justifyContent: "center",

        marginRight: 12,
    },

    tituloCancelar: {
        fontSize: 14,
        fontFamily: "Inter_700Bold",
        color: "#FF4D55",
    },


    textosOpcao: {
        flex: 1,
    },

    descricaoOpcao: {
        fontSize: 12,
        fontFamily: "Inter_400Regular",
        color: "#777777",

        marginTop: 3,
    },

});