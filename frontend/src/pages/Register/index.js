//obs linha 29: a primeira chave indica um código js no html, a segunda chave indica um objeto do js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
import cadastro from '../../images/cadastro.jpg'; //<a href="https://br.freepik.com/fotos-vetores-gratis/tecnologia">Tecnologia vetor criado por macrovector - br.freepik.com</a>

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [WhatsApp, setWhatsApp] = useState('');
  const [Cidade, setCidade] = useState('');
  const [UF, setUF] = useState('');
  const history = useHistory();

async function handleRegister(e) {
  e.preventDefault();

  const data ={
    name,
    email,
    WhatsApp,
    Cidade,
    UF,
  };
  try{
    const response = await api.post('ongs', data);
    localStorage.setItem('ong', id);
    localStorage.setItem('ongName', response.data.name);
    history.push('/');
    } catch(err){
    alert('Erro no cadastro, tente novamente')
  }
  
}

  return (
    <div className="register-container">
      <div className="content">
        <img className="image" src={cadastro} alt="cadastro" />
        <form onSubmit={handleRegister}>
          <section>
            <h1>Faça seu cadastro</h1>
            <h2>Faça seu cadastro na Rent of Goodness!</h2>
            <p>O que está sendo inútil pra você pode ser muito útil para outra pessoa. Acesse e aproveite!</p>
          </section>

          <input type="Nome do produto"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input type="text"
            placeholder="WhatsApp"
            value={WhatsApp}
            onChange={e => setWhatsApp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={Cidade}
              onChange={e => setCidade(e.target.value)}
            />

            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={UF}
              onChange={e => setUF(e.target.value)}
            />
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
