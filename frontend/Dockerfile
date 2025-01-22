# Use official Node.js image from Docker Hub
FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application
COPY . .

# Expose the frontend port
EXPOSE 5173

# Run the app
CMD ["npm", "start"]
