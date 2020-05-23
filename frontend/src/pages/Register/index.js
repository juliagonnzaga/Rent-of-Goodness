//obs linha 29: a primeira chave indica um código js no html, a segunda chave indica um objeto do js
import React from 'react'; 
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logo from '../../images/logo.jpg'; 

export default function Register(){
  return (
    <div className="register-container">
      <div className="content">
            <img className = "image" src={logo} alt="logo"/>
        <form>
        <section>
          <h1>Faça seu cadastro</h1>
          <h2>Faça seu cadastro na Rent of Goodness!</h2> 
          <p>Alugue seus pertences que não estão sendo utilizados e confira as utilidades disponíveis para aluguel</p>
          </section>
          <input type="Nome do produto" placeholder="Nome"/>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="WhatsApp"/>

          <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="UF" style={{width: 80}}/>
            <button className="button" type="submit">Cadastrar</button>
          </div>
          <Link className ="back-link" to="/">
          <FiArrowLeft size={16} color="#black"/>
          Voltar para página anterior
          </Link>
        </form>
      </div>
    </div>
  );
}