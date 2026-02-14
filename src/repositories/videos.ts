import config from '../config';
import type { Video } from '../types';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

interface CreateVideoPayload {
    title: string;
    url: string;
    categoriaId: number;
}

function create(videoObject: CreateVideoPayload): Promise<Video> {
    return fetch(URL_VIDEOS, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(videoObject),
    }).then(async (response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Não foi possível cadastrar o vídeo: ${response.statusText}`);
    });
}

export default {
    create,
};
