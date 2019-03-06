## Performs simple bitcoin transfers.
## Node_Modules:<br/>
The following commands install every module in this folder.  
* npm install blockcypher
* npm install bitcoinjs-lib@3.2.1  
*Note: the bitcoinjs-lib version matters. Key signing doesn't work for blockcypher in the latest version.*
## blockcypher_project.js:<br/> 
* Gets the balance of my tesnet address.
* Makes a transaction from my testnet address to the faucet I got the coins from.
## balance.html:<br/>
* Simple html page that asks blockcypher api for bitcoin balance from a given address.
* Can also generate a random testnet address.
* Mainly used for testing.  
## How To:  
To run blockcypher_project.js, you need to use Nodejs.
Open CMD (windows) or terminal (linux) to testnet_bitcoin_project folder, then enter:  
```Node blockcypher_project.js```  
To use balance.html, just open it.
