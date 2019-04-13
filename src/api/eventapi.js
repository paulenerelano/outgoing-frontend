
const axios = require("axios");
const config = require("../config/config.js");

const BASE_URL = config.HTTP_TAG + config.IP_ADDRESS + config.PORT + "/event";



module.exports = function() {
  
  return {
    getAllEvents: function() {
      return axios.get(BASE_URL + "/list")
        .then(response => {
          return response;
        })
        .catch(error => {
          return error;
        });
    },

    createEvent: function(data) {
      return axios.post(BASE_URL + "/add", data)
        .then(response => {
          return response;
        })
        .catch(error => {
          console.log(error)
          return error;
        });
    },
  }
}
