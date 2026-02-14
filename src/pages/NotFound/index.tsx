import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function NotFound() {
    return (
        <PageDefault>
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
                <h1 style={{ fontSize: '72px', marginBottom: '16px', opacity: 0.3 }}>404</h1>
                <h2>Página não encontrada</h2>
                <p style={{ color: 'var(--blackLighter)', marginBottom: '32px' }}>
                    A página que você está procurando não existe ou foi removida.
                </p>
                <Link
                    to="/"
                    style={{
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                    }}
                >
                    ← Voltar para a Home
                </Link>
            </div>
        </PageDefault>
    );
}

export default NotFound;
