import axios from "axios";
const EMPURL = "https://randomuser.me/api/?results=50&nat=us";

// Export an object containing methods we'll use for accessing the Random User API
export default {
  getEmployees: function() {
    return axios.get(EMPURL);
  },
};