import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";
import Input from "../components/Input";
import Botao from "../components/Botao";
import Carregando from "../components/Carregando";


export default function EditarPerfil({ navigation, route }) {


    const tipoCliente = route?.params?.tipoCliente || "fisico";

    const juridico = tipoCliente === "juridico";


    const [nome, setNome] = useState(
        "Nome Completo do Cliente"
    );

    const [dataNascimento, setDataNascimento] = useState(
        "01/01/2000"
    );

    const [cpf, setCpf] = useState(
        "000.000.000-00"
    );

    const [sexo, setSexo] = useState(
        "Feminino"
    );

    const [estadoCivil, setEstadoCivil] = useState(
        "Solteiro(a)"
    );

    const [rg, setRg] = useState(
        "00.000.000-0"
    );

    const [orgaoExpedidor, setOrgaoExpedidor] = useState(
        "SSP/SP"
    );

    const [nacionalidade, setNacionalidade] = useState(
        "Brasileira"
    );



    const [carteiraTrabalho, setCarteiraTrabalho] = useState(
        "0000000"
    );

    const [serieCarteira, setSerieCarteira] = useState(
        "0000"
    );

    const [profissao, setProfissao] = useState(
        "Analista"
    );


    const [razaoSocial, setRazaoSocial] = useState(
        "Empresa Ltda"
    );

    const [nomeFantasia, setNomeFantasia] = useState(
        "Empresa Muito Legal"
    );

    const [cnpj, setCnpj] = useState(
        "00.000.000/0001-00"
    );



    const [nomeRepresentante, setNomeRepresentante] = useState(
        "Nome do Representante"
    );

    const [profissaoRepresentante, setProfissaoRepresentante] = useState(
        "Administrador"
    );

    const [cpfRepresentante, setCpfRepresentante] = useState(
        "000.000.000-00"
    );

    const [sexoRepresentante, setSexoRepresentante] = useState(
        "Feminino"
    );

    const [rgRepresentante, setRgRepresentante] = useState(
        "00.000.000-0"
    );

    const [
        orgaoExpedidorRepresentante,
        setOrgaoExpedidorRepresentante
    ] = useState(
        "SSP/SP"
    );

    const [
        nacionalidadeRepresentante,
        setNacionalidadeRepresentante
    ] = useState(
        "Brasileira"
    );

    const [
        estadoCivilRepresentante,
        setEstadoCivilRepresentante
    ] = useState(
        "Solteiro(a)"
    );



    const [cep, setCep] = useState(
        "00000-000"
    );

    const [logradouro, setLogradouro] = useState(
        "Rua Exemplo"
    );

    const [numero, setNumero] = useState(
        "123"
    );

    const [complemento, setComplemento] = useState(
        juridico
            ? "Sala 10"
            : "Apartamento 10"
    );

    const [bairro, setBairro] = useState(
        "Centro"
    );

    const [cidade, setCidade] = useState(
        "Birigui"
    );

    const [estado, setEstado] = useState(
        "São Paulo"
    );


    const [telefone, setTelefone] = useState(
        "(00) 00000-0000"
    );

    const [email, setEmail] = useState(
        "email@email.com"
    );

    const sexos = [
        "Feminino",
        "Masculino",
        "Outro",
        "Prefiro não informar"
    ];


    const estadosCivis = [
        "Solteiro(a)",
        "Casado(a)",
        "Divorciado(a)",
        "Viúvo(a)",
        "União estável"
    ];


    const estados = [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins"
    ];

    function salvarPerfil() {

        if (juridico) {

            console.log({

                tipoCliente,

                razaoSocial,
                nomeFantasia,
                cnpj,

                representante: {
                    nome: nomeRepresentante,
                    profissao: profissaoRepresentante,
                    cpf: cpfRepresentante,
                    sexo: sexoRepresentante,
                    rg: rgRepresentante,
                    orgaoExpedidor: orgaoExpedidorRepresentante,
                    nacionalidade: nacionalidadeRepresentante,
                    estadoCivil: estadoCivilRepresentante
                },

                endereco: {
                    cep,
                    logradouro,
                    numero,
                    complemento,
                    bairro,
                    cidade,
                    estado
                },

                telefone,
                email

            });

        } else {

            console.log({

                tipoCliente,

                nome,
                dataNascimento,
                cpf,
                sexo,
                estadoCivil,
                rg,
                orgaoExpedidor,
                nacionalidade,

                carteiraTrabalho,
                serieCarteira,
                profissao,

                endereco: {
                    cep,
                    logradouro,
                    numero,
                    complemento,
                    bairro,
                    cidade,
                    estado
                },

                telefone,
                email

            });

        }


        navigation.goBack();
    }


    return (

        <View style={styles.container}>

            <Header navigation={navigation} />


            <KeyboardAvoidingView
                style={styles.keyboard}
                behavior={
                    Platform.OS === "ios"
                        ? "padding"
                        : "height"
                }
            >

                <ScrollView
                    contentContainerStyle={styles.main}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >


                    <View>

                        <Text style={styles.titulo}>
                            Editar perfil
                        </Text>

                        <Text style={styles.subtitulo}>

                            {juridico
                                ? "Atualize as informações da empresa"
                                : "Atualize suas informações pessoais"
                            }

                        </Text>

                    </View>

                    {!juridico && (

                        <>


                            <View style={styles.secao}>

                                <View style={styles.tituloSecaoArea}>

                                    <View style={styles.iconeSecao}>

                                        <Ionicons
                                            name="person-outline"
                                            size={21}
                                            color="#0047AB"
                                        />

                                    </View>


                                    <Text style={styles.tituloSecao}>
                                        Dados pessoais
                                    </Text>

                                </View>


                                <View style={styles.card}>

                                    <Input
                                        label={"Nome Completo"}
                                        valor={nome}
                                        setValor={setNome}
                                        letraMaiuscula={"words"}
                                    />


                                    <Input
                                        label={"Data de nascimento"}
                                        valor={dataNascimento}
                                        setValor={setDataNascimento}
                                        tipo={"numeric"}
                                    />


                                    <Input
                                        label={"CPF"}
                                        valor={cpf}
                                        setValor={setCpf}
                                        tipo={"numeric"}
                                    />


                                    <Select
                                        label={"Sexo"}
                                        valor={sexo}
                                        setValor={setSexo}
                                        opcoes={sexos}
                                    />


                                    <Input
                                        label={"RG"}
                                        valor={rg}
                                        setValor={setRg}
                                    />


                                    <Input
                                        label={"Órgão expedidor"}
                                        valor={orgaoExpedidor}
                                        setValor={setOrgaoExpedidor}
                                        letraMaiuscula={"characters"}
                                    />


                                    <Input
                                        label={"Nacionalidade"}
                                        valor={nacionalidade}
                                        setValor={setNacionalidade}
                                        letraMaiuscula={"words"}
                                    />


                                    <Select
                                        label={"Estado civil"}
                                        valor={estadoCivil}
                                        setValor={setEstadoCivil}
                                        opcoes={estadosCivis}
                                    />

                                </View>

                            </View>




                            <View style={styles.secao}>

                                <View style={styles.tituloSecaoArea}>

                                    <View style={styles.iconeSecao}>

                                        <Ionicons
                                            name="briefcase-outline"
                                            size={21}
                                            color="#0047AB"
                                        />

                                    </View>


                                    <Text style={styles.tituloSecao}>
                                        Dados profissionais
                                    </Text>

                                </View>


                                <View style={styles.card}>

                                    <Input
                                        label={"Número da carteira de trabalho"}
                                        valor={carteiraTrabalho}
                                        setValor={setCarteiraTrabalho}
                                        tipo={"numeric"}
                                    />


                                    <Input
                                        label={"Série da carteira de trabalho"}
                                        valor={serieCarteira}
                                        setValor={setSerieCarteira}
                                        tipo={"numeric"}
                                    />


                                    <Input
                                        label={"Profissão"}
                                        valor={profissao}
                                        setValor={setProfissao}
                                        letraMaiuscula={"words"}
                                    />

                                </View>

                            </View>

                        </>

                    )}

                    {juridico && (

                        <>


                            <View style={styles.secao}>

                                <View style={styles.tituloSecaoArea}>

                                    <View style={styles.iconeSecao}>

                                        <Ionicons
                                            name="business-outline"
                                            size={21}
                                            color="#0047AB"
                                        />

                                    </View>


                                    <Text style={styles.tituloSecao}>
                                        Dados da empresa
                                    </Text>

                                </View>


                                <View style={styles.card}>

                                    <Input
                                        label={"Razão social"}
                                        valor={razaoSocial}
                                        setValor={setRazaoSocial}
                                        letraMaiuscula={"words"}
                                    />


                                    <Input
                                        label={"Nome fantasia"}
                                        valor={nomeFantasia}
                                        setValor={setNomeFantasia}
                                        letraMaiuscula={"words"}
                                    />


                                    <Input
                                        label={"CNPJ"}
                                        valor={cnpj}
                                        setValor={setCnpj}
                                        tipo={"numeric"}
                                    />

                                </View>

                            </View>



                            <View style={styles.secao}>

                                <View style={styles.tituloSecaoArea}>

                                    <View style={styles.iconeSecao}>

                                        <Ionicons
                                            name="person-outline"
                                            size={21}
                                            color="#0047AB"
                                        />

                                    </View>


                                    <Text style={styles.tituloSecao}>
                                        Representante legal
                                    </Text>

                                </View>


                                <View style={styles.card}>

                                    <Input
                                        label={"Nome completo"}
                                        valor={nomeRepresentante}
                                        setValor={setNomeRepresentante}
                                        letraMaiuscula={"words"}
                                    />


                                    <Input
                                        label={"Profissão"}
                                        valor={profissaoRepresentante}
                                        setValor={setProfissaoRepresentante}
                                        letraMaiuscula={"words"}
                                    />


                                    <Input
                                        label={"CPF"}
                                        valor={cpfRepresentante}
                                        setValor={setCpfRepresentante}
                                        tipo={"numeric"}
                                    />


                                    <Select
                                        label={"Sexo"}
                                        valor={sexoRepresentante}
                                        setValor={setSexoRepresentante}
                                        opcoes={sexos}
                                    />


                                    <Input
                                        label={"RG"}
                                        valor={rgRepresentante}
                                        setValor={setRgRepresentante}
                                    />


                                    <Input
                                        label={"Órgão expedidor"}
                                        valor={orgaoExpedidorRepresentante}
                                        setValor={setOrgaoExpedidorRepresentante}
                                        letraMaiuscula={"characters"}
                                    />


                                    <Input
                                        label={"Nacionalidade"}
                                        valor={nacionalidadeRepresentante}
                                        setValor={setNacionalidadeRepresentante}
                                        letraMaiuscula={"words"}
                                    />


                                    <Select
                                        label={"Estado civil"}
                                        valor={estadoCivilRepresentante}
                                        setValor={setEstadoCivilRepresentante}
                                        opcoes={estadosCivis}
                                    />

                                </View>

                            </View>

                        </>

                    )}


                    <View style={styles.secao}>

                        <View style={styles.tituloSecaoArea}>

                            <View style={styles.iconeSecao}>

                                <Ionicons
                                    name="location-outline"
                                    size={22}
                                    color="#0047AB"
                                />

                            </View>


                            <Text style={styles.tituloSecao}>
                                Endereço
                            </Text>

                        </View>


                        <View style={styles.card}>

                            <Input
                                label={"CEP"}
                                valor={cep}
                                setValor={setCep}
                                tipo={"numeric"}
                            />


                            <Input
                                label={"Logradouro"}
                                valor={logradouro}
                                setValor={setLogradouro}
                                letraMaiuscula={"words"}
                            />


                            <Input
                                label={"Número"}
                                valor={numero}
                                setValor={setNumero}
                                tipo={"numeric"}
                            />


                            <Input
                                label={"Complemento"}
                                valor={complemento}
                                setValor={setComplemento}
                                letraMaiuscula={"sentences"}
                            />


                            <Input
                                label={"Bairro"}
                                valor={bairro}
                                setValor={setBairro}
                                letraMaiuscula={"words"}
                            />


                            <Input
                                label={"Cidade"}
                                valor={cidade}
                                setValor={setCidade}
                                letraMaiuscula={"words"}
                            />


                            <Select
                                label={"Estado"}
                                valor={estado}
                                setValor={setEstado}
                                opcoes={estados}
                                grande={true}
                            />

                        </View>

                    </View>



                    <View style={styles.secao}>

                        <View style={styles.tituloSecaoArea}>

                            <View style={styles.iconeSecao}>

                                <Ionicons
                                    name="call-outline"
                                    size={21}
                                    color="#0047AB"
                                />

                            </View>


                            <Text style={styles.tituloSecao}>
                                Contato
                            </Text>

                        </View>


                        <View style={styles.card}>

                            <Input
                                label={"Telefone"}
                                valor={telefone}
                                setValor={setTelefone}
                                tipo={"phone-pad"}
                            />


                            <Input
                                label={"Email"}
                                valor={email}
                                setValor={setEmail}
                                tipo={"email-address"}
                            />

                        </View>

                    </View>



                    <View style={styles.botoes}>

                        <Botao
                            texto={"Salvar alterações"}
                            acao={salvarPerfil}
                        />


                        <TouchableOpacity
                            style={styles.cancelar}
                            onPress={() =>
                                navigation.goBack()
                            }
                        >

                            <Text style={styles.textoCancelar}>
                                Cancelar
                            </Text>

                        </TouchableOpacity>

                    </View>


                </ScrollView>

            </KeyboardAvoidingView>

        </View>

    );

}



