import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
    openapi: '3.0.1',
    info: {
        title: 'Backend Test Project API',
        description: 'Documentación de la API - Módulo Users',
        version: '1.0.0',
    },
    },
    apis: ['./src/routes/users.router.js'],
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
