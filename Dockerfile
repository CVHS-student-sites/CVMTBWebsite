# Step 1: Use a Node.js image as the base for building the app
FROM node:16-alpine AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use a lightweight web server to serve the static files
FROM nginx:alpine

# Step 8: Copy the build output to the Nginx web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 10: Expose port 80 to access the app
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
