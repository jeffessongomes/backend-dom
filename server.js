import express from 'express';
import bodyParser from 'body-parser';
import {db} from './services/db';
import routes from './routes/providers/routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.authenticate()
  .then(() => console.log("Conexão com o banco de dados estabelecida com sucesso"))
  .catch((err) => console.log("Erro ao estabelecer conexão com o banco de dados: ", err));

// Inicia a conexão com o banco de dados

// Adiciona as rotas
app.use("/", routes);

// Inicia o servidor
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});