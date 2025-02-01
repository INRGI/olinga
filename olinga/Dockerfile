FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000 4200

CMD ["sh", "-c", "npx nx run backend:serve:production & npx nx run frontend:serve:production"]
