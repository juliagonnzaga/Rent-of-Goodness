import React from 'react'; 
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import logo from '../../images/logo.jpg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="image">
        <img className = "image" src={logo} alt="logo"/>
      </section>

      <section className="form">
        <form>
          <h1>Faça o seu Login</h1>
          <input placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>

          <a href="/register">
          <FiLogIn size={16} color="#black"/>
          Não tenho cadastro
          </a>
        </form>
      </section>

    </div>
   );
  }