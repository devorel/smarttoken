# smarttoken

Create smart token

## Install

$ npm install smarttoken
## Usage

first of all You  have to  create iv string , it has must to be 16 length .
```
node  -e "console.log(crypto.randomBytes(16).toString('hex').substring(0, 16))"
```
## Usage
```javascript
const smarttoken = require("smarttoken");

const IV ='XXXXXX' //max 16
const KEY ="MY KEY" //max 32

let mysmarttoken = new smarttoken({IV: IV, KEY: KEY});
let token = mysmarttoken.createToken({userid: 1, time: 1641474296307});
console.log(token);

let valObject = mysmarttoken.validToken(token);

if (valObject) {
    console.log(valObject);
} else {
    console.log('wrong token');

}
//-----------------OR -------------------
const myEncryption = require("./Encryption.js");

const IV = "367af6cc14e1b29b"
const KEY = "367af6cc14e1b29b367af6cc14e1b29b367af6cc14e1b29b367af6cc14e1b29b"


const val = JSON.stringify({userid: 1, time: 1641474296307})
let token = myEncryption.encrypt(IV, KEY, val);
console.log(token);
//valid my token
let tokenparse = myEncryption.decrypt(IV, KEY, token);

const valObject = JSON.parse(tokenparse);
if (valObject) {
    console.log(valObject);
}
```