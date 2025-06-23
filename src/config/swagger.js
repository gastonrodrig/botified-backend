import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Botificados API",
      version: "1.0.0",
      description: "API para generación de código mediante IA",
    },
    servers: [
      {
        url: process.env.SWAGGER_BASE_URL || "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJSDoc(options);