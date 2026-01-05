# FROM node:18

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# RUN npx prisma generate

# EXPOSE 5000

# CMD ["node", "src/server.js"]

# # 👇 VERY IMPORTANT: run migrations at container startup
# CMD npx prisma migrate deploy && node src/server.js
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

# 👇 VERY IMPORTANT: run migrations at container startup
CMD npx prisma migrate deploy && node src/server.js
