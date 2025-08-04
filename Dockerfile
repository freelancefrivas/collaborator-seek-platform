FROM node:22
LABEL authors="fernando"
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "run", "dev" ]