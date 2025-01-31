FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000 4200

CMD ["sh", "-c", "npx nx serve frontend & npx nx serve backend"]
