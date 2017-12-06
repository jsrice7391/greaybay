const connection = require('./db')

function createProduct(name, desc, bid, bidder, seller) {
    
    var query = connection.query(
      "INSERT INTO items SET ?",
      {
        name: name,
        desciption: desc,
        bid: bid,
        bidder: bidder,
        seller, seller
      },
      function(err, res) {
        if(err){
            console.log(err);
        }
        console.log(res.affectedRows + " product inserted!\n");
        connection.end();
      }
    );
}

module.exports = createProduct;

// example of use
// createProduct("used comb", "a fancy metal comb", 50, "ben", "michelle");