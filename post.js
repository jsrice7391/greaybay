module.exports = (name, desciption, bid, bidder, seller)=>{
    
}

var mysql = require("mysql");
const {readFile} = require('fs');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatbay"
});
