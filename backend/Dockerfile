# Chọn image node chính thức
FROM node:16

# Cài đặt thư mục làm việc
WORKDIR /app

# Copy package.json và cài đặt các dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở port cho ứng dụng backend
EXPOSE 5000
CMD ["node", "server.js"]
