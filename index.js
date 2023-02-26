// Question 1
function InstagramPost(
  authorHandle,
  content,
  imageLink,
  numberOfViews,
  numberOfLikes
) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}

// Question 2
let Post1 = new InstagramPost(
  "englama_",
  "Vote Counting Report; 7am Apo Resettlement, Abuja. LABOUR PARTY so far leading the polls here and across Abuja.",
  "https://www.shutterstock.com/image-photo/woman-hijab-holds-her-electronic-voters-2018488211",
  400,
  100
);

let Post2 = new InstagramPost(
  "saharareporters",
  "Peter Obi is the new president of Nigeria",
  "http://www.gettyimages.com/detail/96478054",
  300,
  500
);

// Question 3a
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

const Musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

// Question 3b
function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}

// let jambScore = createJambScores(70, 85, 82, 94);
Musa.jambScore = createJambScores(70, 85, 82, 94);
console.log(Musa);

// Question 4
// Way to clone an object with example
const car1 = {
  brand: "Toyota",
  model: "Corolla 2005",
  color: "red",
};
console.log("Before modifying the cloned objects");
console.log(car1);
// Option 1: Using Object.assign()
const car2 = Object.assign({}, car1);
console.log(car2);
// Option 2: using spread syntax i.e, ...
const car3 = { ...car1 };
console.log(car3);
// Option 3: using the method JSON.parse(JSON.stringify())
const car4 = JSON.parse(JSON.stringify(car1));
console.log(car4);

car2.model = "Camry 2015";
car3.model = "Rav4 2001";
car4.model = "Highlander 2022";
console.log(
  "After removing the reference effect and changing the model value of the original object (car1) "
);
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);

// Question 5
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (const i in presidentialCandidates) {
  console.log(
    presidentialCandidates[i] + " is the presidential candidate of " + i
  );
}
