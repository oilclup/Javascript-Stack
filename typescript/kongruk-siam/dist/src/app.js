"use strict";
console.log("start typescript");
const person1 = {
    name: "kiro",
    age: 19
};
const showDetail = (data) => {
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
};
showDetail(person1);
