# 🔌 API Simples — Usuários

API REST de cadastro de usuários feita com **Node.js + Express** e conectada a um banco **PostgreSQL**. Foi um projeto de estudo pra praticar a ligação entre back-end e banco: queries parametrizadas, códigos HTTP e tratamento de erro.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)

## 📡 Endpoints

| Método | Rota | O que faz | Resposta |
|---|---|---|---|
| `GET` | `/usuarios` | Lista todos os usuários | `200` + lista |
| `POST` | `/usuarios` | Cria um usuário (`nome`, `email`) | `201` + usuário criado |
| `DELETE` | `/usuarios/:id` | Remove um usuário | `200` + mensagem |

## 🗄️ Banco de dados

Crie o banco `devjobs` e a tabela:

```sql
CREATE TABLE usuarios (
    id     SERIAL PRIMARY KEY,
    nome   VARCHAR(100) NOT NULL,
    email  VARCHAR(100) NOT NULL UNIQUE
);
```

As queries usam **parâmetros** (`$1`, `$2`) em vez de concatenar texto, o que protege contra **SQL Injection**.

## ▶️ Como rodar

```bash
git clone https://github.com/Bruno-Gadelha25/api-simples.git
cd api-simples
npm install express pg
node index.js
```

Ajuste usuário e senha do PostgreSQL em `index.js`. O servidor sobe em **http://localhost:3000**.

### Testando

```bash
curl -X POST http://localhost:3000/usuarios -H "Content-Type: application/json" -d '{"nome":"Ana","email":"ana@email.com"}'
curl http://localhost:3000/usuarios
curl -X DELETE http://localhost:3000/usuarios/1
```

## 🚀 Próximos passos

- [ ] Mover credenciais do banco para variáveis de ambiente (`.env`)
- [ ] Rota `PUT /usuarios/:id` para atualização
- [ ] Validação de e-mail e tratamento de e-mail duplicado (`409 Conflict`)

---

Feito por **[Bruno Gadelha](https://github.com/Bruno-Gadelha25)**
