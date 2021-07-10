import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { Botao, Contorno, Logo, ContainerLogo} from './Style';
import logo from './87390.png';

const Login = () => {
    const [email, onChangeEmail] = React.useState("E-mail");
    const [senha, onChangeSenha] = React.useState("Senha");
return (
    <View>
        <ContainerLogo>
        <Logo source={logo} />
        </ContainerLogo>
        <Contorno>
        <TextInput
        onChangeText={onChangeEmail}
        value={email} />
        </Contorno>
        <Contorno>
        <TextInput
        onChangeText={onChangeSenha}
        value={senha} />
        </Contorno>
        
        <TouchableOpacity>
            <Botao>
            <Text>Entrar</Text>
            </Botao>
        </TouchableOpacity>
    </View>

);
}

export default Login;