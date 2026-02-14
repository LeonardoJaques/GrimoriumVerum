import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/Logo.png';
import styles from './Menu.module.css';

function Menu() {
    return (
        <nav className={styles.menu}>
            <Link to="/">
                <img src={Logo} className={styles.logo} alt="GrimoriumVerum Logo" />
            </Link>
            <Link className={styles.buttonLink} to="/cadastro/video">
                Novo vídeo
            </Link>
        </nav>
    );
}

export default Menu;
