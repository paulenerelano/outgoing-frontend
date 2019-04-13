
const axios = require("axios");
const DB_ADDR = "localhost"
const DB_PORT = 4000;
const HTTP_TAG = "http://";




module.exports = function() {
  
  return {
    getAllEvents: function() {
      const config = require("../config/config.js");
      const URL = config.HTTP_TAG + config.IP_ADDRESS + config.PORT
      console.log("------------------------------------------------" + URL);
      return axios.get(URL + "/event/list")
        .then(response => {
          return response;
        })
        .catch(error => {
          return error;
        });
    },
  }
}
