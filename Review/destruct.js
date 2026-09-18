const test={
    name:"Suhana",
    lastname:"parvin",
    age:20,
    gender:"Female",
    address:{
        home:"Thaliyappadath",
        pin:680125
    }
}
const {name:firstname="Suhana",lastname="T.S",age,gender:gen,study="MCA",address={home,pin}}=test;
// console.log(name);
console.log(address);
console.log(gen);
console.log(test);
console.log(study);//default value 
console.log(lastname); //The existing value (parvin) is used instead of the default value. (t.s)
console.log(firstname); //rename a property and give it a default value.

//array inside object
const arob={
    wish:"welcome",
    time:"morning",
    mood:"ok",
    food:["putt","meencurry"]
}
const {wish,time,mood,food:[food1,food2]}=arob;
console.log(food1);
console.log(food2);
console.log(time);
console.log(arob);
// const {wish,time,mood,food:[,food2]}=arob; 
//We can skip the first element using an empty position.

//object inside array
const obar=["hello",
    {name:"sugu", age:20},
    {name:"parvi", age: 21}
];
const [hello,{name:name1,age:age1},{name:name2}]=obar;
console.log(obar);
console.log(name1);
console.log(age1);
console.log(name2);

//destructure an array inside a nested object
const nesobjarr={
    name:"sugh",
    ag:20,
    father:"siraj",
    mother:"shemi",
    brothers:{
        b2:"suhail",
        b1:["safeer","farisha","aimu"]
    }
};
const {name,ag,father,mother,brothers:{b2,b1:[nam1,nam2,nam3]}}=nesobjarr;
console.log(b2);
console.log(nam1);
// you must extract it explicitly:
const{brothers}=nesobjarr;
console.log(brothers);

//rest operator in object destructuring
const naming={
    naming1:"suhana parvin",
    naming2:"Shemi",
    naming3:"Sirajudheen"
}
const{naming1,naming2,naming3,...nami}=naming;
console.log(naming);
console.log(naming1);
console.log(naming2);
console.log(naming3);

// object destructuring be used in function parameters.
function greet({nmes,ages}){
console.log({nmes,ages});
}
greet({nmes:"suhan",ages:20.5})

//
function std({hey,hello,hii}){
    console.log({hey,hello,hii});
}
const user={hey:"suhana",hello:"parvin",hii:"sugham ano"};
std(user)