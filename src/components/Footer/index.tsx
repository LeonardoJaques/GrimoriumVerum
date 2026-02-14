import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="https://www.alura.com.br/">
                <img
                    src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
                    alt="Logo Alura"
                />
            </a>
            <p>
                Orgulhosamente criado durante a{' '}
                <a href="https://www.alura.com.br/">Imersão React da Alura</a>
            </p>
        </footer>
    );
}

export default Footer;
