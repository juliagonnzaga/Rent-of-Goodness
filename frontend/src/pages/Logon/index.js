import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import logo from '../../images/logo.jpg';
import api from '../../services/api';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post('sessions', {id});
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no Login, tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="image">
        <img className="image" src={logo} alt="logo" />
      </section>

      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça o seu Login</h1>
          <input 
          placeholder="Sua ID"
          value = {id}
          onChange = {e => setId(e.target.value)}/>
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