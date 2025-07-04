# Botified Backend

## Description
Botified Backend is the server-side application for the Botified VS Code Extension. It leverages AI to generate code dynamically, providing developers with an enhanced coding experience. This backend is built using Node.js and Express, and integrates with OpenAI's API for AI-powered functionalities.

## Features
- **AI Code Generation**: Utilizes OpenAI's API to generate code snippets based on user prompts.
- **Swagger Documentation**: Provides interactive API documentation for easy testing and integration.
- **Environment Configuration**: Supports `.env` files for managing sensitive data securely.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/botified-backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd botified-backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
Start the development server with hot-reloading:
```bash
npm run dev
```

### Production
Start the production server:
```bash
npm start
```

## Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
OPENAI_API_KEY=your_openai_api_key
NODE_ENV=production
PORT=3000
```

## API Documentation
Access the Swagger documentation at:
```
http://localhost:3000/api/docs
```

## Dependencies
- **Express**: Fast, unopinionated, minimalist web framework.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **Dotenv**: Loads environment variables from `.env` files.
- **OpenAI**: Integration with OpenAI's API.
- **Swagger-jsdoc**: Generates API documentation.
- **Swagger-ui-express**: Serves Swagger documentation.

## Dev Dependencies
- **Nodemon**: Monitors for changes and restarts the server automatically.

## Author
Gaston Rodriguez Herrera

## License
This project is licensed under the ISC License.
