{
  /* --Abstraction: 1.Interface. 2.Abstract-- */

  /* INTERFACE */
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am Starting The Car Engine`);
    }
    stopEngine(): void {
      console.log(`I am Stopping The Car Engine`);
    }
    move(): void {
      console.log(`I am Moving The Car`);
    }
    test() {
      console.log(`I am Just Testing`);
    }
  }
  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  /* ABSTRACT */
  abstract class Car2 implements Vehicle1 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am Starting The Car Engine`);
    }
    stopEngine(): void {
      console.log(`I am Stopping The Car Engine`);
    }
    move(): void {
      console.log(`I am Moving The Car`);
    }
    test() {
      console.log(`I am Just Testing`);
    }
  }
  const hondaCar = new ToyotaCar();
  hondaCar.stopEngine();
}
