'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('path');
var fs = _interopDefault(require('fs'));
var crypto = _interopDefault(require('crypto'));

const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16);

function checkKey(key) {
  if(!key) {
    throw new Error('Missing key.')
  }

  if(key.length !== 32) {
    throw new Error('Key must be 32 characters.')
  }
}

async function encryptFile(inFile, outFile, key, opts = {}) {
  checkKey(key);

  try {
    const contents = fs.readFileSync(inFile);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(contents), cipher.final()]);
    const out = {
      iv: iv.toString('hex'),
      content: encrypted.toString('hex'),
    };

    if(outFile) {
      fs.writeFileSync(outFile, JSON.stringify(out));
    }
  } catch (e) {
    console.error(e);
  }
}

function decryptFile(inFile, outFile, key, opts = { mode: 'binary' }) {
  checkKey(key);

  try {
    const contents = fs.readFileSync(inFile);
    const hashed = JSON.parse(contents);
    const decipher = crypto
      .createDecipheriv(algorithm, key, Buffer.from(hashed.iv, 'hex'));
    const decrypted = Buffer
      .concat([
        decipher.update(Buffer.from(hashed.content, 'hex')), decipher.final()
      ]);
    const out = new Buffer(decrypted.toString(opts.mode), opts.mode)
      .toString(opts.mode);

    if(outFile) {
      fs.writeFileSync(
        outFile,
        out,
        { encoding: opts.mode }
      );
    } else {
      return out
    }
  } catch (e) {
    console.error(e);
  }
}

var encrypt = { encryptFile, decryptFile };

const { encryptFile: encryptFile$1, decryptFile: decryptFile$1 } = encrypt;

var cjs = {
  encryptFile: encryptFile$1,
  decryptFile: decryptFile$1,
};

module.exports = cjs;
