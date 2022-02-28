# Lampoo Wishlist clone exercise
## SERVER setup
This exercise requires both the server and client to be setup.

The client instructions can be found in the *CLIENT repo* README.MD.

---
## Design
1. An Express Server was built to serve the static JSON data from **db.js** to populate the wishlist components.
2. Despite only needing one endpoint (*/wishlist*) I separated the routes (./routes/routes.js) and controller (./controller/wishlist.controller.js) in to separate directories.

---
## Installation and execution
1. Ensure Node and NPM are installed.
2. In a directory of your choosing create a new sub-directory to house the server and client (eg. **`mkdir lampoo_exercise`**).
3. Switch in to this directory (eg. **`cd lampoo_exercise`**).
4. Run **`git clone https://github.com/tookayNET/lampoo-server.git`** to clone the server repo in to a **./lampoo-server** sub-directory.
5. Switch in to this newly created server directory (eg. **`cd lampoo-server`**).
6. You may wish to create a **.env** file (**`touch .env`**) in the **./lampoo-server** directory and insert **`PORT=3123`** (or whichever port you wish to use for your server) on the first line of this file.  The **index.js** file will default to port 3123 if no PORT is found in the .env file.  
7. Run **`npm install`** to install all the required server dependencies.
8. Then, to launch the Express server, execute **`node index.js`** (or **`nodemon index.js`** if you have Nodemon installed) from the ./lampoo-server directory.
9. If all goes according to plan, you should then see a message "*Lampoo server listening on localhost:3123*" in your terminal window, indicating that the server is now up and running.
---

## TODO
1. Convert to GraphQL.
2. Host JSON data currently held locally in db.js on either Postgres or MongoDB database.
