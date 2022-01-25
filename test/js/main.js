//new array
let newArray = []

//Get the first three elements of the Array without altering the original Array
getFirtsThreeElements=()=>{
    //...write your code here
    let elements = char.slice(0,3)
    console.log('The first three',elements)
}

//Find all the characters whose species is Aliens nad return in new array
getAliens=()=>{
    //...write your code here
    let aliens = char.filter(function(char){
        return char.species === 'Alien'
    })
    console.log('the alien is:',aliens)
}

//Create a new character and add it to the matrix and add consecutive identifiers (1,2, ... n) to all characters
newCharacter=()=>{
    //...write your code here
    let newCharacter = {
        name: 'New Char',
        status: 'Alive',
        species: 'Human',
        type: 'Experiment',
        gender: 'Male'
    }
    char.push(newCharacter)

    for(let i = 0; i < char.length; i++){
        char[i].id = i + 1
    }

    console.log('New Charanter and id to all:',newCharacter)
}

//find the family smith (Morty, Beth, Summer, Jerry, Rick) in a new Array called familySmith
getFamilySmith=()=>{
    //...write your code here
    let familySmith = char.filter(function(char){
        return char.name.includes('Smith')
    })

    console.log('Family Smith:',familySmith)
}

//Jerry and Beth have divorced, remove Jerry from the Array Smith Family, and get a random family member and print all their values
familyBroken=()=>{
    //...write your code here
    let newArray = char.filter(function(char){
        return char.name !== 'Jerry Smith'
    })

    let randomFamily = newArray[Math.floor(Math.random() * newArray.length)]

    console.log('Family without Jerry',newArray)
    console.log('Random member name: ',randomFamily.name,'status: ',randomFamily.status,'species: ', randomFamily.species,'type: ',randomFamily.species,'gender: ',randomFamily.gender)
}
//The Final test, Rick needs to have more order, the original Array creates a new object, in which you group by status, without altering the original
orderArray=()=>{
     //...write your code here
     let newArray = char.reduce(function(acc,curr){
        if(!acc[curr.status]){
            acc[curr.status] = []
        }
        acc[curr.status].push(curr)
        return acc
    },{})
    console.log('new order',newArray)
}

//In this part we execute our functions

getFirtsThreeElements()
getAliens()
newCharacter()
getFamilySmith()
familyBroken()
orderArray()


// another problems 😈 <--- bborrar este emoji en ccaso de crash

/*Palindrome

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers. Famous examples include "A man, a plan, a canal, Panama!", "Amor, Roma", "race car", " stack cats","step on no pets","taco cat", " put it up", "Was it a car or a cat I saw?" and "No 'x' in Nixon".

Using your favorite programming language, write a small function to check if a passed String is a palindrome or not.

Example:

IsPalindrome("Anita lava la tina") returns true
IsPalindrome("Anita lava la ropa") returns false
IsPalindrome("Ana") returns true */

// Palindrome
palindrome = (str) => {
    let reverse = str.split('').reverse().join('')
    return reverse === str
}

console.log(palindrome('Anita lava la tina'))
console.log(palindrome('Anita lava la ropa'))

/*
Write a program which accepts an array of 3 integers and sort them in ascending order.

Example:

1) if input array is [ 39, 26, 28]  then
output will be 26, 28, 39.

2) if input array is [3934, 2426, 4628 ] then
output will be 2426 3934 4628.

*/
let sortArray = (arr) => {
    return arr.sort((a, b) => a - b)
}

console.log(sortArray([39, 26, 28]))
console.log(sortArray([3934, 2426, 4628]))

/*
Write a program to takes input two matrix(3*3) array and calculate the multiplication of both matrix.
*/
//input your code
let matrix1 = [
    [4, 4, 4],
    [2, 2, 2],
    [3, 3, 3]
]

let matrix2 = [
    [1, 4, 3],
    [3, 2, 4],
    [1, 2, 4]
]

matrixMultiplication = (matrix1, matrix2) => {
    let result = []
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = []
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j]
            }
            result[i][j] = sum
        }
    }
    return result
}

console.log(matrixMultiplication(matrix1, matrix2))

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

/*
Write a program which takes integer number and prints the table of this number.
*/
//input your code

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

let table = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(num + ' * ' + i + ' = ' + num * i)
    }
}

console.log(table(2))
console.log(table(4))
