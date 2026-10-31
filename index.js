require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')

const app = express()
app.use(express.json())

// Conexão com o banco — credenciais vêm do arquivo .env (veja .env.example)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT)
})

// GET — lista todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM usuarios')
    res.json(resultado.rows)
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro no servidor' })
  }
})

// POST — cria novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, email } = req.body
    const resultado = await pool.query(
      'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    )
    res.status(201).json(resultado.rows[0])
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro no servidor' })
  }
})

// DELETE — remove usuário
app.delete('/usuarios/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM usuarios WHERE id = $1', [req.params.id])
    res.json({ mensagem: 'Usuário removido' })
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro no servidor' })
  }
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})