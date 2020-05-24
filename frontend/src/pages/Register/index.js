//obs linha 29: a primeira chave indica um código js no html, a segunda chave indica um objeto do js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import cadastro from '../../images/cadastro.jpg'; //<a href="https://br.freepik.com/fotos-vetores-gratis/tecnologia">Tecnologia vetor criado por macrovector - br.freepik.com</a>

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <img className="image" src={cadastro} alt="cadastro" />
        <form>
          <section>
            <h1>Faça seu cadastro</h1>
            <h2>Faça seu cadastro na Rent of Goodness!</h2>
            <p>O que está sendo inútil pra você pode ser muito útil para outra pessoa. Acesse e aproveite!</p>
          </section>

          <input type="Nome do produto" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
            <button className="button" type="submit">Cadastrar</button>
          </div>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para página anterior
          </Link>
        </form>
      </div>
    </div>
  );
}