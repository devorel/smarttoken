import myEncryption from "./Encryption.js";

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

export default Smarttoken
export {myEncryption}