function Select({
                    label,
                    valor,
                    setValor,
                    opcoes,
                    grande = false
                }) {

    const [aberto, setAberto] = useState(false);


    function selecionar(opcao) {

        setValor(opcao);

        setAberto(false);

    }


    return (

        <View style={styles.selectContainer}>


            <Text style={styles.labelSelect}>
                {label}
            </Text>


            <TouchableOpacity
                style={[
                    styles.select,

                    aberto &&
                    styles.selectAberto
                ]}
                onPress={() =>
                    setAberto(!aberto)
                }
            >

                <Text
                    style={[
                        styles.valorSelect,

                        valor === "" &&
                        styles.placeholderSelect
                    ]}
                >

                    {valor === ""
                        ? "Selecione"
                        : valor
                    }

                </Text>


                <Ionicons
                    name={
                        aberto
                            ? "chevron-up-outline"
                            : "chevron-down-outline"
                    }
                    size={20}
                    color="#0047AB"
                />

            </TouchableOpacity>


            {aberto && (

                <View
                    style={[
                        styles.opcoesSelect,

                        grande &&
                        styles.opcoesSelectGrande
                    ]}
                >

                    <ScrollView
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={true}
                        keyboardShouldPersistTaps="handled"
                    >

                        {opcoes.map((opcao) => (

                            <TouchableOpacity
                                key={opcao}
                                style={[
                                    styles.opcaoSelect,

                                    valor === opcao &&
                                    styles.opcaoSelecionada
                                ]}
                                onPress={() =>
                                    selecionar(opcao)
                                }
                            >

                                <Text
                                    style={[
                                        styles.textoOpcao,

                                        valor === opcao &&
                                        styles.textoOpcaoSelecionada
                                    ]}
                                >
                                    {opcao}
                                </Text>


                                {valor === opcao && (

                                    <Ionicons
                                        name="checkmark-outline"
                                        size={19}
                                        color="#0047AB"
                                    />

                                )}

                            </TouchableOpacity>

                        ))}

                    </ScrollView>

                </View>

            )}


        </View>

    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },


    keyboard: {
        flex: 1,
    },


    main: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        paddingBottom: 120,
        gap: 20,
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



    secao: {
        width: "100%",
        gap: 10,
    },


    tituloSecaoArea: {
        flexDirection: "row",
        alignItems: "center",

        gap: 8,
    },


    iconeSecao: {
        width: 34,
        height: 34,

        borderRadius: 8,

        backgroundColor: "#E5F0FF",

        alignItems: "center",
        justifyContent: "center",
    },


    tituloSecao: {
        fontSize: 18,
        fontFamily: "Inter_800ExtraBold",
        color: "#222222",
    },


    card: {
        width: "100%",

        backgroundColor: "#FFFFFF",

        borderRadius: 10,

        padding: 16,

        gap: 18,

        elevation: 2,

        shadowColor: "#000000",
        shadowOpacity: 0.06,
        shadowRadius: 4,

        shadowOffset: {
            width: 0,
            height: 2,
        },
    },



    selectContainer: {
        width: "100%",
    },


    labelSelect: {
        fontSize: 14,

        marginBottom: 10,

        fontFamily: "Inter_700Bold",

        color: "#000000",
    },


    select: {
        width: "100%",
        height: 44,

        backgroundColor: "#FFFFFF",

        borderRadius: 8,

        paddingHorizontal: 12,

        borderWidth: 1,
        borderColor: "#0047AB",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },


    selectAberto: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },


    valorSelect: {
        flex: 1,

        fontSize: 14,
        fontFamily: "Inter_400Regular",

        color: "#000000",
    },


    placeholderSelect: {
        color: "#999999",
    },


    opcoesSelect: {
        width: "100%",

        backgroundColor: "#FFFFFF",

        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: "#0047AB",

        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,

        overflow: "hidden",
    },


    opcoesSelectGrande: {
        maxHeight: 220,
    },


    opcaoSelect: {
        minHeight: 44,

        paddingHorizontal: 12,
        paddingVertical: 10,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
    },


    opcaoSelecionada: {
        backgroundColor: "#EEF5FF",
    },


    textoOpcao: {
        flex: 1,

        fontSize: 14,
        fontFamily: "Inter_400Regular",

        color: "#333333",
    },


    textoOpcaoSelecionada: {
        fontFamily: "Inter_700Bold",
        color: "#0047AB",
    },


    botoes: {
        width: "100%",
        gap: 8,
    },


    cancelar: {
        width: "100%",
        height: 48,

        alignItems: "center",
        justifyContent: "center",
    },


    textoCancelar: {
        fontSize: 14,
        fontFamily: "Inter_700Bold",
        color: "#0047AB",
    },

});