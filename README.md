# 📖 GrimoriumVerum

Plataforma de vídeos organizada por categorias, inspirada na Netflix. Permite cadastrar categorias e vídeos, exibindo-os em um layout moderno com banner principal e carrosseis por categoria.

## 🚀 Tech Stack

| Camada     | Tecnologia                                     |
| ---------- | ---------------------------------------------- |
| Framework  | [React 19](https://react.dev/)                 |
| Linguagem  | [TypeScript 5.7](https://www.typescriptlang.org/) |
| Build Tool | [Vite 6](https://vite.dev/)                    |
| Roteamento | [React Router v7](https://reactrouter.com/)    |
| Estilização | CSS Modules                                   |
| Backend    | [JSON Server](https://github.com/typicode/json-server) |
| Linting    | ESLint 9                                       |

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── BannerMain/          # Banner principal com vídeo em destaque
│   ├── Button/              # Botão reutilizável
│   ├── Carousel/            # Carrossel de vídeos por categoria
│   │   └── components/
│   │       ├── Slider/      # Controle de slides
│   │       └── VideoCard/   # Card individual de vídeo
│   ├── Footer/              # Rodapé da aplicação
│   ├── FormField/           # Campo de formulário reutilizável
│   ├── Menu/                # Menu de navegação superior
│   └── PageDefault/         # Layout padrão das páginas
├── config/                  # Configuração (URL do backend, etc.)
├── hooks/
│   └── useForm.ts           # Hook customizado para gerenciamento de formulários
├── pages/
│   ├── Home/                # Página inicial com banner e carrosseis
│   ├── cadastro/
│   │   ├── Categoria/       # Cadastro de novas categorias
│   │   └── Video/           # Cadastro de novos vídeos
│   └── NotFound/            # Página 404
├── repositories/            # Camada de acesso a dados (fetch API)
├── types/                   # Interfaces TypeScript (Video, Categoria)
└── main.tsx                 # Ponto de entrada + rotas
```

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9

## 🏁 Como Executar

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o projeto (Vite + JSON Server em paralelo)
npm run dev
```

A aplicação ficará disponível em **<http://localhost:3000>** e o JSON Server em **<http://localhost:3001>**.

### Scripts Disponíveis

| Comando            | Descrição                                          |
| ------------------ | -------------------------------------------------- |
| `npm run dev`      | Inicia o Vite e o JSON Server simultaneamente      |
| `npm run server`   | Inicia apenas o JSON Server (porta 3001)           |
| `npm run build`    | Executa o TypeScript compiler e gera build de produção |
| `npm run preview`  | Serve o build de produção localmente               |
| `npm run lint`     | Executa o ESLint no projeto                        |

## 🗺️ Rotas

| Rota                   | Página               |
| ---------------------- | -------------------- |
| `/`                    | Home                 |
| `/cadastro/video`      | Cadastro de Vídeo    |
| `/cadastro/categoria`  | Cadastro de Categoria|
| `*`                    | 404 Not Found        |

## 🏗️ Arquitetura

- **CSS Modules** — estilos com escopo local por componente, evitando conflitos de classes.
- **Repository Pattern** — camada `repositories/` abstrai as chamadas à API REST do JSON Server.
- **Custom Hooks** — `useForm` centraliza a lógica de formulários (estado, validação, reset).
- **Path Alias** — `@/` é mapeado para `src/` via Vite, simplificando os imports.
- **Proxy de API** — em dev, o Vite faz proxy de `/api` → `http://localhost:3001`, evitando CORS.
- **CSS Variables** — design tokens centralizados em `:root` (`--primary`, `--frontEnd`, `--backEnd`, etc.).

## 🔧 Variáveis de Ambiente

| Variável          | Descrição               | Padrão                  |
| ----------------- | ----------------------- | ----------------------- |
| `VITE_API_URL`    | URL do backend          | `http://localhost:3001`  |
| `PORT`            | Porta do JSON Server    | `3001`                  |

## 📝 Licença

Este projeto é de uso pessoal e educacional.
