import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="LeoJaquesFlixLogo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
export default Menu;
