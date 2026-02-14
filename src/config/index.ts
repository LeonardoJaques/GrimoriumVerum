const URL_BACKEND = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const config = {
    URL_BACKEND,
} as const;

export default config;
