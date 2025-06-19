FROM node:22-alpine  As development

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run start

EXPOSE 3000

CMD [  "npm", "run", "start" ]