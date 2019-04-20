const axios = require("axios");
const config = require("../config/config.js");

const BASE_URL = config.HTTP_TAG + config.IP_ADDRESS + config.PORT + "/event";

module.exports = function() {
  
  return {
    getAllEvents: function() {
      return axios({
        method: "get",
        url: BASE_URL + "/list",
        timeout: config.TIMEOUT,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response;
        })
        .catch(error => {
          if (!error.response) {
            console.log('Error: Network Error');
          } else {
            console.log(error.response.data.message);
          }
          return error;
        });
    },

    getEventDetails: function(id) {
      return axios({
        method: "get",
        url: BASE_URL + "/details/"+ id,
        timeout: config.TIMEOUT,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response;
        })
        .catch(error => {
          if (!error.response) {
            console.log('Error: Network Error');
          } else {
            console.log(error.response.data.message);
          }
          return error;
        });
    },


    createEvent: function(data) {
      return axios({
        method: "post",
        url: BASE_URL + "/add",
        timeout: config.TIMEOUT,
        headers: {
          "Content-Type": "application/json"
        },
        data: data
      })
        .then(response => {
          return response;
        })
        .catch(error => {
          if (!error.response) {
            console.log('Error: Network Error');
          } else {
            console.log(error.response.data.message);
          }
          return error;
        });
    },
  }
}
