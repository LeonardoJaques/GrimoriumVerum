import config from '../config';
import type { Categoria } from '../types';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll(): Promise<Categoria[]> {
    return fetch(URL_CATEGORIES).then(async (response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Não foi possível obter os dados: ${response.statusText}`);
    });
}

function getAllWithVideos(): Promise<Categoria[]> {
    return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Não foi possível obter os dados: ${response.statusText}`);
    });
}

export default {
    getAll,
    getAllWithVideos,
};
