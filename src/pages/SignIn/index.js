import React from "react";
import "./style.css";
import ImagePrincipal from "../../assets/ImagePrincipal.png";
import Logo from "../../assets/Logo.png";
import IconeCriar from "../../assets/Criar.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="contentHeader">
      <div className="wrapperLogin">
        <div className="contentLogo">
          <img src={Logo} alt="Logo GOBARBER" />
        </div>
        <div className="wrapperInputsButton">
          <h2>Faça seu login </h2>
          <input type="text" placeholder="E-mail"></input>
          <input type="text" placeholder="Senha"></input>
          <button className="buttonPrimary">Entrar</button>
          <a href="*">Esqueci minha senha</a>
        </div>

        <div>
          <Link to="/register" className="criarConta">
            <span>
              <img src={IconeCriar} alt="icone de entrada" />
            </span>
            Criar Conta
          </Link>
        </div>
      </div>

      <div>
        <img
          className="imagePrincipal"
          src={ImagePrincipal}
          alt="Barbeiro cortando o cabelo do cliente"
        ></img>
      </div>
    </div>
  );
}

export default Header;
