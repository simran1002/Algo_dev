# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the entire project (excluding files in .dockerignore)
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 5000

# Define the command to start the app
CMD ["npm", "run", "start"]
