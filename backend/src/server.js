// src/server.js

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Rota de teste
app.get('/', (request, response) => {
    return response.json({
        message: 'Servidor está funcionando!'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});