# Multi-stage Dockerfile for Vite React SPA
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency specifications
COPY package*.json ./

# Install dependencies cleanly
RUN npm ci

# Copy project files
COPY . .

# Build production distribution
RUN npm run build

# Production stage with lightweight Nginx
FROM nginx:1.27-alpine AS runner

# Copy built static assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy optimized Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start server
CMD ["nginx", "-g", "daemon off;"]
