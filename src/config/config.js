/* Exports */
module.exports = {
  /*************LOCAL CONFIG*************************/
  /* Use this on local setup*/
  /*
  IP_ADDRESS: "localhost",
  PORT: ":4000",
  HTTP_TAG: "http://",*/
  
  /*************HEROKU'S CONFIG***********************/
  IP_ADDRESS: "staging-outgoing-backend.herokuapp.com",
  PORT: "",
  HTTP_TAG: "https://",

  /*************COMMON CONFIG*************************/
  TIMEOUT: 5000
}
