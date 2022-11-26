<h1>Droppr</h1>

<h3>Para rodar o site é necessário:</h3>

<p>1- Baixar as dependências do folder frontend</p>

```bash

cd frontend
npm install
```
<p>2- Baixar as dependências do folder backend</p>

```bash

cd backend
npm install
```
<p>3-Criar um arquivo .env nas pasta backend contendo: </p> 

```ini

USERNAME_MONGO=<MONGO DATABASE USER'S USERNAME HERE>
PASSWORD_MONGO=<MONGO DATABASE USER'S PASSWORD HERE>
URL_MONGO=mongodb+srv://<username>:<password>@cluster0.sh88dvn.mongodb.net/?retryWrites=true&w=majority

```
<p>4-Inicializar o frontend</p>

```bash

cd frontend
npm start
```

<P>5- Rodar o servidor node</p>

```bash

cd backend
npm node server.js
```
