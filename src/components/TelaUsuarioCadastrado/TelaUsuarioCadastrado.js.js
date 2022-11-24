import { Div, Titulo, BackToLoginButton} from "./styled";

function TelaUsuarioCadastrado(props) {
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <BackToLoginButton onClick={()=>props.irPara(1)} >Voltar a página de login</BackToLoginButton>
        </Div>
    )
}

export default TelaUsuarioCadastrado;