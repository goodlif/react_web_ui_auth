This app builds off ideas from react_web_ui.

Client Side: 

Simple sign up, sign in and out components. 
Built with : 
React
Redux
React-router
redux-thunk
redux-forms

To Do: 
- Add features (User Bios, locations, specifications) to send to recommender API currently in construction by https://github.com/plasticruler?tab=repositories
- Add facilities to return recommendation meaningfully
- Add app styling - most likely to use Material-Ui
- Integrate Webpack and Babel for productionised builds

Server Side: 
Express.js server to hold user sign up data, and authenticate users using a JWT implementation
Built with: 
express.js
nodemon
morgan
body-parser
local storage (Browser)
Mongoose
MongoDB
BCrypt
Passport.js