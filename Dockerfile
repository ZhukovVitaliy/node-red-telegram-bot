# Используйте официальный образ Node.js в качестве базового
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1880

CMD ["npx", "node-red"]
