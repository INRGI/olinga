FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install --production

RUN npx nx reset

EXPOSE 3000 4200

CMD sh -c "npx nx run backend:serve:production & npx nx run frontend:serve:production && wait"
