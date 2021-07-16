FROM node:16-alpine3.11
COPY server.js mock.js schemaString.js package.json package-lock.json app/
WORKDIR /app
RUN npm install
CMD ["npm", "run", "start"]