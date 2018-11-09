## Project for job application.
## Node_Modules:<br/>
The following commands install every module in this folder.  
* npm install blockcypher
* npm install bitcoinjs-lib@3.2.1  
*Note: the bitcoinjs-lib version matters. Key signing doesn't work for blockcypher in the latest version.*
## blockcypher_project.js:<br/> 
Makes a transaction from my testnet address to the faucet I got the coins from.
## balance.html:<br/>
* Simple html page that asks blockcypher api for bitcoin balance from a given address.
* Can also generate a random testnet address.
* Mainly used for testing.  
## How To:  
Open CMD (windows) or terminal (linux) to testnet_bitcoin_project folder.
Enter this command: Node blockcypher_project.js  
To use balance.html, just open it.
