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
    console.log(`Today we are learning about ${subject}`);
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
    console.log(this.favSubject);
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
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

  debugCode(studentObj, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}