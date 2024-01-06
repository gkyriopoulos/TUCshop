FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Expose the port specified in the .env file
ARG PORT_ORDERS
ENV PORT_ORDERS=$PORT_ORDERS
EXPOSE $PORT_ORDERS

CMD ["npm", "run", "dev"]