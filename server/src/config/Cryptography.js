const crypto = require('crypto');
const SystemParams = require('../utils/SystemParams');

module.exports = {
  async Encrypt(string) {
    const { params } = await SystemParams();
    let result = crypto.pbkdf2Sync(string, params.salt, 100000, 512, 'sha512');
    return result.toString('hex');
  }
};
