import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import girl from '../../images/girl.jpg'; //<a href="https://br.freepik.com/fotos-vetores-gratis/negocio">Negócio vetor criado por stories - br.freepik.com</a>

export default function NewIncident() {
  return(
    <div className="new-incident-container">
      <div className="content">
        <img className="image" src={girl} alt="girl" />
        <form>
          <section>
            <h1>Cadastre uma nova utilidade</h1>
            <p>Descreva detalhamente o seu produto, acrescente uma foto e crie novas oportunidades</p>
          </section>

          <input type="text" placeholder="Nome do produto" />
          <input type="textarea" placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />
          <button className="button" type="submit">Cadastrar</button>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para página anterior
          </Link>
        </form>
      </div>
    </div>
  );
}