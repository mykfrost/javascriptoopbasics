//Lesson 1 : Encapsulation
//Reduces complexity by grouping objects together
//
//Procedural approach of solving this problem
let baseSalary = 30_000;
let overtime = 10 ;
let rate = 20 ;
console.log(getWage(baseSalary,overtime,rate));

function getWage(baseSalary , overtime , rate){

    return baseSalary + (overtime * rate);
}

//Object Oriented way

let emmployee = {
    baseSalary : 30_000,
    overtime : 10 ,
    rate : 20 ,
    getWage:function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
};

const last = emmployee.getWage();
console.log('OOP',last);

//Lesson 2 : Abstraction
//Hide details of complexity & show only essentials
//reduces complexity and isolates the impact of changes in code

//Lesson 3 : Inheritance
//Elimiates redundant code

// Lesson 4 : Polymorphism
//Refactor ugly switch/case statements
