// import myEncryption from "./Encryption.js";
const myEncryption =require("./Encryption.js")
class Smarttoken {

    constructor(config) {
        this.IV = config.IV;
        this.KEY = config.KEY;
    }

    createToken(obj) {
        return myEncryption.encrypt(this.IV, this.KEY, JSON.stringify(obj));
    }

    validToken(token) {
        //valid my token
        let tokenparse = myEncryption.decrypt(this.IV, this.KEY, token);
        try {
            const valObject = JSON.parse(tokenparse);
            if (valObject) {
                return valObject
            }
        } catch (e) {
            return false;
        }
    }
}
module.exports = Smarttoken
// export default Smarttoken
// export {myEncryption}