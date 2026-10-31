-- Estrutura do banco usada pela API
-- Rode conectado ao banco devjobs:  psql -U postgres -d devjobs -f schema.sql

CREATE TABLE IF NOT EXISTS usuarios (
    id     SERIAL PRIMARY KEY,
    nome   VARCHAR(100) NOT NULL,
    email  VARCHAR(100) NOT NULL UNIQUE
);
