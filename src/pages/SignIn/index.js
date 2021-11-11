import React from "react";
import "./style.css";
import Button from "../../components/Button";
import ImagePrincipal from "../../assets/ImagePrincipal.png";
import Logo from "../../assets/Logo.png";
import IconeCriar from "../../assets/Criar.png";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function Header() {
  return (
    <div className="contentHeader">
      <div className="wrapperLogin">
        <div className="contentLogo">
          <img src={Logo} alt="Logo GOBARBER" />
        </div>
        <div className="wrapperInputsButton">
          <h2>Faça seu login </h2>
          <Input icon={MdOutlineEmail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Senha" />
          <Button text="Entrar" />
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
