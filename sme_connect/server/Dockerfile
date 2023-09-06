

FROM node:18-alpine
COPY package*.json ./
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 5173