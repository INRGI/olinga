FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY apps/backend ./

RUN npm run build

EXPOSE 3000

CMD ["npx", "nx", "serve", "backend", "--host=0.0.0.0"]
