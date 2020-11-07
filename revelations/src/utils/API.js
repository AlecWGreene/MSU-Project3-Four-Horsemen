import axios from "axios";

const API =  {
  // Gets all books
  guestUser: function() {
    return axios.get("/api/guest");
  },
  // Gets the user's with the given id
  userSignUp: function(id) {
    return axios.get("/api/signup/" + id);
  },
  // Saves a book to the database
  userLogIn: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Deletes user account
  deleteUser: function(id) {
    return axios.delete("/api/login/" + id);
  },
};

export default API