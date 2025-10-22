const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirectType= true) {
    this.machineType = isDirectType ? 'direct' : 'reverse';
  }
  findLetterPosition(letter) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const position = alphabet.indexOf(letter.toUpperCase());
    return position;
  }
  findNumericKey(key) {
    const numericKey = [];
    for (let i = 0; i < key.length; i++){
      numericKey.push(this.findLetterPosition(key[i]))
    }
    return numericKey;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericKey = this.findNumericKey(key);
      let ans = '';
      let i = 0;
    while(i < message.length){
      let whileI = 0;
      while (whileI < numericKey.length && i < message.length) {
        let letterPosition = this.findLetterPosition(message[i])
        if (letterPosition !== -1) {
            letterPosition = letterPosition + numericKey[whileI];
            if (letterPosition >= alphabet.length) letterPosition = letterPosition - alphabet.length;
          ans += alphabet[letterPosition];
          whileI++;
        } else ans += message[i];
        i++;
      }
      
    }
    if (this.machineType === 'reverse') ans = ans.split('').reverse().join('');
    return ans;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericKey = this.findNumericKey(key);
      let ans = '';
      let i = 0;
    while(i < encryptedMessage.length){
      let whileI = 0;
      while (whileI < numericKey.length && i < encryptedMessage.length) {
        let letterPosition = this.findLetterPosition(encryptedMessage[i])
        if (letterPosition !== -1) {
            letterPosition = letterPosition - numericKey[whileI];
            if (letterPosition < 0) letterPosition = alphabet.length + letterPosition;
          ans += alphabet[letterPosition];
          whileI++;
        } else ans += encryptedMessage[i];
        i++;
      }
      
    }
    if (this.machineType === 'reverse') ans = ans.split('').reverse().join('')
    return ans;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
