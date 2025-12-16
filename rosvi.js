// let a = 100
// const b = 200
// var c=300
// console.log(a)
// console.log(b)
// console.log(c)
// a = 2000
// c = 4000
// console.log(a)
// console.log(b)
// console.log(c)
// var x = 10;
// function testVar() {
//     var x = 20;
//     console.log(x);
// }
// console.log(x);
// let y = 5;
// function testlet(){

//     let y = 15;
//     console.log(y);
// }
// console.log(y);
// testlet();
// console.log(y);
// const add = (a, b) => a + b;
// console.log(add(2,3))
// const a = 100
// console.log(`I take the value is ${a}`)
// const b = [{ ID: 1, salary: 2000 }, { ID: 3, salary: 4000 }]
// const students = [
//   { id: 1, marks: 80 },
//   { id: 2, marks: 55 },
//   { id: 3, marks: 90 }
// ];
// const marksList = students.filter(s => s.marks>60);
// console.log(marksList);
// const passed = students.filter(s => s.marks >= 60);
// console.log(passed);
// let a = 100
// let b = 100
// console.log(a == b)
// console.log(a===b)
// const student2 = students.find(s => s.id === 2);
// console.log(student2);

const book = { title: "pysch of money", author: "Paul", price: 700 }

arr = [10, 20, 30, 40];

const greet = (name) => {
    return `Hello ${name}! Welcome`
}
console.log(greet("Rosvi"))

const Student_report =`Student report: Name:Rosvi ,Score:60`
console.log(Student_report);

arr1 = [1, 2];
arr2 = [3, 4];
array = [...arr1, ...arr2];
console.log(array);

const mypromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Completed day 1 assignment");
    }, 2000)
});
    mypromise.then((message) => {
        console.log(message);
    })
