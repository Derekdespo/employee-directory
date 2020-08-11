import axios from "axios";

// Exporting an object containing a method for accessing the randomuser API
// Should get back 350 random users to serve as our employees
export default {
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=100&nat=us")
    }
}