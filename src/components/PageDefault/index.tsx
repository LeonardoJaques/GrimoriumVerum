import type { ReactNode, CSSProperties } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styles from './PageDefault.module.css';

interface PageDefaultProps {
    children: ReactNode;
    paddingAll?: number;
}

function PageDefault({ children, paddingAll }: PageDefaultProps) {
    const mainStyle: CSSProperties | undefined =
        paddingAll !== undefined ? { padding: paddingAll } : undefined;

    return (
        <>
            <Menu />
            <main className={styles.main} style={mainStyle}>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default PageDefault;
