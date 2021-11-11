import React from "react";
import "./style.css";
import Button from "../../components/Button";
import Logo from "../../assets/Logo.png";
import IconeCadastro from "../../assets/iconeCadastro.png";
import LogoCadastro from "../../assets/LogoCadastro.png";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { MdOutlineEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

function Register() {
  return (
    <div className="contentCadastro">
      <div className="wrapperLogin">
        <div className="contentLogo">
          <img src={Logo} alt="Logo GOBARBER" />
        </div>
        <div className="wrapperInputsButton">
          <div className="wrapperTitle">
            <a href="*">Sou Cliente</a>
            <a href="*">Sou Cabelereiro</a>
          </div>
          <Input icon={FiUser} placeholder="Nome" />
          <Input icon={MdOutlineEmail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Senha" />
          <Button text="Cadastro" />
        </div>

        <div>
          <Link to="/Login" className="criarConta">
            <span>
              <img src={IconeCadastro} alt="icone de entrada" />
            </span>
            Voltar para o login
          </Link>
        </div>
      </div>

      <div>
        <img
          className="imagePrincipal"
          src={LogoCadastro}
          alt="Barbeiro cortando o cabelo do cliente"
        ></img>
      </div>
    </div>
  );
}

export default Register;
