FROM node:10-alpine as builder

COPY package.json package-lock.json ./
RUN npm install && mkdir /educationprogram && mv ./node_modules ./educationprogram

WORKDIR /educationprogram

COPY . .

RUN npm run build