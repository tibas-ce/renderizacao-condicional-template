import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [mudarTela, setMudarTela] = useState(1);

  //Usando switch case
  function irPara(tela){
      setMudarTela(tela)
    }

  switch (mudarTela) {
    case 1:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaLogin irPara={irPara}/>
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaCadastro irPara={irPara}/>
        </MainContainer>
      );
    case 3:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaUsuarioCadastrado irPara={irPara}/>
        </MainContainer>
      );
      case 4:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaLogin irPara={irPara}/>
        </MainContainer>
      );
    default:
      return "Página não encontrada!";
  }

  //IF => ternário
  // const mudarPagina = mudarTela==="login" ? <TelaLogin /> : <TelaCadastro />;

  // function irPara(tela){
  //   setMudarTela(tela)
  // }
  // return (
  //   <MainContainer>
  //     <GlobalStyled />
  //     {/* {mudarPagina} */}
  //     {mudarTela===1 ?
  //     <TelaLogin irPara={irPara}/>
  //     :
  //     <TelaCadastro irPara={irPara} />}
  //   </MainContainer>
  // );

  // IF => normal
  // if (mudarTela === 1) {
  //   return (
  //     <MainContainer>
  //       <GlobalStyled />
  //       <TelaLogin />
  //     </MainContainer>
  //   );
  // } else {
  //   return (
  //     <MainContainer>
  //       <GlobalStyled />
  //       <TelaCadastro />
  //     </MainContainer>
  //   );
  // }
}

export default App;
