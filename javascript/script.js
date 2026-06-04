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

var a = 10;
var b = "jai";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a/b);

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

var a = 10;

console.log(a++);
console.log(++a);

var a = 10;

console.log(a--);
console.log(--a);

a = 1;
b = 1;
c = 0;

var result =a++ + --b + ++c - ++a  + ++b + c++ + b++ + a;
console.log(result);