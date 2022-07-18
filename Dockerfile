FROM node:16

# Create app directory
WORKDIR /usr/../app

COPY package*.json ./
COPY . .
# Install dependencies
RUN npm install

RUN npm run build

CMD [ "npm", "start" ]
