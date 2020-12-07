import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class EncrDecrService {
  constructor() { }
 
  //The set method is use for encrypt the value.
  set(msg, pass){

    var keySize = 256;
    var salt = CryptoJS.lib.WordArray.random(16);
    // well known algorithm to generate key
    var key = CryptoJS.PBKDF2(pass, salt, {
        keySize: keySize/32,
        iterations: 100
      });
    // random IV
    var iv = CryptoJS.lib.WordArray.random(128/8);      
    // specify everything explicitly
    var encrypted = CryptoJS.AES.encrypt(msg, key, { 
      iv: iv, 
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC        
    });
    // combine everything together in base64 string
    var result = CryptoJS.enc.Base64.stringify(salt.concat(iv).concat(encrypted.ciphertext));
    return result;




    // var key = CryptoJS.enc.Utf8.parse(keys);
    // var iv = CryptoJS.enc.Utf8.parse(keys);
    // var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    // {
    //     keySize: 128 / 8,
    //     iv: iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7
    // });

    // return encrypted.toString();
  }

  //The get method is use for decrypt the value.
//   get(keys, value){  
//         // random salt for derivation
      
 


//     var key = CryptoJS.enc.Utf8.parse(keys);
//     var iv = CryptoJS.enc.Utf8.parse(keys);
//     var decrypted = CryptoJS.AES.decrypt(value, key, {   
//         keySize: 128 / 8,
//         iv: iv,
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.Pkcs7
//     });

//     return decrypted.toString(CryptoJS.enc.Utf8);
//   }
}