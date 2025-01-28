FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./
COPY apps/backend/webpack.config.js ./apps/backend/
COPY apps/frontend/vite.config.ts ./apps/frontend/

RUN npm install

COPY . .

RUN mkdir -p dist/apps/frontend dist/apps/backend

EXPOSE 4200
EXPOSE 3000

CMD ["sh", "-c", "npx nx serve frontend --host 0.0.0.0 --port 4200 & npx nx serve backend --host 0.0.0.0 --port 3000"]
