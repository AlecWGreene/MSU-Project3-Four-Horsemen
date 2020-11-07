import axios from "axios";

const API =  {
  // Gets all books
  guestUser: function() {
    return axios.get("/api/guest");
  },
  // Gets the user's with the given id
  userSignUp: function(userData) {
    return axios.get("/api/signup/" + userData);
  },
  // Saves a book to the database
  userLogIn: function(id) {
    return axios.post("/api/signup", id);
  },
  // Deletes user account
  deleteUser: function(id) {
    return axios.delete("/api/signup/" + id);
  },
};

export default API