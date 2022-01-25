const chars = require('./data')


//Get the first three elements of the Array without altering the original Array
getFirtsThreeElements=()=>{
    console.log('The first three',chars.slice(0,3))
}
//Find all the characters whose species is Aliens nad return in new array
getAliens=()=>{
    //...write your code here
    if(chars.length===0){
        return null
    } else {
        const alienArr = []
        for(let i = 0; i < chars.length; i++){
            if(chars[i].species === 'Alien'){
                alienArr.push(chars[i])
            }
        }
        console.log('the alien is:',alienArr)
        return alienArr
    }
}
//create a new character and add it to the matrix and add consecutive identifiers (1,2, ... n) to all characters
newCharacter=()=>{
    //...write your code here

    console.log('New Charanter and id to all:',/** here your new answer*/)
}
//find the family smith (Morty, Beth, Summer, Jerry, Rick)  in a new Array called familySmith
getFamilySmith=()=>{
    //...write your code here
    const familySmith = [];
    for (let i = 0; i < chars.length; i++){
        if(chars[i].name.includes('Smith')){
            familySmith.push(chars[i])
        }
    }
    console.log('Family Smith:',familySmith)
    return familySmith
}
//Jerry and Beth have divorced, remove Jerry from the Array Smith Family, and get a random family member and print all their values
familyBroken=()=>{
    //...write your code here
    for(i = 0; i<smithFam.length; i++){
        if(smithFam[i].name.includes('Jerry')){
            smithFam.splice(i,1)
        }
    }
    console.log('Family without Jerry',smithFam)
    let min = 0;
    let max = smithFam.length -1;
    let randomChar = Math.round(Math.random() * (max - min) + min);
    console.log(`Random member name: ${smithFam[randomChar].name}, status: ${smithFam[randomChar].status}, species: ${smithFam[randomChar].species}, type: ${smithFam[randomChar].type}, gender: ${smithFam[randomChar].gender}`);
}
//The Final test, Rick needs to have more order, the original Array creates a new object, in which you group by status, without altering the original
orderArray=()=>{
     //...write your code here
    let aliveChar = [];
    let deadChar = [];
    let unknownStatus = [];

    for(i=0; i < chars.length; i++){
        switch(chars[i].status){
            case 'Alive':
                aliveChar.push(chars[i])
                break;
            case 'Dead':
                deadChar.push(chars[i])
                break;
            default:
                unknownStatus.push(chars[i])
        }
    }

    let finalArr = [...aliveChar, ...deadChar, ...unknownStatus];

    console.log('new order',finalArr)
    return finalArr;
}


//In this part we execute our functions
getFirtsThreeElements(chars);
const alien = getAliens(chars);
const smithFam = getFamilySmith(chars);
familyBroken(smithFam)
orderArray(chars);


// another problems 😈 <--- bborrar este emoji en ccaso de crash

/*Palindrome

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers. Famous examples include "A man, a plan, a canal, Panama!", "Amor, Roma", "race car", " stack cats","step on no pets","taco cat", " put it up", "Was it a car or a cat I saw?" and "No 'x' in Nixon".

Using your favorite programming language, write a small function to check if a passed String is a palindrome or not.

Example:

IsPalindrome("Anita lava la tina") returns true
IsPalindrome("Anita lava la ropa") returns false
IsPalindrome("Ana") returns true
Write a program which accepts an array of 3 integers and sort them in ascending order.
*/
//input your code
function IsPalindrome(str) {
    let escape = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(escape, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

console.log(IsPalindrome("Anita lava la tina"))
console.log(IsPalindrome("Anita lava la ropa"))
console.log(IsPalindrome('step on no pets'))




/*
Example:

1) if input array is [ 39, 26, 28]  then 
output will be 26, 28, 39.

2) if input array is [3934, 2426, 4628 ] then 
output will be 2426 3934 4628.
Write a program to takes input two matrix(3*3) array and calculate the multiplication of both matrix.
*/
//input your code
function sortNumbers(n1, n2, n3){
    let arr = [n1, n2, n3]
    return arr.sort(function(a, b){return a-b});
}

console.log(sortNumbers(1,100, 20));
console.log(sortNumbers(39, 26, 28));



/*
Example :

1. If two matrix are :
Matrix 1st :
4 4 4
2 2 2
3 3 3
Matrix 2nd :
1 4 3
3 2 4
1 2 4
then the multiplication of both matrix will be:
20 32 44
10 16 22
15 24 33

Notice that: 
20 = 4 * 1 + 4 * 3 + 4 * 1
10 = 2 * 1 + 2 * 3 + 2 * 1
15 = 3 * 1 + 3 * 3 + 3 * 1
Write a program which takes integer number and prints the table of this number.
*/
//input your code
function multiplyMatrix(obj1, obj2){
    let newObj = {};
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            
        }
    }
}

/*
Example :

1.If user gives input 2 then output table should be in this format :
2*1 = 2
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
2*6 = 12
2*7 = 14
2*8 = 16
2*9 = 18
2*10 = 20

2.If user gives input 4 then output table should be in this format:
4*1 = 4
4*2 = 8
4*3 = 12
4*4 = 16
4*5 = 20
4*6 = 24
4*7 = 28
4*8 = 32
4*9 = 36
4*10 = 40
*/


//input your code