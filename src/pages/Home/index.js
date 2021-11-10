import React from "react";
import "./style.css";
import Logo from "../../assets/Logo.png";
import Barber from "../../assets/barber.png";
import Sair from "../../assets/Sair.png";

function Home() {
  return (
    <div id="contentBarbeiro">
      <div className="header">
        <div className="contentPerfil">
          <img className="logoPagina" src={Logo} alt="logo Pagina" />
          <div className="wrapperBemvindo">
            <img className="logoBarbeiro" src={Barber} alt="logo barbeiro" />
            <p>
              <span>Bem Vindo,</span> <p> </p> Tiago Luchtenberg
            </p>
          </div>
        </div>
        <img
          className="logoSair"
          src={Sair}
          width="50"
          height="50"
          alt="logo Sair"
        ></img>
      </div>
      <div className="contentHorarios">
        <div className="titleContent">
          <h1>Horarios agendados </h1>
          <p>Hoje | Dia 06 | Segunda-Feira</p>
        </div>
        <div className="wrapperCalendario">
          <h4>React Suite Calendar Component</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
