FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Expose the port specified in the .env file
ARG PORT_PRODUCTS
ENV PORT_PRODUCTS=$PORT_PRODUCTS
EXPOSE $PORT_PRODUCTS


CMD ["npm", "run", "dev"]