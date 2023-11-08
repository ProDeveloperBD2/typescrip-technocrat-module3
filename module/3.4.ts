{
  //
  /* --Instanceof Guards- */
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound(sound) {
      console.log(`I am Making Sound ${sound}`);
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am Barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am Meawaing");
    }
  }
  //   smart way
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    }
    return animal.makeSound(animal instanceof Dog ? "Ghew Ghew" : "Meaw Meaw");
  };
  const dog1 = new Dog("Alu Vai", "Dog");
  const cat1 = new Cat("Abul Bro", "cat");
  const result = getAnimal(dog1);
  //
}
