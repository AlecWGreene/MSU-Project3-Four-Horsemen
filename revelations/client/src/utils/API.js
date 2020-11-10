import axios from "axios";

const API =  {
  // continue as guest
  guestUser: function() {
    return axios.get("/api/guest");
  },
  // hash password and register user in database
  userSignUp: function(userData) { 
    return axios.post("/api/signup", userData);
  },
  // aves a book to the database
  userLogIn: function(userData) {
    return axios.post("/api/login", userData);
  },
  // Deletes user account
  deleteUser: function(id) {
    return axios.delete("/api/signup/" + id);
  },
};

export default API