var bcypher = require('blockcypher');
var bitcoin = require("bitcoinjs-lib");
var buffer  = require('buffer');

network = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

const key = bitcoin.ECPair.fromWIF('cRqBQhx7ZLQZKrLohRukyTQZCgBqN187nn7VKHHC1cE4M95BqwAH', network);


var source = {
    private : "7ecc4629e36353c756064c0c2d36597df6fc37dee4069ebd07aa845a8d08d075",
    public  : "031b822b96c603dddd5ccf2655ac6bf04b7225dc3f02a15324063449a23510540c",
    address : "mmSBomF54QBkuHEgNSvAnqh6GtgbDqCAaN",
    wif: "cRqBQhx7ZLQZKrLohRukyTQZCgBqN187nn7VKHHC1cE4M95BqwAH"
};
    
//uses my blockcypher token.
var bcapi = new bcypher('btc','test3','bb4667547770483bb1efb2c1ac357b48');

var newtx = null;

//For printing JSON objects.
function printResponse(err, data) {
  if (err !== null) {
    console.log(err);
  } else {
    var keys = Object.keys(data);
    for (var i=0; i<keys.length; i++) {
        console.log(keys[i] + ": " +  data[keys[i]]);
    }
  }
}

//Signs a the transaction.
function sign(err, data) {
    if (err !== null) {
        console.log(err);
    } else {
        var tx = data;
        console.log("Recieved: " + data.tx.received);
        console.log("Transaction recieved, signing...");
        
        
        tx.pubkeys     = [];
        tx.signatures  = data.tosign.map(function(tosign) {
            tx.pubkeys.push(source.public);
            var signature = key.sign(Buffer.from(tosign, "hex"));
            return signature.toString("hex");
        });
        
        //Attempt to send the signed transaction.
        console.log("\nSending signed transaction...");
        bcapi.sendTX(tx, function(err, data){
              if (err !== null) {
                console.log(err);
              } else {
                console.log("Recieved: " + data.tx.received);
                console.log("\nTransaction Success.");
              }
            
        });
    }
}

//input address is randomly generated (and took some coins from a faucet).
//output address is the faucet address.
//value is the amount to send.
var newtx = {
        "inputs": [{"addresses": ["mmSBomF54QBkuHEgNSvAnqh6GtgbDqCAaN"]}],
        "outputs": [{"addresses": ["2NGZrVvZG92qGYqzTLjCAewvPZ7JE8S8VxE"], "value": 2500}]
};

console.log("\nGetting balance from my testnet address:");
//Get balance of my bitcoin address.
bcapi.getAddrBal("mmSBomF54QBkuHEgNSvAnqh6GtgbDqCAaN", "", 
function(err, data){
    //use callback so things happen in order.
    printResponse(err, data);
    
    console.log("\nStarting new transaction...");
    //Make a new transfer, pass to sign.
    bcapi.newTX(newtx, sign);
});

