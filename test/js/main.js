//new array
var na = per;

//Get the first three elements of the Array without altering the original Array
getFirtsThreeElements = () => {
  //...write your code here
  let [a, b, c] = na;
  console.log("The first three" /** here your new answer*/);
};
//Find all the characters whose species is Aliens nad return in new array
getAliens = () => {
  //...write your code here
  let res = [];
  na.forEach(element => {
    if (element.species === "Alien") res.push(element);
  });
  console.log("the alien is:", res);
};
//create a new character and add it to the matrix and add consecutive identifiers (1,2, ... n) to all characters
newCharacter = () => {
  //...write your code here
  let newCharacter = {
    name: "Mr. Poopy Butthole",
    species: "Alien?",
    status: "Dead",
    type: ""
  };
  na.push(newCharacter);
  for (let index = 0; index < na.length; index++) {
    const element = na[index];
    element.id = index + 1;
  }
  console.log("New Charanter and id to all:", na[na.length - 1], na);
};
//find the family smith (Morty, Beth, Summer, Jerry, Rick)  in a new Array called familySmith
getFamilySmith = () => {
  //...write your code here
  let familySmith = [];
  na.forEach(el => {
    if (el.name.includes("Smith") || el.name.includes("Sanchez"))
      familySmith.push(el);
  });
  console.log("Family Smith:", familySmith);
};
//Jerry and Beth have divorced, remove Jerry from the Array Smith Family, and get a random family member and print all their values
familyBroken = () => {
  //...write your code here

  console.log("Family without Jerry" /** here your new answer*/);
  console.log("Random member name:, status:, species:, type:, gender:");
};
//The Final test, Rick needs to have more order, the original Array creates a new object, in which you group by status, without altering the original
orderArray = () => {
  //...write your code here

  console.log("new order" /** here your new answer*/);
};

//In this part we execute our functions
