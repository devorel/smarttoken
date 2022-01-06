const crypto = require('crypto');
// import crypto from "crypto";


//crypto.randomBytes(16).toString('hex').substring(0, 16);
//const ENC_KEY = crypto.randomBytes(32).toString('hex'); // Must be 256 bits (32 characters) 
//const IV_LENGTH = 16; // npmFor AES, this is always 16
class Encryption {
    static encrypt(IV, password, val) {
        try {
            const ENC_KEY = crypto.createHash('sha256').update(password, 'utf8').digest("hex").substring(0, 32);
            let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
            let encrypted = cipher.update(val, 'utf8', 'base64');
            encrypted += cipher.final('base64');
            return encrypted;
        } catch (e) {
            console.error(e);
        }
        return "";
    }

    static decrypt(IV, password, encrypted) {
        try {
            const ENC_KEY = crypto.createHash('sha256').update(password, 'utf8').digest("hex").substring(0, 32);
            let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
            let decrypted = decipher.update(encrypted, 'base64', 'utf8');
            return (decrypted + decipher.final('utf8'));
        } catch (e) {
            console.error(e);
        }
        return "";
    }
}

// export default Encryption
module.exports = Encryption;