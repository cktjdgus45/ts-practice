interface Human {
   name: string,
   age: number,
   gender: string
}

const person = {
   name: "cha",
   age: 25,
   gender: "male"
}

const hi = (person: Human): string => {
   return `hello im${person.name} ${person.age} years old and ${person.gender}`;
}

console.log(hi(person));

export { };