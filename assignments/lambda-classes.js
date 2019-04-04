// CODE here for your Lambda Classes
class Person {
  constructor(persAttrs) {
    this.name = persAttrs.name;
    this.age = persAttrs.age;
    this.location = persAttrs.location;
    this.gender = persAttrs.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructors extends Person {
  constructor(insAttrs) {
    super(insAttrs);
    this.specialty = insAttrs.specialty;
    this.favLanguage = insAttrs.favLanguage;
    this.catchPhrase = insAttrs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Students extends Person {
  constructor(studAttrs) {
    super(studAttrs);
    this.previousBackground = studAttrs.previousBackground;
    this.className = studAttrs.className;
    this.favSubject = studAttrs.favSubject;
  }

  listSubjects() {
    console.log(...this.favSubject);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManagers extends Instructors {
  constructor(projAttrs) {
    super(projAttrs);
    this.gradClassName = projAttrs.gradClassName;
    this.favInstructor = projAttrs.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

/*********************** Classes above and objects below *******************************************/
//Instructor Objects
const Josh = new Instructors({
  name: 'Josh',
  location: 'Kentucky',
  age: 32,
  gender: 'male',
  specialty: 'Front-end',
  favLanguage: 'JavaScript',
  catchPhrase: `Don't forget the homies`
});

const Neil = new Instructors({
  name: 'Neil',
  location: 'Connecticut',
  age: 29,
  gender: 'male',
  specialty: 'Back-end',
  favLanguage: 'Python',
  catchPhrase: `Nut up or shut up`
});

// Student Objects
const David = new Students({
  name: 'David',
  location: 'New Jersey',
  age: 28,
  gender: 'male',
  previousBackground: "IT-Tech",
  className: "WEB19",
  favSubject: ["JavaScript", "Material.io"]
});

const Tashi = new Students({
  name: 'Tashi',
  location: 'Indiana',
  age: 30,
  gender: 'male',
  previousBackground: "Master Chef",
  className: "WEB17",
  favSubject: ["Python", "Django"]
});

//Project Manager Objects
const Brad = new ProjectManagers({
  name: 'Brad',
  location: 'Siberia',
  age: 23,
  gender: 'male',
  gradClassName: "Web12",
  favInstructor: "Josh"
});

const Gustav = new ProjectManagers({
  name: 'Gustav',
  location: 'California',
  age: 35,
  gender: 'male',
  gradClassName: "Web12",
  favInstructor: "Josh"
});
/*********************** Method Tests *******************************************/

//Person Test
David.speak();

//Project Manager Tests
Gustav.standUp("Web19_Gustav");
Brad.debugCode(David, "math");

//Instructor Test
Brad.demo("JavaScript");
Gustav.grade(Tashi, "Python");

//Student Test
David.listSubjects();
Tashi.PRAssignment("Python");
David.sprintChallenge("JS IV");