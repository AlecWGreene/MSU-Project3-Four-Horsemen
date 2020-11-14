import axios from "axios";

const API =  {
  // create new user accout, and also allow login from sign up for existing users 
  userSignUp: function(userData) { 
    return axios.post("/api/signup", userData);
  },
  // hash password and register user in database
  userLogIn: function(userData) {
    return axios.post("/api/login", userData);
  },
  // Saves a post to the database - not tested
  saveData: function(id, userData) {
    return axios.post("/api/" + id, userData);
  },
  // deletes user account
  deleteUser: function(id) {
    return axios.delete("/api/" + id);
  },
};

export default API