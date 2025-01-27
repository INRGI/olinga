FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY apps/frontend ./

RUN npm run build

EXPOSE 4200

CMD ["npx", "nx", "serve", "frontend", "--host=0.0.0.0"]
