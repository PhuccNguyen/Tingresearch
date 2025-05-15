# Chọn image node chính thức
FROM node:16

# Cài đặt thư mục làm việc
WORKDIR /app

# Copy package.json và cài đặt các dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng React
RUN npm run build

# Dựng server cho React
EXPOSE 3000
CMD ["npm", "start"]
