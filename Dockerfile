# Use a imagem base oficial do Node.js
FROM node:14-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package.json ./
COPY package-lock.json ./

# Instale as dependências
RUN npm install

# Copie todo o código fonte da aplicação para o diretório de trabalho
COPY . .

# Construa a aplicação para produção
RUN npm run build

# Exponha a porta em que a aplicação será executada
EXPOSE 3000

# Defina o comando padrão para iniciar a aplicação
CMD ["npm", "run", "start"]
