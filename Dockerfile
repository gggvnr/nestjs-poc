FROM node:14.16-alpine
ENV PATH /node_modules/.bin:$PATH

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci

COPY . ./

EXPOSE 3001

CMD [ "npm", "run", "start:dev"]