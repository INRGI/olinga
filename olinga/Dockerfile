FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./
COPY apps/backend/webpack.config.js ./apps/backend/
COPY apps/frontend/vite.config.ts ./apps/frontend/

RUN npm install --force

COPY . .
RUN npx nx build frontend
EXPOSE 3000

CMD ["sh", "-c", "npx nx serve backend"]