let arr1=[1,2,3];
let arr2=[1,2,3];

// function personmaker(name,age){
//     const person={
//         name: name,
//         age: age,
//         talk(){
//               console.log(`hello I am ${this.name}`)
//         },
//     }
//     return person;

// }

// let p1=personmaker("Shubham",22);
// let p2=personmaker("Anju",22);


//New operator--constructor

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk=function(){
//     console.log(`HI, My name is ${this.name}`);
// }

// let p1= new Person("Shubham Verma",22);
// let p2=new Person("Anju Pandey",22);

class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    talk(){
        console.log(`Hi I am ${this.name}`)

    }
}

let p1=new Person("Shubham",22);
let p2=new Person("Anju",22);

//inheritence

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);  //call parent class
        this.marks=marks;
    }
}

let S1=new Student("Shubham",22,99);