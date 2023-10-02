const keytokenModel = require("../models/keytoken.model")

class KeyTokenService {
    static createKeyToken = async (userId, publicKey) => {
        try {
            const publicKeyStr = publicKey.toString()
            const tokens = await keytokenModel.create({
                userId,
                publicKey: publicKeyStr
            })

            return tokens?.publicKey || null
        } catch (err) {
            return err
        }     
    }
}

module.exports = KeyTokenService
