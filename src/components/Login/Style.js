import styled from "styled-components";

export const Botao = styled.View`
background-color: rgb(66,138,245);
padding: 10px;
margin-left: 60px;
margin-right: 60px;
align-items: center;
border-radius: 6px;
`;

export const Contorno = styled.View`
border-color: black;
border: 1px;
margin-top: 7px;
margin-left: 38px;
margin-right: 38px;
margin-bottom: 7px;
border-radius: 10px;
`;

export const ContainerLogo = styled.View`
height: 200px;
width: 200px;
margin-top: 80px;
margin-left: 78px;
margin-right: 78px;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain'
})`
height: 200px;
width: 200px;
`;