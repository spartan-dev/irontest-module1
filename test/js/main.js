//new array
var na = per;

//Get the first three elements of the Array without altering the original Array
getFirtsThreeElements = () => {
  //...write your code here
  let [a, b, c] = na;
  console.log("The first three", a, b, c);
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
  return familySmith;
};
//Jerry and Beth have divorced, remove Jerry from the Array Smith Family, and get a random family member and print all their values
familyBroken = () => {
  //...write your code here
  let fs = getFamilySmith();
  for (let index = 0; index < fs.length; index++) {
    const element = fs[index];
    if (element.name.includes("Jerry")) {
      let right_side = fs.splice(index, fs.length);
      fs.concat(right_side);
    }
  }
  console.log("Family without Jerry", fs);
  let random = fs[~~(Math.random() * fs.length)];
  console.log(
    `Random member name:${random.name}, status:${random.status}, species${random.species}, type:${random.type}, gender:${random.gender}`
  );
};
//The Final test, Rick needs to have more order, the original Array creates a new object, in which you group by status, without altering the original
orderArray = () => {
  //...write your code here
  let buckets = { dead: [], alive: [], unk: [] };
  //naive approach

  na.forEach(element => {
    if (element.status === "Alive") buckets.alive.push(element);
    if (element.status === "Dead") buckets.dead.push(element);
    if (element.status === "unknown") buckets.unk.push(element);
  });
  console.log(`new order:\nAlive:\n${buckets.alive}\nDead:\n${buckets.dead}\n
  \ Unkown:\n${buckets.unk}`);
};

//In this part we execute our functions
