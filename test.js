import smarttoken from "./index.js";

const IV = "367af6cc14e1b29b"
const KEY = "367af6cc14e1b29b367af6cc14e1b29b367af6cc14e1b29b367af6cc14e1b29b"

let mysmarttoken=new smarttoken({IV:IV,KEY:KEY});
let token = mysmarttoken.createToken({userid: 1, time: 1641474296307});
console.log(token);

let valObject = mysmarttoken.validToken(token);

if (valObject) {
    console.log(valObject);
}else{
    console.log('wrong token');

}
// import {myEncryption} from "./index.js";
//
// const IV = "367af6cc14e1b29b"
// const KEY = "367af6cc14e1b29b367af6cc14e1b29b367af6cc14e1b29b367af6cc14e1b29b"
//
//
// const val = JSON.stringify({userid: 1, time: 1641474296307})
// let token = myEncryption.encrypt(IV, KEY, val);
// console.log(token);
// //valid my token
// let tokenparse = myEncryption.decrypt(IV, KEY, token);
//
// const valObject = JSON.parse(tokenparse);
// if (valObject) {
//     console.log(valObject);
// }