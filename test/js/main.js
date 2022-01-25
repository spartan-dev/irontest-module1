// const characters = [
//   {
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Male",
//   },

//   {
//     name: "Morty Smith",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Male",
//   },

//   {
//     name: "Summer Smith",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Female",
//   },

//   {
//     name: "Beth Smith",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Female",
//   },

//   {
//     name: "Jerry Smith",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Male",
//   },

//   {
//     name: "Abadango Cluster Princess",
//     status: "Alive",
//     species: "Alien",
//     type: "",
//     gender: "Female",
//   },

//   {
//     name: "Abradolf Lincler",
//     status: "unknown",
//     species: "Human",
//     type: "Genetic experiment",
//     gender: "Male",
//   },

//   {
//     name: "Adjudicator Rick",
//     status: "Dead",
//     species: "Human",
//     type: "",
//     gender: "Male",
//   },

//   {
//     name: "Agency Director",
//     status: "Dead",
//     species: "Human",
//     type: "",
//     gender: "Male",
//   },
//   {
//     name: "Alan Rails",
//     status: "Dead",
//     species: "Human",
//     type: "Superhuman (Ghost trains summoner)",
//     gender: "Male",
//   },
// ];

//Get the first three elements of the Array without altering the original Array
getFirtsThreeElements = (array) => {
  return array.slice(0, 3);
};
//Find all the characters whose species is Aliens nad return in new array
getAliens = (array) => {
  return array.filter((a) => a.species === "Alien");
};
//create a new character and add it to the matrix and add consecutive identifiers (1,2, ... n) to all characters
newCharacter = (array) => {
  const newArr = array;

  const newChar = {
    name: "Frank Tes",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
  };

  newArr.push(newChar);

  for (let i = 0; i < newArr.length; i++) {
    newArr[i].identifier = i;
  }

  console.log("New Charanter and id to all:", newArr);
  return newArr;
};
//find the family smith (Morty, Beth, Summer, Jerry, Rick)  in a new Array called familySmith
getFamilySmith = () => {
  //...write your code here

  const familySmith = array.filter((a) => a.name.includes("Smith"));
  console.log("Family Smith:", familySmith);
};

//Jerry and Beth have divorced, remove Jerry from the Array Smith Family, and get a random family member and print all their values
familyBroken = (array) => {
  const newFamilySmith = array.filter(
    (a) => a.name.includes("Smith") && !a.name.includes("Jerry")
  );

  const randomNumber = Math.floor(Math.random() * newFamilySmith.length - 1);

  const randomMember = newFamilySmith[randomNumber];

  console.log("RANDOM MEMBER", randomMember);

  console.log("Family without Jerry", newFamilySmith);
  console.log(
    `Random member name:${randomMember.name}, status:${randomMember.status}, species:${randomMember.species}, type:${randomMember.type}, gender:${randomMember.gender}`
  );

  return newFamilySmith;
};
//The Final test, Rick needs to have more order, the original Array creates a new object, in which you group by status, without altering the original
orderArray = () => {
  const membersGrouped = {
    alive: [],
    dead: [],
  };

  array.filter((element) => {
    if (element.status.includes("Alive")) {
      membersGrouped.alive.push(element);
    } else {
      membersGrouped.dead.push(element);
    }
  });

  console.log("new order", membersGrouped);
};

getFirtsThreeElements(characters);
getAliens(characters);
newCharacter(characters);
getFamilySmith(characters);
familyBroken(characters);
orderArray(characters);

//In this part we execute our functions

// another problems 😈 <--- bborrar este emoji en ccaso de crash

/*Palindrome

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers. Famous examples include "A man, a plan, a canal, Panama!", "Amor, Roma", "race car", " stack cats","step on no pets","taco cat", " put it up", "Was it a car or a cat I saw?" and "No 'x' in Nixon".

Using your favorite programming language, write a small function to check if a passed String is a palindrome or not.

Example:

IsPalindrome("Anita lava la tina") returns true
IsPalindrome("Anita lava la ropa") returns false
IsPalindrome("Ana") returns true*/
getPalindrome = (str) => {
  const strVerse = str.split(" ").join("").toLowerCase();
  const strReverse = str
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  console.log(strVerse);
  console.log(strReverse);
  if (strVerse === strReverse) {
    return true;
  } else {
    return false;
  }
};

//Write a program which accepts an array of 3 integers and sort them in ascending order.
orderAscendingNumbers = (array) => {
  if (!array.length) {
    return "Provide a array with values";
  }

  const arraySorted = array.sort((a, b) => a - b);
  return arraySorted;
};

/*
Example:

1) if input array is [ 39, 26, 28]  then 
output will be 26, 28, 39.*/

orderAscendingNumbers = (array) => {
  if (!array.length) {
    return "Provide a array with values";
  }

  const arraySorted = array.sort((a, b) => b - a);
  return arraySorted;
};

/*
2) if input array is [3934, 2426, 4628 ] then 
output will be 2426 3934 4628.
Write a program to takes input two matrix(3*3) array and calculate the multiplication of both matrix.
*/
//input your code

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
