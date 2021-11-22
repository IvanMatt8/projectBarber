import React from "react";
import "./style.css";
import Logo from "../../assets/Logo.png";
import Barber from "../../assets/barber.png";
import Sair from "../../assets/Sair.png";
import Card from "../../components/Card";
import Leonardo from "../../assets/imageLeonardo.png";
import Cleiton from "../../assets/imageCleiton.png";
import Rolangela from "../../assets/imageRolangela.png";
import Robson from "../../assets/imageRobson.png";
import Borges from "../../assets/imageBorges.png";
import Diego from "../../assets/imageDiego.png";
import { CgStopwatch } from "react-icons/cg";

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
        <div className="contentAtendimento">
          <h4>Atendimento a Seguir</h4>
          <div className="cardAtendimento">
            <span>
              <img src={Leonardo} alt="imagem de cliente" />
              <p>Leonardo Minatti</p>
            </span>
            <p>
              <CgStopwatch className="iconRelogio" /> 08:00
            </p>
          </div>
        </div>
        <div className="wrapperCalendario">
          <div className="horarioManha">
            <p>Manha</p>
            <span></span>
            <div>
              <CgStopwatch className="iconRelogio" />
              <p>08:30</p> <Card img={Cleiton} name="Cleiton Souza" />
            </div>
            <div>
              <CgStopwatch className="iconRelogio" />
              <p>11:00</p>
              <Card img={Rolangela} name="Rolangela B. Rusena" />
            </div>
          </div>
          <div className="horarioTarde">
            <p>Tarde</p>
            <span></span>
            <div>
              <CgStopwatch className="iconRelogio" />
              <p>13:00</p>
              <Card img={Robson} name="Robson Marquezine" />
            </div>
            <div>
              <CgStopwatch className="iconRelogio" />

              <p>15:00</p>
              <Card img={Borges} name="Borges Alfredo" />
            </div>
            <div>
              <CgStopwatch className="iconRelogio" />
              <p>17:30</p>
              <Card img={Diego} name="Diego Fernandes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
