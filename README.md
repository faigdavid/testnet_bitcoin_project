Project for job application.

Nodejs libraries:
  npm install blockcypher
  npm install bitcoinjs-lib@3.2.1
    
Note: the bitcoinjs-lib version matters. Key signing doesn't work for blockcypher in the latest version.

blockcypher_project.js:
  Makes a transaction from my testnet address to the faucet I got the coins from.
  
balance.html:
  Simple html page that asks blockcypher api for bitcoin balance from a given address.
  Can also generate a random testnet address.
  Mainly used for testing.
  
  
