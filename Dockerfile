# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Supabase client library
RUN npm install @supabase/supabase-js

# Install TypeScript and necessary TypeScript libraries
RUN npm install --save-dev typescript @types/node @types/react

# Copy app files
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
