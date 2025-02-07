FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./
COPY apps/backend/webpack.config.js ./apps/backend/
COPY apps/frontend/vite.config.ts ./apps/frontend/

RUN npm install --force

COPY . .

EXPOSE 3000
EXPOSE 4200

CMD ["sh", "-c", "npx nx build olinga"]