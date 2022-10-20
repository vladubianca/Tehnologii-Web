class Person {
  name; //daca nu specificam nimic va fi public, daca punem # in fata va fi private

  constructor(pName) {
    this.name = pName;
  }

  introduceSelf() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

class Teacher extends Person {
  subject;
  constructor(pName, pSubject) {
    super(pName);
    this.subject = pSubject;
  }

  introduceSelf() {
    console.log(
      `Hi, my name is ${this.name} and I will be your ${this.subject} teacher.`
    );
  }

  grade(paper) {
    let number = Math.random();
    console.log(number * 10);
    console.log(Math.ceil(number * 10));
    const grade = Math.floor(10 * number);
    //Math.random() returneaza un numar aleatoriu intre 0 si 1
    //Math.floor() pentru rotunjiri prin lipsa
    //Math.ceil() pentru rotuniri prin adaos
    return grade;
  }
}

class Student extends Person {
  #year; //atribut private

  static #count = 0; //variabila statica, este la nivelul clasei, nu primeste this

  constructor(pName, pYear) {
    super(pName);
    this.#year = pYear;
    Student.#count++;
  }

  introduceSelf() {
    console.log(`Hi, my name is ${this.name} and I am in year ${this.#year}`);
  }

  get getYear() {
    return this.#year;
  }

  set setYear(pYear) {
    if (typeof pYear == "number" && pYear > 0) {
      this.#year = pYear;
    } else {
      throw new Error("Year should be > 0");
    }
  }

  static get getCount() {
    return Student.#count;
  }
}
const Bianca = new Person("Bianca");
Bianca.introduceSelf();

const teacher = new Teacher("Teacher", "TW");
teacher.introduceSelf();

console.log(teacher.grade("test"));

console.log("Count:" + Student.getCount);

const student = new Student("Student", 3);
console.log("Count:" + Student.getCount);
student.introduceSelf();

const student2 = new Student("Student", 3);
console.log("Count:" + Student.getCount);

console.log(student.getYear);
student.setYear = 2;
//get si set nu ii apelam cu () ca restul functiilor!
console.log(student.getYear);

//aici doar definim o functie
Student.prototype.whichYear = function () {
  console.log(`Hi, I am in year ${this.getYear}`);
};

Person.prototype.whichName = function () {
  console.log(`Hi, my name is ${this.name}`);
};

student.whichYear();
Bianca.whichName();
student.whichName();

//Cu prototype putem sa adaugam metode noi chiar si pentru clase predefinite
String.prototype.capitalizeWords = function () {
  return this.replace(/\b[a-z]/g, (match) => match.toUpperCase()); //g de la global  \b in fata lui sa fie spatiu si urmatorul caracter poate sa fie de la a la z
};

let text = new String(`hi, my name is bianca and i am in year three.`);
console.log(text.capitalizeWords());

//Cum aruncam o eroare
//la metoda setYear din Student
student.setYear = 0;
