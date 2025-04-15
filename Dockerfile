FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 🔧 Generate Prisma Client
RUN npx prisma generate

CMD ["node", "src/index.js"]
