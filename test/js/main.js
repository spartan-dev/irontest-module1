//new array
console.log(charactersArray);


//Get the first three elements of the Array without altering the original Array
getFirtsThreeElements=()=>{
    let firstThree = charactersArray.slice(0, 3);
    console.log('The first three',firstThree);
}
//Find all the characters whose species is Aliens and return in new array
getAliens=()=>{
    let onlyAliens = charactersArray.filter(el => el.species != 'Human');
    console.log('the alien is:', onlyAliens);
}
//create a new character and add it to the matrix; add consecutive identifiers (1,2, ... n) to all characters
newCharacter=()=>{
    let charClone = [...charactersArray];
    let Bird = {
        name: "Bird Person",
        status: "Dead",
        species: "Bird",
        type: "",
        gender: "Male"
    }
    charClone.push(Bird);
    charactersIndex = charClone.forEach( (el, idx) => el.id = idx + 1);
    console.log('New Character and id to all:',charClone);
}
//find the family smith (Morty, Beth, Summer, Jerry, Rick)  in a new Array called familySmith
getFamilySmith=()=>{
    let familySmith = charactersArray.filter(el => el.name.includes('Sanchez') || el.name.includes('Smith'));
    console.log('Family Smith:', familySmith);
}
//Jerry and Beth have divorced, remove Jerry from the Array Smith Family, and get a random family member and print all their values
familyBroken=()=>{
    let familySmith = charactersArray.filter(el => el.name.includes('Sanchez') || el.name.includes('Smith'));
    let familyBroken = familySmith.filter(el => !el.name.includes('Jerry'));
    let randomMember = familyBroken[Math.floor(Math.random() * familyBroken.length)];
    let {name, status, species, type, gender} = randomMember;
    console.log('Family without Jerry',familyBroken);    
    console.log(`Random member name:${name}, status:${status}, species:${species}, type:${type}, gender:${gender}`)
}
//The Final test, Rick needs to have more order, the original Array creates a new object, in which you group by status, without altering the original
orderArray=()=>{

    console.log('new order',/** here your new answer*/)
}


//In this part we execute our functions
getFirtsThreeElements();
getAliens();
newCharacter();
getFamilySmith();
familyBroken();
// orderArray();