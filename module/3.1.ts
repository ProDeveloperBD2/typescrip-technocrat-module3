{
  /* --oop-class-- */
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    /* paremeter properties */
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`The ${this.name} Says ${this.sound}`);
    }
  }
  const dog = new Animal("King Putin", "Dog", "Ghew Ghew");
  const cat = new Animal("Jubiden", "Cat", "Meaw Meaw");
  dog.makeSound();
}
