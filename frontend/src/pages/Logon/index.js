import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import logo from '../../images/logo.jpg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="image">
        <img className="image" src={logo} alt="logo" />
      </section>

      <section className="form">
        <form>
          <h1>Faça o seu Login</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#black" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
    </div>
  );
}