import { Agent } from "http";
import { parse } from "path";

interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}


function sortPersons(persons: Person[]): Person[] {
  return persons
  .filter(persons=>persons.age = Number(persons.age!=0))
  .filter(persons=>persons.firstName = persons.firstName)
  .filter(persons=>persons.lastName =persons.lastName)
  .map(persons=> persons) 
  //   let age2 = Number(persons.age)
  //   if(age2 > 0){
  //     return {
  //       firstName : persons.firstName
  //       lastName : persons.lastName
  //       age : persons.age
  //     }
  //   }  
}
  


const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

console.log(sortPersons(persons))