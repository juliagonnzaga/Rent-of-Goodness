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
        <h1>Usuários<p></p> Cadastrados</h1>
        <Link className="button" to="/incidents/new">Cadastrar novo usuário</Link>
        <button type="button">
          <FiPower size={18} />
        </button>
      </header>
      <ul>
        <li>
          <p>Imagem do produto, pegar do bd </p>

          <strong>Alugo Casa na praia</strong>
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

          <strong>Serviços de Jardinagem</strong>
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

          <strong>Aulas particulares de francês </strong>
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

          <strong>Passeio com cahorros nos fins de semana</strong>
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