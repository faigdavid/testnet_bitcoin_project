var bcypher = require('blockcypher');
var bitcoin = require("bitcoinjs-lib");
var buffer  = require('buffer');
var EC = require('elliptic');


const key = bitcoin.ECPair.fromWIF('L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy');


var source = {
    private : "282942398d8acf0b8d3de383e351f9350f58c201232efb44b807ac5e030e1edd",
    public  : "03b0df78845e71b28f988722dca4787d28fe6790f64614416c9183bd4f57e3c907",
    address : "n23NcwTqygTdAhrrxip7sdwMpeKbNNF4ZA"
};
    
//uses my blockcypher token.
var bcapi = new bcypher('btc','test3','bb4667547770483bb1efb2c1ac357b48');

var newtx = null;

function printResponse(err, data) {
  if (err !== null) {
    console.log(err);
  } else {
    console.log(data);
  }
}


function printResponse(err, data) {
  if (err !== null) {
    console.log(err);
  } else {
    console.log(data);
  }
}

function sign(err, data) {
    if (err !== null) {
        console.log(err);
    } else {
        
        newtx = data;
        console.log(data);
        newtx.pubkeys     = [];
        newtx.signatures  = data.tosign.map(function(tosign) {
            newtx.pubkeys.push(source.public);
            var signature = key.sign(Buffer.from(tosign, "hex"));
            return signature.toString("hex");
        });
        console.log(newtx);
        bcapi.sendTX(newtx, printResponse);
    }
}
//input address is randomly generated (and took some coins from a faucet).
//output address is the faucet address.
var newtx = {
        "inputs": [{"addresses": ["n23NcwTqygTdAhrrxip7sdwMpeKbNNF4ZA"]}],
        "outputs": [{"addresses": ["2NGZrVvZG92qGYqzTLjCAewvPZ7JE8S8VxE"], "value": 2500}]
};



bcapi.getAddrBal("n23NcwTqygTdAhrrxip7sdwMpeKbNNF4ZA", "", printResponse);

bcapi.newTX(newtx, sign);