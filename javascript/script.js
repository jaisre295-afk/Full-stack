//var a = 10;
//let b = 20;
//const c = 30;

//console.log(a);
//console.log(b);
//console.log(c);

//var num = 10;
//var str = "JAISRE"
//var undefined;
//var Null = null;
//var bool ="true";

//console.log(typeof num)
//console.log(typeof str)
//console.log(typeof undefined)
//console.log(typeof Null)
//console.log(typeof bool)

//var bigInt = 123n;
//var symbol = symbol("id");

//console.log(typeof bigInt);
//console.log(typeof symbol);

//var arr=[10,20,30,40];
//console.log(typeof arr,arr);
//var obj=(
    //Name:"AJAY";
   // Dept:["EIE"]
//)
//console.log(typeof obj,obj)

//arithmatic operator(+,-,*,%,/)

// var a = 10;
// var b = "jai";

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a/b);

//logical operator (&&,||,!)
//                  &&    ||
//true true         true   true
//true false        fasle  true
//false true        fasle  true
//false false       false  false

//var a = true;
//var b = false;

//console.log(a&&b);
//console.log(a||b);
//console.log(!a);

//relational operator(>,>=,<,<=,==,!=)

//a = 10;
//b = "20";
//console.log(a>b);
//console.log(a>=b);
//console.log(a<b);
//console.log(a<=b);
//console.log(a==b);
//console.log(a!=b);

//assigment operator (=,+=,-=,%=,*=,/=,**=)
//a = 10;
//b = 20; 
//a = a+b;
//a += b;
//console.log(a);
//a -= b;
//console.log(a);

//unary operator(--,++)

//var a = 10;

//console.log(a++);
//console.log(++a);

//var a = 10;

//console.log(a--);
//console.log(--a);

//a = 1;
//b = 1;
//c = 0;

//var result =a++ + --b + ++c - ++a  + ++b + c++ + b++ + a;
//console.log(result);

//conditional statement
// var a = 10;
// var b = 20;
// //if condition
// if(true){
//     //template litrerals
//     console.log(`${a} + ${b} = ${a+b}`)
// }
// if(true){
//     a = 10;
//     console.log(a);
// }

//var a;//hoisting
// console.log(a);
// var a = 10;

// var a =10;//global scope
// let b = 20;//global scope
// const c = 20;//block scope
// if(true){
//     var a = 40;
//     console.log(a);
//    // let b = 30;//block scope
//    const c = 30;//block scope
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// }

// var a = 10;
// //condition ? true satement : false statement;
// var result =a%2==0 ? "even" : "odd";
// console.log(result)

// var day = 2;
// switch(day){
//     case 1:{
//         console.log("sunday");
//         break;
//     }
//     case 2:{
//         console.log("monday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wendsday");
//         break;
//     }
//     case 5:{
//         console.log("thursday");
//         break;
//     }
//     case 6:{
//         console.log("friday");
//         break;
//     }

//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     default:{
//         console.log("Invalid input");
//         break;
//     }
// }

// //looping statement

// // 1 times 11 times 10 times
// for ( var i = 1; i <= 10; i++)
// {
//     console.log(i);
// }

// var val = 10246;
// var count = 0;
// while(val > 0){
//     count++;
//    val = Math.floor(val/10);
// }
// console.log(count);

// do{
//     console.log("do... while")
// }while(false);

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
// }


// function add(a=10,b=20){
//     console.log(a+b);
// }

// add();//hoisting

//arrow function
// var demo = (a=5,b=6) => {
//     console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);

//spred operator(...)

var arr =[10,20,30];
var arr2 =[... arr,40,50];
console.log(arr);
console.log(arr2);

//destructuring operater

var [m1,m2,m3,m4,m5] = [90,99,97,98,100];
console.log(m1,m2,m3,m4,m5);

// var {name,mobile,dept,email,isactive}={
//     name : "laks",
//     mobile : 9876543210,
//     dept : ["ct","AI&DS"],
//     email : "lakshithaanatraj@gmail.com",
//     isactive : true
// }
// console.log(name,mobile,dept,email,isactive);

// var arr =[10,20,30,40,50];
// //for..in
// for(let index in arr){
//     console.log(index);
// }
// //for..of
// for(let value of arr){
//     console.log(value);
// }
// var obj={
//     name : "laks",
//     mobile : 9876543210,
//     dept : ["AI&DS"],
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }

// var arr = [1,2,3,4,5];

// var result = arr.map((val) => (val*2));
// console.log(result);

// var even = arr.filter((val) => (val%2==0));
//     console.log(even)

//     var Sum =arr.reduce((add,val) => (add+val) , 0);
//         console.log (sum);
    
var username ={
    name:"jai"
var user ={
    ...username,
    password:123456
}
console.log(user);