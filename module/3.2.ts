{
  /* --oop-inheritence-- */
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} Will Sleep For ${numberOfHours}`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("Nahid", 17, "Bangladesh,Khulna");
  console.log(student1);
  student1.getSleep(5);
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    getTakeClass(numberOfClass: number) {
      console.log(`${this.name} Will Take Class ${numberOfClass}`);
    }
  }
  const teacher1 = new Teacher(
    "Baki",
    46,
    "Bangladesh, Khulna",
    "English Teacher"
  );
  console.log(teacher1);
  teacher1.getSleep(13);
  teacher1.getTakeClass(4);
}
