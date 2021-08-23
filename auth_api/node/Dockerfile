FROM node:9-alpine

WORKDIR /src/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start" ]
