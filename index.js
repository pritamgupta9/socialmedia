// const fs = require('fs');
// const os = require('os');
// // const readstream = fs.createReadStream('demo.txt', 'utf8');


// // readstream.on('data', (chunk) => {
// //     console.log('New chunk received:');
// //     console.log(chunk);
// // });
// // readstream.on('end', () => {
// //     console.log('No more data to read.');
// // }
// // );
// // readstream.on('error', (err) => {
// //     console.error('Error reading file:', err);
// // });

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.hostname());
// console.log(os.release());

// // path modules 
// const path = require('path');

// console.log(path.basename(__filename)); 
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.join(__dirname,"backend","models","user.model.js"));
// console.log(path.resolve(__dirname,"../GTA"));

// // prints the name of the current file

// // url 
// const url = require('url');
// const myUrl = new URL('https://www.example.com:8000/path/name?query=string#hash');
// console.log(myUrl.href); // Full URL
// console.log(myUrl.origin); // Protocol + Host
// console.log(myUrl.pathname); // Path
// console.log(myUrl.search); // Query string
// console.log(myUrl.hash); // Hash
// console.log(myUrl.host); // Host with port


// // 5th modules events

// // const EventEmitter = require('events');
// // const myEmitter = new EventEmitter();
// // myEmitter.once('greet', (name) => {
// //     console.log('Hello, World!', name);
// // });

// // myEmitter.emit('greet', 'Pritam');
// // myEmitter.emit('greet', 'Pritam');
// // myEmitter.emit('greet', 'Pritam');

// // 6 cryptomodule 

// // preetam =>kfnsklmwklnlfsnxvldfndlkfdklldkd
// const crypto = require('crypto');
// const alg = 'aes-256-cbc';
// const key = crypto.randomBytes(32);

// const iv = crypto.randomBytes(16);

// function encrpt(text) {
//     const cipher = crypto.createCipheriv(alg, key, iv);
//     let encrypted = cipher.update(text, 'utf8', 'hex');
//     encrypted += cipher.final('hex');

//     return encrypted;
// }

// function decrypt(encryptedText) {
//     const decipher = crypto.createDecipheriv(alg, key, iv);
//     let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// }

// const text = 'Hello, World!';
// const encryptedText = encrpt(text);
// console.log('Encrypted:', encryptedText);
// const decryptedText = decrypt(encryptedText);
// console.log('Decrypted:', decryptedText);

// two pointer 

// for(){
//     // o(n)
//     for(){
//         // o(n^2)
//         for(){
//             // o(n^3)
//         }
//     }
// }

// find  sum of two numbers in an sorted array equal to target
// brute force approch
function findSum(arr, target){
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
} 
// two pointer approch
function findSumTwoPointer(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        const sum = arr[left] + arr[right];
        if(sum === target) {
            return [arr[left], arr[right]];
        } else if(sum < target) {
            left++;
        } else {
            right--;
        }
    }
}

// 3sum brute force 
function threeSum(arr,target){
    let arr1 = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            for(let k = j + 1; k < arr.length; k++) {
                if(arr[i] + arr[j] + arr[k] === target) {
                    arr1.push([arr[i], arr[j], arr[k]])
                }
            }
        }
    }
    // return arr1;
    if(arr1.length === 0) {
        return null;
    }
    return arr1;
}

// two pointer approch 
// find sum of all triplets in array that sum to 0 
function threeSumTwoPointer(arr) {
    arr.sort((a, b) => a - b);
    const result = [];
    for(let i = 0; i < arr.length - 2; i++) {
        if(i > 0 && arr[i] === arr[i - 1]) continue; // skip duplicates
        let left = i + 1;
        let right = arr.length - 1;
        while(left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if(sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                while(left < right && arr[left] === arr[left + 1]) left++; // skip duplicates
                while(left < right && arr[right] === arr[right - 1]) right--; // skip duplicates
                left++;
                right--;
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

// check whether a string is palindrome or not
// appa = "appa" true 
// string = "appa";=== string.reverse()
// let newStr = ''
// for(let i = string.length-1;i<=0; i--) {
//     newStr += string[i];

// }  

// longest substring without repeating characters
function longestSubstringWithoutRepeating(s) {
    const charIndexMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (charIndexMap.has(s[right])) {
            left = Math.max(charIndexMap.get(s[right]) + 1, left);
        }
        charIndexMap.set(s[right], right);
        console.log(charIndexMap, "qqq", left, right, maxLength , right - left + 1);
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    // console.log(charIndexMap,"qqq",maxLength);
    
    return maxLength;
}
// Example usage:
const inputString = "abcabcbb";
const result = longestSubstringWithoutRepeating(inputString);
console.log(`Length of the longest substring without repeating characters: ${result}`);


// what is stack 
// implement stack using array
// do all operations of stack
// push /pop/peek/size/isEmpty

// what is queue
// implement queue using array
// do all operations of queue
// enqueue/dequeue/peek/size/isEmpty

// what is linked list
// implement linked list
// do all operations of linked list
// insert/delete/search/print
// reverse linked list

// 30 string array easy 

