# Use the official Node.js base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3001

# Start the client script
CMD ["node", "client.js"]

