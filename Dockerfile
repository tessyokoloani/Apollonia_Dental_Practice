# Step 1: Use Node.js as the base image
FROM node:20.2.0

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the app port
EXPOSE 4004

# Step 7: Define the command to run the app
CMD ["npm", "start"]
