# Domótica - API

### Repositório dedicado a API do projeto de domótica, integrando Arduino atavés de Ethernet Shield para realizar requisições ao servidor.

Para apenas testar, é possível utilizar a API que já está no ar: [Link da API](https://api-domotics.herokuapp.com/)

## Desenvolvimento

### 1 - É necessário criar um arquivo `.env` e declarar a váriavel que irá receber a URL do seu MongoDB. Sem isso não será possível acessa-lo e gerenciar todas as requisições.

### 2 - Para iniciar o projeto você deve primeiro instalar todas as dependências

```
yarn
```

ou

```
npm install
```

### 3 - Após instalado, rode o servidor localmente em modo de desenvolvimento

```
yarn dev
```

ou

```
npm run dev
```

### 4 - O servidor estará rodando em `localhost:8080`
