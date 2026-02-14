export interface Video {
    id: number;
    categoriaId: number;
    title: string;
    url: string;
}

export interface LinkExtra {
    text: string;
    url: string;
}

export interface Categoria {
    id: number;
    title: string;
    color: string;
    description?: string;
    link_extra?: LinkExtra;
    videos?: Video[];
}
