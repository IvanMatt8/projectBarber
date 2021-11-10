import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Cadastro from "../pages/Register";
import Home from "../pages/Home";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<Cadastro />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
