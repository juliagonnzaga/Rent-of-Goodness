import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpg';
import {FiPower, FiTrash2} from 'react-icons/fi'
import './styles.css';

export default function Profile(){
  return(
    <div className="profile-container">
      <header>
        <img src={logo} alt="logo"/>
        <span>Bem vindo, usuário</span>
        
        <Link className="button" to="/incidents/new">Cadastrar novo usuário</Link>
        <button type="button">
          <FiPower size={18} color="#e02041"/>
        </button>
      </header>
      <h1>Usuários Cadastrados</h1>
      <ul>
        <li>
          <p>Imagem do produto, pegar do bd </p>

          <strong>Sofá cama em bom estado</strong>
          <p>teste1</p>

          <strong>Descrição do produto</strong>
          <p>Sofá de camurça tantos cm</p>

          <strong>Preço do aluguel</strong>
          <p>Valor: 500 reais</p>

          <button type="button">
            <FiTrash2 size={18} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <p>Imagem do produto, pegar do bd </p>

          <strong>Sofá cama em bom estado</strong>
          <p>teste1</p>

          <strong>Descrição do produto</strong>
          <p>Sofá de camurça tantos cm</p>

          <strong>Preço do aluguel</strong>
          <p>Valor: 500 reais</p>

          <button type="button">
            <FiTrash2 size={18} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <p>Imagem do produto, pegar do bd </p>

          <strong>Sofá cama em bom estado</strong>
          <p>teste1</p>

          <strong>Descrição do produto</strong>
          <p>Sofá de camurça tantos cm</p>

          <strong>Preço do aluguel</strong>
          <p>Valor: 500 reais</p>

          <button type="button">
            <FiTrash2 size={18} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <p>Imagem do produto, pegar do bd </p>

          <strong>Sofá cama em bom estado</strong>
          <p>teste1</p>

          <strong>Descrição do produto</strong>
          <p>Sofá de camurça tantos cm</p>

          <strong>Preço do aluguel</strong>
          <p>Valor: 500 reais</p>

          <button type="button">
            <FiTrash2 size={18} color="#a8a8b3"/>
          </button>
        </li>
      </ul>
    </div>
  );
}