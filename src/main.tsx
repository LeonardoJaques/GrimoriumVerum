import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro/video" element={<CadastroVideo />} />
            <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>,
);
