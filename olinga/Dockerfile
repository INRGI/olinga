FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache tini

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./
COPY .env ./
COPY apps/backend/webpack.config.js ./apps/backend/
COPY apps/frontend/vite.config.ts ./apps/frontend/

RUN npm install --force

COPY . .

EXPOSE 3000
EXPOSE 4200

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["sh", "-c", "npx nx serve backend --host 0.0.0.0 --port 3000 & npx nx serve frontend --host 0.0.0.0 --port 4200"]
