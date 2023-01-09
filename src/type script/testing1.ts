class Person {
   name: string;
   public getName(): string {
    return this.name;
  }
}

const person = new Person();
  person.name = "Koyin";


 
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

let person = {
  name: 'Koyin'
  likes: 'money'
}
person.
